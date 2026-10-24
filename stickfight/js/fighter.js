/*
 * Fighter: physics, state machine, attacks, and procedural stick-figure drawing.
 * The body is a skeleton of joint angles. Each state has a target pose; the drawn
 * pose eases toward it every frame, which interpolates between keyframes.
 *
 * Angle convention: 0 = pointing straight down, +PI/2 = pointing forward
 * (the way the fighter faces), PI = straight up.
 */
(function () {
  const SF = window.SF = window.SF || {};

  const GRAVITY = 2300, JUMP_V = 860, WALK = 270, AIR_ACCEL = 1400;
  const DIM = { head: 15, torso: 52, thigh: 35, shin: 35, upper: 28, fore: 28 };
  const HURT = { w: 40, h: 150 };

  // ---- Pose keyframes ----
  const P = (o) => Object.assign({ lean: 0, tilt: 0, ft: 0.3, fs: 0.05, bt: -0.2, bs: -0.3, fu: 0.55, ff: 2.3, bu: 0.25, bf: 2.0 }, o);
  const POSES = {
    idleA:    P({ lean: 0.06 }),
    idleB:    P({ lean: 0.1, fu: 0.62, ff: 2.4, bu: 0.3, bf: 2.1, ft: 0.34, bt: -0.24 }),
    air:      P({ lean: 0.05, ft: 0.95, fs: -0.15, bt: 0.2, bs: -0.75, fu: 1.9, ff: 2.6, bu: -0.5, bf: 0.5 }),
    fall:     P({ lean: 0.0, ft: 0.5, fs: 0.1, bt: -0.1, bs: -0.4, fu: 1.4, ff: 2.2, bu: -0.9, bf: 0.2 }),
    jab:      P({ lean: 0.18, ft: 0.45, fs: 0.1, bt: -0.35, bs: -0.35, fu: 1.52, ff: 1.57, bu: 0.45, bf: 2.2 }),
    kickWind: P({ lean: -0.14, ft: 0.95, fs: -0.65, bt: -0.08, bs: -0.12, fu: 0.1, ff: 1.5, bu: -0.5, bf: 0.7 }),
    kick:     P({ lean: -0.32, ft: 1.45, fs: 1.55, bt: -0.1, bs: -0.1, fu: 0.9, ff: 1.9, bu: -0.7, bf: 0.1 }),
    dashWind: P({ lean: -0.12, ft: 0.6, fs: -0.3, bt: -0.55, bs: -0.9, fu: -0.5, ff: 0.8, bu: -0.7, bf: 0.3 }),
    dash:     P({ lean: 0.55, ft: 0.95, fs: 0.25, bt: -0.75, bs: -0.6, fu: 1.6, ff: 1.62, bu: -0.9, bf: -0.5 }),
    block:    P({ lean: -0.1, ft: 0.38, fs: -0.08, bt: -0.32, bs: -0.45, fu: 1.3, ff: 2.95, bu: 1.05, bf: 2.85 }),
    hit:      P({ lean: -0.45, tilt: -0.35, ft: 0.15, fs: 0.0, bt: -0.4, bs: -0.3, fu: -0.5, ff: 0.3, bu: -0.9, bf: -0.3 }),
    ko:       P({ lean: -0.3, tilt: -0.5, ft: 0.5, fs: 0.2, bt: 0.1, bs: -0.2, fu: -1.4, ff: -1.1, bu: -1.8, bf: -1.5 })
  };
  const KEYS = Object.keys(POSES.idleA);

  // ---- Moves (box = [forward offset, top (relative to feet), width, height]) ----
  const MOVES = {
    light:   { startup: 0.06, active: 0.07, recovery: 0.15, dmg: 6,  hitstun: 0.24, box: [22, -118, 60, 26], pose: ['jab', 'jab'], sfx: 'light', pause: 0.05 },
    heavy:   { startup: 0.2,  active: 0.09, recovery: 0.3,  dmg: 13, hitstun: 0.42, lift: -280, box: [18, -98, 76, 40], pose: ['kickWind', 'kick'], sfx: 'heavy', pause: 0.09 },
    special: { startup: 0.16, active: 0.22, recovery: 0.3,  dmg: 12, hitstun: 0.45, lift: -320, box: [6, -128, 56, 80], pose: ['dashWind', 'dash'], sfx: 'heavy', pause: 0.1, dash: 640, cooldown: 1.4 }
  };
  const KB_PER_DMG = 30;

  class Fighter {
    constructor(def, side) {
      this.def = def;
      this.side = side;                 // 0 = player, 1 = cpu
      this.stats = Object.assign({ health: 100, speed: 1, power: 1 }, def.stats);
      this.headImg = null;
      if (def.head && def.head.image) {
        const img = new Image();
        img.onload = () => { this.headImg = img; };
        img.src = def.head.image;
      }
      this.reset(side === 0 ? 300 : 660, side === 0 ? 1 : -1);
    }

    reset(x, facing) {
      this.x = x; this.y = SF.world.floorY; this.vx = 0; this.vy = 0;
      this.facing = facing;
      this.maxHp = this.stats.health; this.hp = this.maxHp;
      this.state = 'idle'; this.stateT = 0; this.stun = 0;
      this.atk = null; this.atkSeq = 0; this.specialCd = 0;
      this.flash = 0; this.rot = 0; this.anim = Math.random() * 3;
      this.pose = Object.assign({}, POSES.idleA);
    }

    get onGround() { return this.y >= SF.world.floorY - 0.5 && this.vy >= 0; }
    get alive() { return this.state !== 'ko'; }

    setState(s) { if (this.state !== s) { this.state = s; this.stateT = 0; } }

    atkPhase() {
      if (!this.atk) return null;
      const m = this.atk.move, t = this.atk.t;
      if (t < m.startup) return 'startup';
      if (t < m.startup + m.active) return 'active';
      return 'recovery';
    }

    startAttack(name) {
      const m = MOVES[name];
      this.atk = { name, move: m, t: 0, hit: false };
      this.atkSeq++;
      this.setState('attack');
      if (this.onGround) this.vx *= 0.3;
    }

    update(dt, c, opp, world) {
      this.stateT += dt; this.anim += dt;
      if (this.flash > 0) this.flash -= dt;
      if (this.specialCd > 0) this.specialCd -= dt;

      if (this.state === 'ko') { this.updateKO(dt, world); return; }

      if (this.stun > 0) {
        this.stun -= dt;
        if (this.stun <= 0) this.setState(this.onGround ? 'idle' : 'air');
      }

      const busy = this.state === 'attack' || this.state === 'hitstun' || this.state === 'blockstun';
      if (!busy) {
        if (this.onGround) this.facing = (opp.x >= this.x) ? 1 : -1;
        const move = c.move;
        if (this.specialCd <= 0 && c.take('special')) {
          this.startAttack('special'); this.specialCd = MOVES.special.cooldown;
        } else if (c.take('heavy')) this.startAttack('heavy');
        else if (c.take('light')) this.startAttack('light');
        else if (this.onGround && c.take('jump')) {
          this.vy = -JUMP_V; this.vx = move * WALK * this.stats.speed * 0.95;
          this.setState('air'); SF.Audio.play('jump');
        } else if (this.onGround && c.block) {
          this.setState('block'); this.vx = 0;
        } else if (this.onGround) {
          this.vx = move * WALK * this.stats.speed;
          this.setState(move ? 'walk' : 'idle');
        } else {
          this.vx += move * AIR_ACCEL * dt;
          const cap = WALK * this.stats.speed;
          this.vx = Math.max(-cap, Math.min(cap, this.vx));
          this.setState('air');
        }
      }

      if (this.state === 'attack') this.updateAttack(dt, opp, world);

      // Friction while not freely moving
      if ((busy || this.state === 'block') && this.onGround && !(this.atk && this.atk.name === 'special' && this.atkPhase() === 'active')) {
        this.vx *= Math.exp(-dt * 9);
      }
      this.integrate(dt, world);
    }

    updateAttack(dt, opp, world) {
      const a = this.atk, m = a.move;
      const prev = this.atkPhase();
      a.t += dt;
      const ph = this.atkPhase();
      if (prev === 'startup' && ph !== 'startup') {
        if (a.name === 'special') { this.vx = this.facing * m.dash; SF.Audio.play('special'); }
        else SF.Audio.play('whiff');
      }
      if (ph === 'active' && !a.hit && opp.alive) {
        const hb = this.hitbox(), hu = opp.hurtbox();
        if (hb.x < hu.x + hu.w && hb.x + hb.w > hu.x && hb.y < hu.y + hu.h && hb.y + hb.h > hu.y) {
          a.hit = true;
          opp.receiveHit(this, m, world);
          if (a.name === 'special') this.vx *= 0.2;
        }
      }
      if (a.t >= m.startup + m.active + m.recovery) {
        this.atk = null;
        this.setState(this.onGround ? 'idle' : 'air');
      }
    }

    receiveHit(attacker, m, world) {
      const fromFront = Math.sign(attacker.x - this.x) === this.facing || attacker.x === this.x;
      const blocking = (this.state === 'block' || this.state === 'blockstun') && fromFront && this.onGround;
      const dmg = m.dmg * attacker.stats.power;
      const kb = dmg * KB_PER_DMG;
      if (blocking) {
        this.hp -= dmg * 0.15;
        this.setState('blockstun'); this.stun = 0.16;
        this.vx = attacker.facing * kb * 0.75;
        attacker.vx -= attacker.facing * 60;
        world.hitPause(0.04, 2);
        world.spark(this, attacker, true);
        SF.Audio.play('block');
      } else {
        this.hp -= dmg;
        this.atk = null;
        this.setState('hitstun'); this.stun = m.hitstun;
        this.vx = attacker.facing * kb;
        if (m.lift) this.vy = m.lift;
        this.flash = 0.09;
        world.hitPause(m.pause, m.dmg > 8 ? 9 : 4);
        world.spark(this, attacker, false);
        SF.Audio.play(m.sfx);
      }
      if (this.hp <= 0) {
        this.hp = 0;
        this.atk = null;
        this.setState('ko');
        this.vx = attacker.facing * 380; this.vy = -520;
        this.bounces = 0;
        world.onKO(this);
      }
    }

    updateKO(dt, world) {
      // Ragdoll-lite: tip over backward while flying, bounce once, slide to a stop.
      const target = -this.facing * Math.PI / 2; // head falls away from the opponent
      this.rot += (target * 0.98 - this.rot) * Math.min(1, dt * 6);
      if (this.onGround) this.vx *= Math.exp(-dt * 4);
      const wasAir = !this.onGround;
      this.integrate(dt, world);
      if (wasAir && this.onGround && this.bounces < 1) { this.vy = -220; this.y -= 1; this.bounces++; }
      this.ease(POSES.ko, dt, 10);
    }

    integrate(dt, world) {
      if (!this.onGround || this.vy < 0) this.vy += GRAVITY * dt;
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      if (this.y >= world.floorY) {
        this.y = world.floorY;
        if (this.vy > 0) this.vy = 0;
        if (this.state === 'air') this.setState('idle');
      }
      const minX = world.left + HURT.w / 2, maxX = world.right - HURT.w / 2;
      if (this.x < minX) { this.x = minX; if (this.vx < 0) this.vx = 0; }
      if (this.x > maxX) { this.x = maxX; if (this.vx > 0) this.vx = 0; }
    }

    hurtbox() { return { x: this.x - HURT.w / 2, y: this.y - HURT.h, w: HURT.w, h: HURT.h }; }
    hitbox() {
      const b = this.atk.move.box;
      const x = this.facing > 0 ? this.x + b[0] : this.x - b[0] - b[2];
      return { x, y: this.y + b[1], w: b[2], h: b[3] };
    }

    // ---- Animation ----
    targetPose() {
      switch (this.state) {
        case 'walk': return this.walkPose();
        case 'air': return this.vy < 0 ? POSES.air : POSES.fall;
        case 'block': case 'blockstun': return POSES.block;
        case 'hitstun': return POSES.hit;
        case 'ko': return POSES.ko;
        case 'attack': {
          const ph = this.atkPhase(), p = this.atk.move.pose;
          if (ph === 'startup') return POSES[p[0]];
          if (ph === 'active') return POSES[p[1]];
          return this.atk.t > this.atk.move.startup + this.atk.move.active + this.atk.move.recovery * 0.55 ? POSES.idleA : POSES[p[1]];
        }
        default: {
          const k = (Math.sin(this.anim * 3.2) + 1) / 2;
          return lerpPose(POSES.idleA, POSES.idleB, k);
        }
      }
    }

    walkPose() {
      const dir = Math.sign(this.vx) === this.facing ? 1 : -1;
      const ph = this.anim * 9 * dir;
      const s = Math.sin(ph), c2 = Math.cos(ph);
      return P({
        lean: 0.12,
        ft: 0.45 * s, fs: 0.45 * s - 0.25 - 0.35 * Math.max(0, c2),
        bt: -0.45 * s, bs: -0.45 * s - 0.25 - 0.35 * Math.max(0, -c2),
        fu: 0.6 + 0.2 * s, ff: 2.3, bu: 0.3 - 0.2 * s, bf: 2.0
      });
    }

    animate(dt) {
      if (this.state === 'ko') return;
      const fast = this.state === 'attack' || this.state === 'hitstun' || this.state === 'blockstun';
      this.ease(this.targetPose(), dt, fast ? 38 : 16);
      if (this.state !== 'ko') this.rot *= Math.exp(-dt * 12);
    }

    ease(target, dt, k) {
      const a = 1 - Math.exp(-dt * k);
      for (const key of KEYS) this.pose[key] += (target[key] - this.pose[key]) * a;
    }

    draw(ctx) {
      const p = this.pose, f = this.facing, d = DIM;
      const ext = (o, ang, len) => ({ x: o.x + Math.sin(ang) * len * f, y: o.y + Math.cos(ang) * len });
      const legDepth = (t, s) => Math.cos(t) * d.thigh + Math.cos(s) * d.shin;
      const grounded = this.onGround && this.state !== 'ko';
      const hipH = grounded ? Math.max(legDepth(p.ft, p.fs), legDepth(p.bt, p.bs)) : d.thigh + d.shin - 4;
      const hip = { x: this.x, y: this.y - hipH };
      const neck = { x: hip.x + Math.sin(p.lean) * d.torso * f, y: hip.y - Math.cos(p.lean) * d.torso };
      const sh = { x: hip.x + (neck.x - hip.x) * 0.92, y: hip.y + (neck.y - hip.y) * 0.92 };
      const ha = p.lean + p.tilt;
      const head = { x: neck.x + Math.sin(ha) * (d.head + 3) * f, y: neck.y - Math.cos(ha) * (d.head + 3) };

      const fk = ext(hip, p.ft, d.thigh), ffoot = ext(fk, p.fs, d.shin);
      const bk = ext(hip, p.bt, d.thigh), bfoot = ext(bk, p.bs, d.shin);
      const fe = ext(sh, p.fu, d.upper), fh = ext(fe, p.ff, d.fore);
      const be = ext(sh, p.bu, d.upper), bh = ext(be, p.bf, d.fore);

      ctx.save();
      if (this.rot) { ctx.translate(this.x, this.y); ctx.rotate(this.rot); ctx.translate(-this.x, -this.y); }

      // shadow
      if (this.state !== 'ko' || this.onGround) {
        const lift = Math.max(0, SF.world.floorY - this.y);
        ctx.fillStyle = 'rgba(0,0,0,0.28)';
        ctx.beginPath();
        ctx.ellipse(this.x, SF.world.floorY + 3, Math.max(10, 30 - lift * 0.05), 6, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      const body = this.flash > 0 ? '#ffffff' : this.def.body;
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.lineWidth = this.def.line || 6;
      const limb = (a, b, c, alpha) => {
        ctx.globalAlpha = alpha; ctx.strokeStyle = body;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(c.x, c.y); ctx.stroke();
      };
      limb(sh, be, bh, 0.7);
      limb(hip, bk, bfoot, 0.7);
      ctx.globalAlpha = 1; ctx.strokeStyle = body;
      ctx.lineWidth = (this.def.line || 6) + 1.5;
      ctx.beginPath(); ctx.moveTo(hip.x, hip.y); ctx.lineTo(neck.x, neck.y); ctx.stroke();
      ctx.lineWidth = this.def.line || 6;
      limb(hip, fk, ffoot, 1);
      limb(sh, fe, fh, 1);
      ctx.globalAlpha = 1;

      // head
      ctx.beginPath(); ctx.arc(head.x, head.y, d.head, 0, Math.PI * 2);
      if (this.headImg) {
        ctx.save(); ctx.clip();
        ctx.drawImage(this.headImg, head.x - d.head, head.y - d.head, d.head * 2, d.head * 2);
        ctx.restore();
        ctx.beginPath(); ctx.arc(head.x, head.y, d.head, 0, Math.PI * 2);
      } else {
        ctx.fillStyle = this.flash > 0 ? '#ffffff' : (this.def.head && this.def.head.color) || body;
        ctx.fill();
      }
      ctx.lineWidth = 3; ctx.strokeStyle = body; ctx.stroke();
      // eye, so you can tell which way they face
      if (!this.headImg) {
        ctx.fillStyle = '#1a1a1a';
        ctx.beginPath(); ctx.arc(head.x + 6 * f, head.y - 2, 2.4, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }
  }

  function lerpPose(a, b, k) {
    const o = {};
    for (const key of KEYS) o[key] = a[key] + (b[key] - a[key]) * k;
    return o;
  }

  SF.Fighter = Fighter;
  SF.MOVES = MOVES;
})();
