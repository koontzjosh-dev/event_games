/*
 * CPU controller. Exposes the same interface as Input (move, block, take),
 * so a Fighter can't tell whether a human or the CPU is driving it.
 *
 * Fairness rule: the AI only sees what's on screen (positions, the opponent's
 * visible animation state). It never reads the player's button presses.
 * Difficulty comes entirely from the tuning values in theme.js.
 */
(function () {
  const SF = window.SF = window.SF || {};

  class AI {
    constructor(me, opp, params) {
      this.me = me; this.opp = opp;
      this.p = Object.assign({ aggression: 0.5, reaction: 0.3, block: 0.3, combo: 0.3, range: 85 }, params);
      this.reset();
    }

    reset() {
      this.move = 0; this.block = false;
      this.q = {}; this.clock = 0;
      this.think = 0.6;            // short grace period at round start
      this.react = null; this.willBlock = false; this.seenSeq = -1;
      this.blockT = 0; this.comboLeft = 0;
    }

    press(a) { this.q[a] = this.clock; }
    take(a) {
      const t = this.q[a];
      if (t !== undefined && this.clock - t < 0.2) { delete this.q[a]; return true; }
      return false;
    }

    update(dt) {
      const me = this.me, o = this.opp, p = this.p;
      this.clock += dt;
      const dx = o.x - me.x, dist = Math.abs(dx), dir = Math.sign(dx) || 1;

      if (!o.alive || !me.alive) { this.move = 0; this.block = false; return; }

      // React to a visible attack windup, after a human-like delay.
      if (o.state === 'attack' && o.atkSeq !== this.seenSeq && o.atkPhase() === 'startup' && dist < 220) {
        this.seenSeq = o.atkSeq;
        this.react = p.reaction * (0.8 + Math.random() * 0.4);
        this.willBlock = Math.random() < p.block;
      }
      if (this.react !== null) {
        this.react -= dt;
        if (this.react <= 0) { this.react = null; if (this.willBlock) this.blockT = 0.32 + Math.random() * 0.15; }
      }
      if (this.blockT > 0) { this.blockT -= dt; this.block = true; this.move = 0; return; }
      this.block = false;

      // Keep a jab string going.
      if (this.comboLeft > 0 && me.state === 'attack' && me.atkPhase() === 'recovery') {
        this.press('light'); this.comboLeft--;
      }

      this.think -= dt;
      if (this.think > 0) return;
      this.think = 0.1 + Math.random() * 0.16 + p.reaction * 0.35;

      const inRange = dist < p.range + 25;
      if (inRange) {
        const r = Math.random();
        const attackChance = 0.25 + p.aggression * 0.55;
        const retreatChance = (1 - p.aggression) * 0.35;
        if (r < attackChance) {
          if (Math.random() < 0.25) this.press('heavy');
          else { this.press('light'); if (Math.random() < p.combo) this.comboLeft = 1 + (Math.random() < 0.5 ? 1 : 0); }
          this.move = 0;
        } else if (r < attackChance + retreatChance) {
          this.move = -dir; this.think += 0.15;
        } else {
          this.move = dist < p.range - 25 ? -dir : 0;
        }
      } else {
        if (dist > 150 && dist < 300 && Math.random() < 0.06 + p.aggression * 0.08) this.press('special');
        else this.move = Math.random() < 0.35 + p.aggression * 0.6 ? dir : 0;
        if (Math.random() < 0.03) this.press('jump');
      }
    }
  }

  SF.AI = AI;
})();
