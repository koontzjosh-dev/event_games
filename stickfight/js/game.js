/*
 * Game: canvas setup, fixed-step loop, round flow, arena + HUD + touch-control drawing.
 * World space is 960 x 540; it's scaled to fit the screen height and the
 * background extends sideways on wide phones.
 */
(function () {
  const SF = window.SF = window.SF || {};
  const T = window.THEME;
  const C = T.colors;
  const W = 960, H = 540, STEP = 1 / 60;
  const DEBUG = /[?&]debug\b/.test(location.search);

  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d', { alpha: false });
  const rotateEl = document.getElementById('rotate');
  document.getElementById('rotate-text').textContent = T.text.rotate;
  document.title = T.title;

  const view = { cssW: 0, cssH: 0, dpr: 1, scale: 1, ox: 0, oy: 0 };
  const sparks = [];
  const neutral = { move: 0, block: false, take: () => false };

  const world = SF.world = {
    floorY: T.arena.floorY, left: 0, right: W,
    freeze: 0, shake: 0,
    hitPause(t, shake) { this.freeze = Math.max(this.freeze, t); this.shake = Math.max(this.shake, shake); },
    spark(target, attacker, blocked) {
      const x = (target.x + attacker.x) / 2 + attacker.facing * 8, y = target.y - 100;
      const n = blocked ? 6 : 12;
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2, s = 150 + Math.random() * 350;
        sparks.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 0.25 + Math.random() * 0.15, t: 0, c: blocked ? '#9fe8ff' : C.accent });
      }
    },
    onKO(f) {
      if (game.mode !== 'fight') return;
      game.mode = 'ko'; game.modeT = 0;
      game.roundWinner = f === player ? 1 : 0;
      banner(T.text.ko, 1.8);
      world.hitPause(0.25, 14);
      SF.Audio.play('ko');
    }
  };

  const player = new SF.Fighter(T.player, 0);
  const cpu = new SF.Fighter(T.opponent, 1);
  const ai = new SF.AI(cpu, player, T.opponent.ai);

  const game = { mode: 'title', modeT: 0, round: 1, wins: [0, 0], timer: T.roundTime, banner: null, roundWinner: -1, fps: 60 };

  function banner(text, dur, sub) { game.banner = { text, sub: sub || '', t: 0, dur }; }

  // ---------- Flow ----------
  function startMatch() {
    game.wins = [0, 0]; game.round = 1;
    startRound();
  }
  function startRound() {
    player.reset(W / 2 - 170, 1);
    cpu.reset(W / 2 + 170, -1);
    ai.reset(); SF.Input.clearAll();
    sparks.length = 0;
    game.timer = T.roundTime; game.roundWinner = -1;
    game.mode = 'intro'; game.modeT = 0;
    banner(T.text.round + ' ' + game.round, 0.9);
    SF.Audio.play('round');
  }
  function endRound() {
    if (game.roundWinner >= 0) game.wins[game.roundWinner]++;
    if (game.wins[0] >= T.roundsToWin || game.wins[1] >= T.roundsToWin) {
      game.mode = 'over'; game.modeT = 0;
      const won = game.wins[0] > game.wins[1];
      banner(won ? T.text.youWin : T.text.youLose, 999, SF.Input.touchMode ? T.text.playAgain : T.text.playAgainKeys);
    } else {
      game.round++;
      startRound();
    }
  }

  SF.Input.onAny = () => {
    SF.Audio.unlock();
    if (game.mode === 'title') { tryFullscreen(); startMatch(); }
    else if (game.mode === 'over' && game.modeT > 1.2) startMatch();
  };

  function tryFullscreen() {
    if (!SF.Input.touchMode) return;
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (req) {
      try {
        const p = req.call(el, { navigationUI: 'hide' });
        if (p && p.then) p.then(() => screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {})).catch(() => {});
      } catch (e) {}
    }
  }

  // ---------- Update ----------
  function update(dt) {
    game.modeT += dt;
    if (game.banner) { game.banner.t += dt; if (game.banner.t > game.banner.dur) game.banner = null; }
    if (game.mode === 'title') { player.anim += dt; cpu.anim += dt; player.animate(dt); cpu.animate(dt); return; }

    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i]; s.t += dt; s.x += s.vx * dt; s.y += s.vy * dt; s.vy += 900 * dt;
      if (s.t > s.life) sparks.splice(i, 1);
    }
    if (world.shake > 0) world.shake = Math.max(0, world.shake - dt * 60);
    if (world.freeze > 0) { world.freeze -= dt; return; }   // hit-pause

    const fighting = game.mode === 'fight';
    if (fighting) {
      ai.update(dt);
      game.timer -= dt;
      if (game.timer <= 0) {
        game.timer = 0;
        game.mode = 'ko'; game.modeT = 0;
        const a = player.hp / player.maxHp, b = cpu.hp / cpu.maxHp;
        game.roundWinner = a > b ? 0 : b > a ? 1 : -1;
        banner(game.roundWinner === -1 ? T.text.draw : T.text.timeUp, 1.8);
      }
    }
    if (game.mode === 'intro' && game.modeT > 1.0 && game.mode !== 'fight') {
      game.mode = 'fight'; game.modeT = 0; banner(T.text.fight, 0.7); SF.Audio.play('fight');
    }
    if (game.mode === 'ko' && game.modeT > 2.4) { endRound(); return; }

    player.update(dt, game.mode === 'fight' ? SF.Input : neutral, cpu, world);
    cpu.update(dt, game.mode === 'fight' ? ai : neutral, player, world);
    separate(player, cpu);
    player.animate(dt); cpu.animate(dt);
  }

  // Fighters can't walk through each other (but can jump over).
  function separate(a, b) {
    if (!a.alive || !b.alive) return;
    if (Math.abs(a.y - b.y) > 110) return;
    const minD = 42, dx = b.x - a.x, d = Math.abs(dx);
    if (d >= minD) return;
    const push = (minD - d) / 2, s = dx >= 0 ? 1 : -1;
    a.x -= push * s; b.x += push * s;
    const minX = world.left + 20, maxX = world.right - 20;
    if (a.x < minX) { b.x += minX - a.x; a.x = minX; }
    if (a.x > maxX) { b.x -= a.x - maxX; a.x = maxX; }
    if (b.x < minX) { a.x += minX - b.x; b.x = minX; }
    if (b.x > maxX) { a.x -= b.x - maxX; b.x = maxX; }
  }

  // ---------- Render ----------
  function render() {
    const { dpr, scale, ox, oy, cssW, cssH } = view;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawBackdrop(cssW, cssH);

    let sx = 0, sy = 0;
    if (world.shake > 0) { sx = (Math.random() - 0.5) * world.shake; sy = (Math.random() - 0.5) * world.shake; }
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * (ox + sx * scale), dpr * (oy + sy * scale));

    drawArenaEdges();
    // draw the one in front last: the attacker, else the player
    const order = cpu.state === 'attack' && player.state !== 'attack' ? [player, cpu] : [cpu, player];
    for (const f of order) f.draw(ctx);
    for (const s of sparks) {
      ctx.globalAlpha = Math.max(0, 1 - s.t / s.life);
      ctx.strokeStyle = s.c; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 0.03, s.y - s.vy * 0.03); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    if (DEBUG) drawDebug();

    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * ox, dpr * oy);
    if (game.mode !== 'title') drawHUD();
    drawBanner();
    if (game.mode === 'title') drawTitle();

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (SF.Input.touchMode && game.mode !== 'title') drawTouchControls();
    if (DEBUG) { ctx.fillStyle = '#0f0'; ctx.font = '12px monospace'; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.fillText(Math.round(game.fps) + ' fps', 8, cssH - 8); }
  }

  function drawBackdrop(w, h) {
    const floorScreenY = view.oy + world.floorY * view.scale;
    const g = ctx.createLinearGradient(0, 0, 0, floorScreenY);
    g.addColorStop(0, C.skyTop); g.addColorStop(1, C.skyBottom);
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, floorScreenY + 1);
    // distant hills
    ctx.fillStyle = C.hills;
    ctx.beginPath(); ctx.moveTo(0, floorScreenY);
    const step = 40;
    for (let x = 0; x <= w + step; x += step) {
      const wx = (x - view.ox) / view.scale;
      const hy = 70 + 30 * Math.sin(wx * 0.006) + 18 * Math.sin(wx * 0.017 + 1.3);
      ctx.lineTo(x, floorScreenY - hy * view.scale);
    }
    ctx.lineTo(w, floorScreenY); ctx.closePath(); ctx.fill();
    // floor
    ctx.fillStyle = C.floor; ctx.fillRect(0, floorScreenY, w, h - floorScreenY);
    ctx.strokeStyle = C.floorLines; ctx.lineWidth = 1;
    for (let i = 1; i < 6; i++) {
      const y = floorScreenY + (h - floorScreenY) * (i * i) / 36;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
    ctx.strokeStyle = C.floorEdge; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(0, floorScreenY); ctx.lineTo(w, floorScreenY); ctx.stroke();
  }

  function drawArenaEdges() {
    // subtle posts marking the arena walls
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.fillRect(world.left - 8, world.floorY - 190, 8, 190);
    ctx.fillRect(world.right, world.floorY - 190, 8, 190);
  }

  function drawHUD() {
    const barW = 360, barH = 22, top = 22;
    drawBar(30, top, barW, barH, player.hp / player.maxHp, C.hpPlayer, false);
    drawBar(W - 30 - barW, top, barW, barH, cpu.hp / cpu.maxHp, C.hpCpu, true);
    ctx.font = '700 17px ' + T.font; ctx.fillStyle = C.ui; ctx.textBaseline = 'top';
    ctx.textAlign = 'left'; ctx.fillText(player.def.name, 32, top + barH + 6);
    ctx.textAlign = 'right'; ctx.fillText(cpu.def.name, W - 32, top + barH + 6);
    // round wins
    for (let i = 0; i < T.roundsToWin; i++) {
      pip(32 + 130 + i * 20, top + barH + 15, i < game.wins[0]);
      pip(W - 32 - 130 - i * 20, top + barH + 15, i < game.wins[1]);
    }
    // timer
    ctx.fillStyle = C.hpBack;
    roundRect(W / 2 - 34, top - 6, 68, 40, 10); ctx.fill();
    ctx.fillStyle = game.timer < 10 ? C.hpLow : C.ui;
    ctx.font = '900 28px ' + T.font; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(Math.ceil(game.timer), W / 2, top + 14);
  }

  function drawBar(x, y, w, h, frac, color, rtl) {
    ctx.fillStyle = C.hpBack; roundRect(x - 3, y - 3, w + 6, h + 6, 8); ctx.fill();
    const fw = Math.max(0, w * frac);
    ctx.fillStyle = frac < 0.3 ? C.hpLow : color;
    if (fw > 0) { roundRect(rtl ? x + w - fw : x, y, fw, h, 6); ctx.fill(); }
  }
  function pip(x, y, on) {
    ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = on ? C.accent : 'rgba(255,255,255,0.18)'; ctx.fill();
  }

  function drawBanner() {
    const b = game.banner; if (!b) return;
    const k = Math.min(1, b.t / 0.12);
    const s = 0.7 + 0.3 * k;
    ctx.save();
    ctx.translate(W / 2, 220); ctx.scale(s, s);
    ctx.globalAlpha = b.dur < 900 && b.t > b.dur - 0.2 ? Math.max(0, (b.dur - b.t) / 0.2) : 1;
    ctx.font = '900 76px ' + T.font; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.lineWidth = 10; ctx.strokeStyle = 'rgba(0,0,0,0.6)'; ctx.strokeText(b.text, 0, 0);
    ctx.fillStyle = C.accent; ctx.fillText(b.text, 0, 0);
    if (b.sub && game.modeT > 1.2) {
      ctx.font = '700 24px ' + T.font; ctx.fillStyle = C.ui;
      ctx.globalAlpha = 0.6 + 0.4 * Math.sin(game.modeT * 4);
      ctx.fillText(b.sub, 0, 70);
    }
    ctx.restore();
  }

  function drawTitle() {
    ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(-500, 0, W + 1000, H);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '900 84px ' + T.font;
    ctx.lineWidth = 12; ctx.strokeStyle = 'rgba(0,0,0,0.6)'; ctx.strokeText(T.title, W / 2, 170);
    ctx.fillStyle = C.accent; ctx.fillText(T.title, W / 2, 170);
    ctx.font = '700 26px ' + T.font; ctx.fillStyle = C.ui;
    ctx.globalAlpha = 0.6 + 0.4 * Math.sin(game.modeT * 4);
    ctx.fillText(SF.Input.touchMode ? T.text.tapToStart : T.text.pressToStart, W / 2, 250);
    ctx.globalAlpha = 1;
    if (!SF.Input.touchMode) {
      ctx.font = '600 16px ' + T.font; ctx.fillStyle = C.uiDim;
      ctx.fillText('Move: arrows / WASD    Jump: up / W / space    Light: J    Heavy: K    Block: L    Special: ;', W / 2, 500);
    }
  }

  function drawTouchControls() {
    const L = SF.Input.layout, st = SF.Input.stick;
    // stick
    const cx = st.active ? st.ox : L.stickHome.x, cy = st.active ? st.oy : L.stickHome.y;
    ctx.globalAlpha = st.active ? 0.9 : 0.55;
    ctx.fillStyle = C.buttons; ctx.strokeStyle = C.buttonEdge; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx, cy, L.stickR, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    const kx = st.active ? st.x : cx, ky = st.active ? st.y : cy;
    ctx.fillStyle = st.active ? C.buttonsPressed : 'rgba(255,255,255,0.3)';
    ctx.beginPath(); ctx.arc(kx, ky, L.r * 0.62, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // up arrow hint for jump
    ctx.fillStyle = C.buttonEdge;
    ctx.beginPath(); ctx.moveTo(cx, cy - L.stickR + 8); ctx.lineTo(cx - 8, cy - L.stickR + 20); ctx.lineTo(cx + 8, cy - L.stickR + 20); ctx.closePath(); ctx.fill();
    // buttons
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '800 ' + Math.round(L.r * 0.36) + 'px ' + T.font;
    for (const b of L.buttons) {
      const on = SF.Input.isPressed(b.id);
      const cooling = b.id === 'special' && player.specialCd > 0;
      ctx.globalAlpha = cooling ? 0.4 : (on ? 1 : 0.75);
      ctx.fillStyle = on ? C.buttonsPressed : C.buttons;
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = C.buttonEdge; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = C.ui; ctx.fillText(T.text.buttons[b.id], b.x, b.y);
    }
    ctx.globalAlpha = 1;
  }

  function drawDebug() {
    ctx.lineWidth = 1.5;
    for (const f of [player, cpu]) {
      const h = f.hurtbox(); ctx.strokeStyle = '#3f6'; ctx.strokeRect(h.x, h.y, h.w, h.h);
      if (f.atk && f.atkPhase() === 'active') { const b = f.hitbox(); ctx.strokeStyle = '#f33'; ctx.strokeRect(b.x, b.y, b.w, b.h); }
      ctx.fillStyle = '#fff'; ctx.font = '11px monospace'; ctx.textAlign = 'center';
      ctx.fillText(f.state, f.x, f.y + 16);
    }
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  // ---------- Sizing ----------
  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    view.cssW = w; view.cssH = h; view.dpr = dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    view.scale = Math.min(w / W, h / H);
    view.ox = (w - W * view.scale) / 2;
    view.oy = (h - H * view.scale) / 2;
    SF.Input.setSize(w, h);
    const portrait = h > w && SF.Input.touchMode;
    rotateEl.classList.toggle('on', portrait);
    if (portrait) SF.Input.clearAll();
  }
  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', () => setTimeout(resize, 150));

  // ---------- Loop ----------
  let last = performance.now(), acc = 0;
  function frame(t) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.1, (t - last) / 1000); last = t;
    if (document.hidden || rotateEl.classList.contains('on')) { acc = 0; return; }
    if (dt > 0) game.fps += (1 / dt - game.fps) * 0.05;
    acc += dt;
    let n = 0;
    while (acc >= STEP && n < 5) { update(STEP); acc -= STEP; n++; }
    if (n === 5) acc = 0;
    render();
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) SF.Input.clearAll();
    last = performance.now();
  });

  SF.Input.attach(canvas);
  resize();
  requestAnimationFrame(frame);
  SF.game = game; SF.player = player; SF.cpu = cpu; // handy for debugging in the console
})();
