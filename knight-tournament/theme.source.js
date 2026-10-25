/* Knight Tournament — Pisgah Band slingshot variant (theme for the Slingshot engine 2.1.0)
 * 17th Annual Knight Tournament · North Henderson HS · Oct 24, 2026 · 5A class
 * Players: Pisgah Black Bears band sections. Rivals: Chase Trojans and A.C. Reynolds Rockets.
 * Readable source; build.sh inlines this into index.html. */
(() => {
  const { clamp, rr, rnd } = Slingshot.h;
  const TAU = Math.PI * 2;
  const RED = "#d8281f";
  const GOLD = "#f2c14a";
  const BEAR = { main: "#2a2a2a", light: "#5c5c5c", dark: "#0e0e0e", belly: "#efe6d8" };

  /* ---------- shared drawing helpers ---------- */
  const circ = (c, x, y, r, fill, stroke, lw) => {
    c.beginPath(); c.arc(x, y, r, 0, TAU);
    if (fill) { c.fillStyle = fill; c.fill(); }
    if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw || 1.5; c.stroke(); }
  };
  const ell = (c, x, y, rx, ry, rot, fill, stroke, lw) => {
    c.beginPath(); c.ellipse(x, y, rx, ry, rot || 0, 0, TAU);
    if (fill) { c.fillStyle = fill; c.fill(); }
    if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw || 1.5; c.stroke(); }
  };
  const line = (c, pts, stroke, lw, cap) => {
    c.beginPath(); pts.forEach((p, i) => (i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])));
    c.strokeStyle = stroke; c.lineWidth = lw; c.lineCap = cap || "round"; c.stroke(); c.lineCap = "butt";
  };

  /* ---------- Pisgah bear (head) base, ported from Pisgah vs Tuscola ---------- */
  function bearHead(c, a, { mood, blink, look }, opts = {}) {
    const P = BEAR, er = 0.34 * a;
    if (!opts.noEars)
      for (const [x, y] of [[-0.6 * a, -0.82 * a], [0.3 * a, -0.95 * a]]) {
        circ(c, x, y, er, P.main, "rgba(0,0,0,.55)", 1.5);
        circ(c, x, y + 0.1 * er, 0.55 * er, RED);
      }
    const g = c.createRadialGradient(-0.3 * a, -0.4 * a, 0.1 * a, 0, 0, 1.1 * a);
    g.addColorStop(0, P.light); g.addColorStop(0.6, P.main); g.addColorStop(1, P.dark);
    circ(c, 0, 0, a, g, "rgba(0,0,0,.6)", Math.max(1.5, 0.09 * a));
    // light rim so black bears read against night skies
    circ(c, 0, 0, a + 1.2, null, "rgba(255,255,255,.55)", 1.6);
    ell(c, 0.5 * a, 0.28 * a, 0.52 * a, 0.4 * a, 0.1, P.belly, "rgba(0,0,0,.25)", 1);
    ell(c, 0.86 * a, 0.1 * a, 0.2 * a, 0.14 * a, 0, "#111");
    ell(c, 0.82 * a, 0.05 * a, 0.06 * a, 0.03 * a, 0, "rgba(255,255,255,.5)");
    if (!opts.noMouth) {
      c.strokeStyle = "#111"; c.lineWidth = 1.6; c.beginPath();
      c.moveTo(0.86 * a, 0.22 * a); c.lineTo(0.86 * a, 0.34 * a);
      c.quadraticCurveTo(0.7 * a, 0.5 * a, 0.45 * a, 0.42 * a); c.stroke();
    }
    const lx = look ? clamp(look.x, -1, 1) : 0, ly = look ? clamp(look.y, -1, 1) : 0, fly = mood === "fly";
    for (const ex of [0.02 * a, 0.46 * a]) {
      const ey = -0.23 * a, r = 0.2 * a;
      if (mood === "dizzy") {
        const k = 0.7 * r;
        line(c, [[ex - k, ey - k], [ex + k, ey + k]], "#fff", 2);
        line(c, [[ex + k, ey - k], [ex - k, ey + k]], "#fff", 2);
        continue;
      }
      ell(c, ex, ey, r, blink ? 0.15 * r : r, 0, "#fff");
      if (!blink) circ(c, ex + lx * r * 0.3 + 0.15 * r, ey + ly * r * 0.3, r * (fly ? 0.55 : 0.45), "#111");
      c.save(); c.beginPath(); c.arc(ex, ey, 1.03 * r, 0, TAU); c.clip();
      c.fillStyle = P.main; c.beginPath();
      c.moveTo(ex - 1.5 * r, ey - 1.6 * r); c.lineTo(ex + 1.5 * r, ey - 1.6 * r);
      c.lineTo(ex + 1.5 * r, ey - r * (fly ? 0.1 : 0.35)); c.lineTo(ex - 1.5 * r, ey - r * (fly ? 1 : 0.95));
      c.closePath(); c.fill(); c.restore();
    }
  }

  // Marching shako: black hat, red band, gold badge, visor, chin strap, plume
  function shako(c, a, o = {}) {
    const H = (o.h || 1) * a, w0 = 0.6 * a, w1 = 0.5 * a;
    const body = o.color || "#151515", band = o.band || RED, plume = o.plume || "#ffffff";
    c.save(); c.translate(-0.08 * a, -0.68 * a); c.rotate(-0.12);
    // plume (behind top)
    c.fillStyle = plume; c.strokeStyle = "rgba(0,0,0,.35)"; c.lineWidth = 1;
    c.beginPath(); c.moveTo(-0.12 * a, -H + 0.05 * a);
    c.quadraticCurveTo(-0.45 * a, -H - 0.55 * a, -0.05 * a, -H - 0.75 * a);
    c.quadraticCurveTo(0.35 * a, -H - 0.5 * a, 0.12 * a, -H + 0.05 * a);
    c.closePath(); c.fill(); c.stroke();
    if (o.plume2) {
      c.fillStyle = o.plume2; c.beginPath(); c.moveTo(-0.05 * a, -H);
      c.quadraticCurveTo(-0.2 * a, -H - 0.45 * a, 0, -H - 0.55 * a);
      c.quadraticCurveTo(0.15 * a, -H - 0.35 * a, 0.06 * a, -H); c.closePath(); c.fill();
    }
    // body
    c.fillStyle = body; c.strokeStyle = "#000"; c.lineWidth = 1.5;
    c.beginPath(); c.moveTo(-w0, 0); c.lineTo(-w1, -H); c.lineTo(w1, -H); c.lineTo(w0, 0); c.closePath();
    c.fill(); c.stroke();
    // band
    const yb0 = -0.16 * H, yb1 = -0.36 * H, wAt = (y) => w0 + (w1 - w0) * (-y / H);
    c.fillStyle = band; c.beginPath();
    c.moveTo(-wAt(yb0), yb0); c.lineTo(-wAt(yb1), yb1); c.lineTo(wAt(yb1), yb1); c.lineTo(wAt(yb0), yb0);
    c.closePath(); c.fill();
    // top rim
    ell(c, 0, -H, w1, 0.1 * a, 0, o.top || "#2b2b2b", "#000", 1.2);
    // badge
    circ(c, 0.12 * a, -0.62 * H, 0.15 * a, GOLD, "#8a6a10", 1);
    // visor (brim pointing forward)
    c.fillStyle = "#050505"; c.beginPath(); c.moveTo(-0.1 * a, 0);
    c.quadraticCurveTo(0.45 * a, 0.12 * a, 0.86 * a, 0.02 * a);
    c.quadraticCurveTo(0.5 * a, -0.06 * a, -0.1 * a, -0.06 * a); c.closePath(); c.fill();
    // chin strap
    c.strokeStyle = o.strap || GOLD; c.lineWidth = Math.max(1.2, 0.06 * a);
    c.beginPath(); c.moveTo(-0.45 * a, -0.02 * a); c.quadraticCurveTo(-0.1 * a, 0.75 * a, 0.5 * a, 0.62 * a); c.stroke();
    c.restore();
  }

  /* ---------- band section sprites ---------- */
  function brassBody(c, a, s) {
    bearHead(c, a, s, { noMouth: true });
    shako(c, a);
    // trumpet from the muzzle, bell forward
    c.save(); c.translate(0.8 * a, 0.28 * a); c.rotate(-0.08);
    const tg = c.createLinearGradient(0, -0.1 * a, 0, 0.1 * a);
    tg.addColorStop(0, "#fff2a8"); tg.addColorStop(0.5, "#e8b830"); tg.addColorStop(1, "#9a6e08");
    c.fillStyle = tg; c.strokeStyle = "#6a4a05"; c.lineWidth = 1;
    rr(c, 0, -0.07 * a, 1.05 * a, 0.14 * a, 0.05 * a); c.fill(); c.stroke();
    // lead pipe loop
    c.strokeStyle = "#c9961e"; c.lineWidth = 0.08 * a;
    c.beginPath(); c.ellipse(0.5 * a, 0.16 * a, 0.36 * a, 0.12 * a, 0, 0, TAU); c.stroke();
    // valves
    for (const vx of [0.36, 0.5, 0.64]) {
      c.fillStyle = "#d9a828"; c.fillRect(vx * a - 0.05 * a, -0.28 * a, 0.1 * a, 0.22 * a);
      circ(c, vx * a, -0.3 * a, 0.06 * a, "#fff6d0", "#8a6a10", 1);
    }
    // bell
    c.fillStyle = tg; c.strokeStyle = "#6a4a05"; c.lineWidth = 1.2;
    c.beginPath(); c.moveTo(1.0 * a, -0.08 * a);
    c.quadraticCurveTo(1.25 * a, -0.12 * a, 1.42 * a, -0.4 * a); c.lineTo(1.42 * a, 0.4 * a);
    c.quadraticCurveTo(1.25 * a, 0.12 * a, 1.0 * a, 0.08 * a); c.closePath(); c.fill(); c.stroke();
    ell(c, 1.42 * a, 0, 0.08 * a, 0.4 * a, 0, "#7a5408", "#6a4a05", 1);
    c.restore();
  }

  function woodwindBody(c, a, s) {
    bearHead(c, a, s, { noMouth: true });
    shako(c, a);
    // clarinet angled down and forward
    c.save(); c.translate(0.82 * a, 0.3 * a); c.rotate(0.95);
    c.fillStyle = "#151515"; c.strokeStyle = "#000"; c.lineWidth = 1;
    rr(c, 0, -0.08 * a, 1.25 * a, 0.16 * a, 0.06 * a); c.fill(); c.stroke();
    c.beginPath(); c.moveTo(1.2 * a, -0.08 * a); c.lineTo(1.5 * a, -0.2 * a); c.lineTo(1.5 * a, 0.2 * a);
    c.lineTo(1.2 * a, 0.08 * a); c.closePath(); c.fill(); c.stroke();
    for (const k of [0.25, 0.45, 0.65, 0.85, 1.02]) circ(c, k * a, 0, 0.045 * a, "#dfe5ea");
    c.strokeStyle = "#c7cdd3"; c.lineWidth = 1;
    c.beginPath(); c.moveTo(0.2 * a, -0.06 * a); c.lineTo(1.05 * a, -0.06 * a); c.stroke();
    c.restore();
  }

  function snare(c, a, w, top, bot) {
    const rx = w / 2, ry = 0.22 * a;
    const g = c.createLinearGradient(-rx, 0, rx, 0);
    g.addColorStop(0, "#8e1710"); g.addColorStop(0.35, "#ef4034"); g.addColorStop(1, "#8e1710");
    c.fillStyle = g; c.strokeStyle = "#2a0805"; c.lineWidth = 1.6;
    c.beginPath(); c.moveTo(-rx, top); c.lineTo(-rx, bot); c.ellipse(0, bot, rx, ry, 0, Math.PI, 0, true);
    c.lineTo(rx, top); c.closePath(); c.fill(); c.stroke();
    c.save(); c.clip();
    c.fillStyle = "#fff"; c.fillRect(-rx, top + 0.38 * (bot - top), w, 0.26 * (bot - top));
    c.restore();
    for (let i = 0; i < 5; i++) {
      const x = -rx + ((i + 0.5) * w) / 5;
      c.fillStyle = "rgba(223,229,234,.6)"; c.fillRect(x - 0.5, top, 1, bot - top);
    }
    ell(c, 0, top, rx, ry, 0, "#fffdf6", "#cfd6dc", 2.5);
  }

  function drumlineBody(c, a, s) {
    // sticks behind
    line(c, [[-0.2 * a, 0.75 * a], [-0.9 * a, -0.15 * a]], "#e8d3a8", 0.12 * a);
    line(c, [[0.5 * a, 0.75 * a], [1.25 * a, -0.05 * a]], "#e8d3a8", 0.12 * a);
    circ(c, -0.9 * a, -0.15 * a, 0.09 * a, "#fff");
    circ(c, 1.25 * a, -0.05 * a, 0.09 * a, "#fff");
    bearHead(c, a, s);
    shako(c, a);
    c.save(); c.translate(0.1 * a, 0); c.rotate(-0.08);
    snare(c, a, 1.75 * a, 0.68 * a, 1.45 * a);
    c.restore();
  }

  function frontBody(c, a, s) {
    // mallets crossed behind the head
    for (const [x0, y0, x1, y1] of [[-0.5 * a, 0.5 * a, 0.95 * a, -1.45 * a], [0.6 * a, 0.5 * a, -0.95 * a, -1.4 * a]]) {
      line(c, [[x0, y0], [x1, y1]], "#c9a46a", 0.1 * a);
      circ(c, x1, y1, 0.24 * a, RED, "#5a0a06", 1.2);
      circ(c, x1 - 0.07 * a, y1 - 0.07 * a, 0.07 * a, "rgba(255,255,255,.45)");
    }
    bearHead(c, a, s);
    // black ball cap with red brim (front ensemble look)
    c.save(); c.translate(-0.05 * a, -0.55 * a);
    c.fillStyle = "#141414"; c.strokeStyle = "#000"; c.lineWidth = 1.4;
    c.beginPath(); c.arc(0, 0.05 * a, 0.82 * a, Math.PI * 1.04, Math.PI * 1.96); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = RED; c.beginPath(); c.moveTo(0.5 * a, -0.02 * a);
    c.quadraticCurveTo(1.0 * a, -0.08 * a, 1.25 * a, 0.08 * a); c.lineTo(0.55 * a, 0.12 * a); c.closePath(); c.fill(); c.stroke();
    pisgahP(c, -0.02 * a, -0.4 * a, 0.36 * a);
    c.restore();
    // marimba bars under the chin
    const bars = ["#7a3a1c", "#8a4422", "#9a4e28", "#7a3a1c", "#8a4422"];
    for (let i = 0; i < 5; i++) {
      const bx = -0.75 * a + i * 0.34 * a, bh = (0.5 - i * 0.06) * a;
      c.fillStyle = bars[i]; c.strokeStyle = "#2a1208"; c.lineWidth = 1;
      rr(c, bx, 0.92 * a, 0.28 * a, bh, 0.05 * a); c.fill(); c.stroke();
    }
    c.fillStyle = "#9aa3ad"; c.fillRect(-0.8 * a, 1.0 * a, 1.75 * a, 0.06 * a);
  }

  function guardBody(c, a, s) {
    bearHead(c, a, s);
    // red headband with bow
    c.save(); c.beginPath(); c.arc(0, 0, a, 0, TAU); c.clip();
    c.fillStyle = RED; c.beginPath(); c.arc(0, 0.25 * a, 1.08 * a, Math.PI * 1.15, Math.PI * 1.85);
    c.arc(0, 0.25 * a, 0.86 * a, Math.PI * 1.85, Math.PI * 1.15, true); c.closePath(); c.fill();
    c.restore();
    c.fillStyle = RED; c.strokeStyle = "#5a0a06"; c.lineWidth = 1.2;
    for (const d of [-1, 1]) {
      c.beginPath(); c.moveTo(-0.55 * a, -0.62 * a);
      c.lineTo(-0.55 * a + d * 0.4 * a, -0.95 * a); c.lineTo(-0.55 * a + d * 0.45 * a, -0.5 * a); c.closePath();
      c.fill(); c.stroke();
    }
    circ(c, -0.55 * a, -0.65 * a, 0.12 * a, "#fff", "#5a0a06", 1);
    // eyelash sparkle
    for (const ex of [0.02 * a, 0.46 * a]) circ(c, ex + 0.2 * a, -0.42 * a, 0.045 * a, "#fff");
  }
  function guardFlag(c, a, t, mood) {
    // pole
    line(c, [[-0.1 * a, 0.7 * a], [-0.55 * a, -2.6 * a]], "#e9e4d8", 0.11 * a);
    circ(c, -0.55 * a, -2.66 * a, 0.12 * a, GOLD);
    // waving silk
    const top = -2.55 * a, len = 1.7 * a, h = 1.05 * a, k = mood === "fly" ? 16 : 7;
    const wave = (u) => Math.sin(t * k + u * 4) * 0.16 * a * u;
    c.save(); c.translate(-0.55 * a, 0);
    const edge = (y0) => { const pts = []; for (let i = 0; i <= 8; i++) { const u = i / 8; pts.push([-u * len, y0 + wave(u) + u * 0.25 * a]); } return pts; };
    const T = edge(top), B = edge(top + h);
    c.beginPath(); T.forEach((p, i) => (i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])));
    for (let i = B.length - 1; i >= 0; i--) c.lineTo(B[i][0], B[i][1]);
    c.closePath();
    const g = c.createLinearGradient(0, 0, -len, 0);
    g.addColorStop(0, RED); g.addColorStop(0.5, "#141414"); g.addColorStop(1, RED);
    c.fillStyle = g; c.fill(); c.strokeStyle = "#fff"; c.lineWidth = 1.5; c.stroke();
    // white chevron stripe
    const M = edge(top + h / 2);
    c.beginPath(); M.forEach((p, i) => (i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])));
    c.strokeStyle = "rgba(255,255,255,.9)"; c.lineWidth = 0.14 * a; c.stroke();
    c.restore();
  }

  function majorBody(c, a, s) {
    bearHead(c, a, s, { noMouth: true });
    shako(c, a, { h: 1.35, color: "#f4f4f4", band: RED, top: "#ddd", plume: RED, plume2: "#fff", strap: "#c9ced6" });
    // whistle
    c.fillStyle = "#c9ced6"; c.strokeStyle = "#555"; c.lineWidth = 1;
    rr(c, 0.82 * a, 0.3 * a, 0.36 * a, 0.16 * a, 0.05 * a); c.fill(); c.stroke();
    line(c, [[0.9 * a, 0.46 * a], [0.4 * a, 0.85 * a]], "#c9ced6", 1.4);
    // white glove holding the mace up
    line(c, [[1.05 * a, 1.0 * a], [1.35 * a, -1.6 * a]], "#d9dde3", 0.11 * a);
    circ(c, 1.36 * a, -1.7 * a, 0.2 * a, "#e8eef4", "#8a95a3", 1.2);
    circ(c, 1.05 * a, 1.02 * a, 0.12 * a, GOLD);
    for (let i = 0; i < 4; i++) line(c, [[1.3 * a + i * 0.02 * a, -1.2 * a + i * 0.4 * a], [1.2 * a + i * 0.02 * a, -1.0 * a + i * 0.4 * a]], RED, 0.06 * a);
    circ(c, 1.18 * a, 0.25 * a, 0.22 * a, "#fff", "#bbb", 1);
  }

  /* ---------- rivals ---------- */
  const CHASE_BLUE = "#1d4fb8", CHASE_DARK = "#0e2a6a", CHASE_GOLD = "#e8a817";
  const ACR_GREEN = "#1f8a45", ACR_DARK = "#0d4d24", ACR_GOLD = "#f4c430";

  function rivalEyes(c, o, { hit, blink, look }, ex, ey, er, browCol, angry) {
    for (const d of [-1, 1]) {
      const x = d * ex;
      if (hit) {
        const k = er * 0.75;
        line(c, [[x - k, ey - k], [x + k, ey + k]], "#222", 2);
        line(c, [[x + k, ey - k], [x - k, ey + k]], "#222", 2);
        continue;
      }
      c.save(); c.translate(x, ey); c.scale(1, blink ? 0.1 : 1);
      circ(c, 0, 0, er, "#fff", "rgba(0,0,0,.5)", 1);
      circ(c, look.x * er * 0.4, look.y * er * 0.4, er * 0.52, "#111");
      c.restore();
      if (browCol) {
        line(c, [[x - d * er * 1.1, ey - er * (angry ? 1.55 : 1.35)], [x + d * er * 1.0, ey - er * (angry ? 1.0 : 1.4)]], browCol, Math.max(2, er * 0.45));
      }
    }
  }
  function hurtMarks(c, o) {
    ell(c, -0.55 * o, 0.25 * o, 0.17 * o, 0.12 * o, 0.4, "rgba(120,70,150,.5)");
    c.save(); c.translate(0.52 * o, 0.3 * o); c.rotate(-0.5);
    c.fillStyle = "#fff"; c.strokeStyle = "#aaa"; c.lineWidth = 1;
    c.fillRect(-0.2 * o, -0.06 * o, 0.4 * o, 0.12 * o); c.fillRect(-0.06 * o, -0.2 * o, 0.12 * o, 0.4 * o);
    c.restore();
  }

  // Chase Trojan: helmeted, gold-crested, very sure of himself
  function trojan(kind) {
    const king = kind === "king", cadet = kind === "cadet";
    return (c, o, st) => {
      const { hit, hurt, armor } = st;
      // crest (behind helmet top)
      const ch = king ? 2.3 : cadet ? 1.62 : 1.95, cw = king ? 0.34 : 0.28;
      c.fillStyle = king ? "#d8281f" : CHASE_GOLD; c.strokeStyle = king ? "#6a0a06" : "#7a5408"; c.lineWidth = 1.5;
      c.beginPath(); c.moveTo(-cw * o, -0.85 * o);
      c.quadraticCurveTo(-cw * 1.3 * o, -ch * o, 0, -ch * o - 0.05 * o);
      c.quadraticCurveTo(cw * 1.3 * o, -ch * o, cw * o, -0.85 * o); c.closePath(); c.fill(); c.stroke();
      c.strokeStyle = king ? "rgba(255,200,180,.6)" : "rgba(122,84,8,.7)"; c.lineWidth = 1;
      for (const k of [-0.6, -0.2, 0.2, 0.6]) {
        c.beginPath(); c.moveTo(k * cw * o, -0.9 * o); c.lineTo(k * cw * 1.1 * o, -ch * o + 0.08 * o); c.stroke();
      }
      if (king) { // gold tips on the red crest
        c.fillStyle = CHASE_GOLD; c.beginPath(); c.ellipse(0, -ch * o + 0.05 * o, cw * 0.9 * o, 0.12 * o, 0, 0, TAU); c.fill();
      }
      // face
      const g = c.createRadialGradient(-0.3 * o, -0.3 * o, 0.1 * o, 0, 0, 1.1 * o);
      g.addColorStop(0, "#ffe0c0"); g.addColorStop(0.65, "#f0bd8e"); g.addColorStop(1, "#cf9060");
      circ(c, 0, 0, o, g, "#3a2410", 2);
      // helmet dome
      const hg = c.createLinearGradient(0, -1.1 * o, 0, 0);
      hg.addColorStop(0, "#4f82e8"); hg.addColorStop(1, CHASE_BLUE);
      c.fillStyle = hg; c.strokeStyle = CHASE_DARK; c.lineWidth = 2;
      c.beginPath(); c.arc(0, 0.02 * o, 1.07 * o, Math.PI * 1.0, Math.PI * 2.0); c.closePath(); c.fill(); c.stroke();
      // gold brow band
      c.fillStyle = CHASE_GOLD; rr(c, -1.08 * o, -0.2 * o, 2.16 * o, 0.18 * o, 3); c.fill();
      c.strokeStyle = "#7a5408"; c.lineWidth = 1; c.stroke();
      if (!cadet) {
        // cheek guards + nose guard
        c.fillStyle = CHASE_BLUE; c.strokeStyle = CHASE_DARK; c.lineWidth = 1.5;
        for (const d of [-1, 1]) {
          c.beginPath(); c.moveTo(d * 1.06 * o, -0.05 * o); c.lineTo(d * 0.72 * o, -0.05 * o);
          c.quadraticCurveTo(d * 0.62 * o, 0.45 * o, d * 0.8 * o, 0.72 * o);
          c.quadraticCurveTo(d * 1.05 * o, 0.4 * o, d * 1.06 * o, -0.05 * o); c.closePath(); c.fill(); c.stroke();
        }
        c.fillStyle = CHASE_GOLD; rr(c, -0.07 * o, -0.04 * o, 0.14 * o, 0.42 * o, 2); c.fill();
      }
      rivalEyes(c, o, st, 0.33 * o, 0.12 * o, 0.17 * o, "#3a2410", !cadet);
      // mouth
      if (hit) ell(c, 0, 0.58 * o, 0.15 * o, 0.17 * o, 0, "#4a0f0f");
      else {
        c.strokeStyle = "#5a2a10"; c.lineWidth = 2; c.beginPath();
        c.moveTo(-0.22 * o, 0.55 * o); c.quadraticCurveTo(0.05 * o, 0.7 * o, 0.28 * o, 0.48 * o); c.stroke();
      }
      if (king) {
        // chin strap + gold cheek studs
        for (const d of [-1, 1]) circ(c, d * 0.86 * o, 0.25 * o, 0.07 * o, CHASE_GOLD, "#7a5408", 1);
      }
      if (hurt) hurtMarks(c, o);
      if (armor) {
        // round shield in front, lower right
        c.save(); c.translate(0.55 * o, 0.62 * o);
        circ(c, 0, 0, 0.58 * o, CHASE_BLUE, CHASE_GOLD, 0.12 * o);
        c.fillStyle = CHASE_GOLD; c.font = `900 ${Math.round(0.62 * o)}px "Trebuchet MS",sans-serif`;
        c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("C", 0, 0.03 * o);
        c.restore();
      }
    };
  }

  // A.C. Reynolds Rocket: green fuselage, gold nose cone and fins, face in the porthole
  function rocket(kind) {
    const king = kind === "king", small = kind === "small";
    return (c, o, st) => {
      const { hit, hurt } = st;
      // fins
      c.fillStyle = ACR_GOLD; c.strokeStyle = "#7a5a05"; c.lineWidth = 1.5;
      for (const d of [-1, 1]) {
        c.beginPath(); c.moveTo(d * 0.62 * o, 0.25 * o);
        c.quadraticCurveTo(d * 1.35 * o, 0.45 * o, d * 1.38 * o, 1.0 * o);
        c.lineTo(d * 0.72 * o, 0.82 * o); c.closePath(); c.fill(); c.stroke();
      }
      // nose cone
      const tip = king ? 2.25 : small ? 1.9 : 2.1;
      const ng = c.createLinearGradient(-0.7 * o, 0, 0.7 * o, 0);
      ng.addColorStop(0, "#c99a10"); ng.addColorStop(0.4, "#ffe27a"); ng.addColorStop(1, "#b88a0a");
      c.fillStyle = ng; c.beginPath(); c.moveTo(-0.82 * o, -0.55 * o);
      c.quadraticCurveTo(-0.68 * o, -tip * 0.78 * o, 0, -tip * o);
      c.quadraticCurveTo(0.68 * o, -tip * 0.78 * o, 0.82 * o, -0.55 * o); c.closePath(); c.fill(); c.stroke();
      if (king) circ(c, 0, -tip * o - 0.08 * o, 0.1 * o, "#ff5a4a", "#7a1010", 1);
      // body
      const g = c.createRadialGradient(-0.3 * o, -0.35 * o, 0.1 * o, 0, 0, 1.1 * o);
      g.addColorStop(0, "#5fdc8a"); g.addColorStop(0.6, ACR_GREEN); g.addColorStop(1, ACR_DARK);
      circ(c, 0, 0, o, g, "#062a12", 2);
      // gold belt + rivets
      c.save(); c.beginPath(); c.arc(0, 0, o, 0, TAU); c.clip();
      c.fillStyle = ACR_GOLD; c.fillRect(-o, 0.66 * o, 2 * o, 0.16 * o);
      c.restore();
      for (let i = 0; i < 8; i++) {
        const an = Math.PI * (1.12 + i * 0.11);
        circ(c, Math.cos(an) * 0.84 * o, Math.sin(an) * 0.84 * o, 0.04 * o, "rgba(255,255,255,.5)");
      }
      // porthole with the face inside
      const pr = small ? 0.58 * o : 0.62 * o;
      circ(c, 0, 0.0, pr + 0.08 * o, "#d7dde3", "#5a6570", 1.5);
      const gg = c.createRadialGradient(-0.2 * o, -0.2 * o, 0.05 * o, 0, 0, pr);
      gg.addColorStop(0, "#f2fbff"); gg.addColorStop(1, "#9fc8e6");
      circ(c, 0, 0, pr, gg);
      rivalEyes(c, o, st, 0.24 * o, -0.08 * o, 0.15 * o, ACR_DARK, true);
      if (hit) ell(c, 0, 0.3 * o, 0.12 * o, 0.14 * o, 0, "#4a0f0f");
      else {
        c.strokeStyle = ACR_DARK; c.lineWidth = 2; c.beginPath();
        c.moveTo(-0.2 * o, 0.26 * o); c.quadraticCurveTo(0.02 * o, 0.42 * o, 0.22 * o, 0.24 * o); c.stroke();
      }
      ell(c, -0.28 * o, -0.32 * o, 0.12 * o, 0.06 * o, -0.6, "rgba(255,255,255,.75)");
      if (king) {
        c.fillStyle = ACR_DARK; c.font = `900 ${Math.round(0.2 * o)}px "Trebuchet MS",sans-serif`;
        c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("REYNOLDS", 0, 0.75 * o);
      }
      if (hurt) hurtMarks(c, o);
    };
  }
  // idling exhaust under rockets
  const exhaust = (c, o, t, ent, { hit }) => {
    if (hit) return;
    const f = 0.55 + 0.25 * Math.sin(t * 31 + (ent.blink || 0) * 7) + 0.1 * Math.sin(t * 53);
    c.globalCompositeOperation = "lighter";
    c.fillStyle = "rgba(255,150,40,.75)"; c.beginPath();
    c.moveTo(-0.22 * o, 0.92 * o); c.quadraticCurveTo(0, 0.92 * o + 0.9 * o * f, 0.22 * o, 0.92 * o); c.fill();
    c.fillStyle = "rgba(255,240,150,.85)"; c.beginPath();
    c.moveTo(-0.1 * o, 0.94 * o); c.quadraticCurveTo(0, 0.94 * o + 0.5 * o * f, 0.1 * o, 0.94 * o); c.fill();
    c.globalCompositeOperation = "source-over";
  };

  /* ---------- section abilities ---------- */
  const noteBurst = (S, x, y, n, col, spread) => {
    for (let i = 0; i < n; i++)
      S.P({ x: x + rnd(-spread, spread), y: y + rnd(-spread, spread), vx: rnd(-90, 160), vy: rnd(-180, -40),
        life: rnd(0.6, 1.1), max: 1, size: rnd(16, 26), color: col || "#ffe08a", type: "text",
        text: Math.random() < 0.5 ? "♪" : "♫", g: 120 });
  };

  // Brass: FORTISSIMO — a cone of sound that shoves everything ahead
  function fortissimo(b, p, v, S) {
    S.sfx("blast");
    const ang = Math.atan2(v.y, v.x), R = 320, cx = Math.cos(ang), cy = Math.sin(ang);
    for (let k = 1; k <= 3; k++) S.ring(p.x + cx * 40 * k, p.y + cy * 40 * k, 50 + 45 * k, "#ffe08a", 0.25 + 0.1 * k);
    noteBurst(S, p.x + cx * 40, p.y + cy * 40, 10, "#ffe08a", 20);
    S.shake(8);
    for (const e of S.ents) {
      if (e === b || e.dead || e.kind === "bird") continue;
      const q = e.body.position, dx = q.x - p.x, dy = q.y - p.y, d = Math.hypot(dx, dy);
      if (d > R || d < 1) continue;
      const dot = (dx * cx + dy * cy) / d;
      if (dot < 0.35) continue;
      const f = (1 - d / R) * dot, m = 3 / Math.sqrt(e.body.mass + 1);
      S.Body.setVelocity(e.body, {
        x: e.body.velocity.x + (dx / d) * 15 * f * m,
        y: e.body.velocity.y + (dy / d) * 15 * f * m - 2.5 * f * m,
      });
      e.pend = (e.pend || 0) + (e.kind === "pig" ? 45 : 70) * f;
    }
    S.Body.setVelocity(b.body, { x: v.x * 0.4, y: v.y * 0.4 });
  }

  // Color guard: TOSS & DROP — stop, spin, and plunge straight down
  function guardDrop(b, p, v, S) {
    S.sfx("swish");
    S.ring(p.x, p.y, 60, "#ffffff", 0.35);
    S.Body.setVelocity(b.body, { x: v.x * 0.12, y: Math.max(22, Math.abs(v.y) + 10) });
    S.Body.setAngularVelocity && S.Body.setAngularVelocity(b.body, 0.4);
    for (let i = 0; i < 10; i++)
      S.P({ x: p.x, y: p.y, vx: rnd(-160, 160), vy: rnd(-160, 40), life: 0.5, max: 0.5, size: rnd(3, 6),
        color: i % 2 ? RED : "#ffffff", type: "spark", g: 200 });
  }

  // Drum major special: THE BIG FINISH — the whole band hits, tall pieces topple
  function bigFinish(b, p, v, S) {
    S.sfx("finale"); S.flash(0.7); S.shake(28);
    [700, 820, 940, 1060, 1180].forEach((x, i) => S.ring(x, 560 - (i % 2) * 90, 150, i % 2 ? RED : "#fff3c0", 0.6 + 0.06 * i));
    for (let i = 0; i < 26; i++)
      S.P({ x: rnd(600, 1240), y: rnd(380, 620), vx: rnd(-40, 40), vy: rnd(-220, -80), life: rnd(0.8, 1.4), max: 1.2,
        size: rnd(18, 30), color: i % 3 ? "#fff3c0" : "#ff7a6a", type: "text", text: i % 2 ? "♪" : "♫", g: 40 });
    for (const e of S.ents.slice()) {
      if (e.kind === "bird" || e.dead) continue;
      if (e.kind === "block" && e.h > 1.2 * e.w) e.pend += 3 * e.maxhp;
      else if (e.kind === "pig") { S.Body.setVelocity(e.body, { x: rnd(-1, 1), y: -1 }); e.pend += 6; }
      else {
        S.Body.setVelocity(e.body, { x: e.body.velocity.x + rnd(-2, 2), y: e.body.velocity.y - rnd(2, 4) });
        S.Body.setAngularVelocity(e.body, rnd(-0.06, 0.06));
      }
    }
  }

  /* ---------- background helpers ---------- */
  function turf(c, W, H, G, dark) {
    for (let i = 0; 80 * i < W; i++) { c.fillStyle = i % 2 ? (dark ? "#23602c" : "#2e7a38") : (dark ? "#286c32" : "#33863e"); c.fillRect(80 * i, G, 80, H - G); }
    const g = c.createLinearGradient(0, G, 0, H); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,15,0,.5)");
    c.fillStyle = g; c.fillRect(0, G, W, H - G);
    c.fillStyle = "rgba(255,255,255,.85)"; c.fillRect(0, G, W, 4);
    c.fillStyle = "rgba(255,255,255,.28)"; for (let i = 0; i <= 8; i++) c.fillRect(160 * i - 1, G + 4, 2, H - G);
  }
  function stands(c, rnd2, W, top, bot, rows, base, crowd, x0 = 0) {
    const g = c.createLinearGradient(0, top, 0, bot); g.addColorStop(0, base[0]); g.addColorStop(1, base[1]);
    c.fillStyle = g; c.fillRect(x0, top, W - x0, bot - top);
    const rh = (bot - top) / rows;
    for (let r = 0; r < rows; r++) {
      c.fillStyle = "rgba(255,255,255,.05)"; c.fillRect(x0, top + r * rh, W - x0, 2);
      for (let x = x0 + 10 + (r % 2) * 12; x < W; x += 24) {
        if (rnd2() < 0.3) continue;
        c.fillStyle = crowd[(rnd2() * crowd.length) | 0];
        c.beginPath(); c.arc(x, top + r * rh + rh * 0.55, 4, 0, TAU); c.fill();
      }
    }
  }
  function lightTower(c, x, top, G, glow) {
    c.fillStyle = "#05070f"; c.fillRect(x - 5, top + 58, 10, G - top - 58); c.fillRect(x - 48, top, 96, 62);
    if (glow) {
      const g = c.createRadialGradient(x, top + 28, 10, x, top + 28, 280);
      g.addColorStop(0, `rgba(255,250,225,${glow})`); g.addColorStop(1, "rgba(255,250,225,0)");
      c.fillStyle = g; c.fillRect(x - 320, top - 270, 640, 600);
    }
    c.fillStyle = "#fffbe8"; c.shadowColor = "#fff"; c.shadowBlur = glow ? 14 : 0;
    for (let r = 0; r < 2; r++) for (let k = 0; k < 4; k++) { c.beginPath(); c.arc(x - 33 + 22 * k, top + 16 + 28 * r, 8, 0, TAU); c.fill(); }
    c.shadowBlur = 0;
  }
  function ridge(c, W, G, base, amp, freq, phase, col) {
    c.fillStyle = col; c.beginPath(); c.moveTo(0, G);
    for (let x = 0; x <= W; x += 10) c.lineTo(x, base - amp * (0.6 * Math.sin(x * freq + phase) + 0.4 * Math.sin(x * freq * 2.7 + phase * 1.7)));
    c.lineTo(W, G); c.closePath(); c.fill();
  }
  function pennants(c, x0, x1, y, sag, cols) {
    c.strokeStyle = "rgba(20,20,20,.6)"; c.lineWidth = 1.2; c.beginPath();
    const N = Math.floor((x1 - x0) / 26), py = (u) => y + sag * 4 * u * (1 - u);
    for (let i = 0; i <= N; i++) { const u = i / N; i ? c.lineTo(x0 + u * (x1 - x0), py(u)) : c.moveTo(x0, py(0)); }
    c.stroke();
    for (let i = 0; i < N; i++) {
      const u = (i + 0.5) / N, x = x0 + u * (x1 - x0), yy = py(u);
      c.fillStyle = cols[i % cols.length]; c.beginPath(); c.moveTo(x - 9, yy); c.lineTo(x + 9, yy); c.lineTo(x, yy + 18); c.closePath(); c.fill();
    }
  }
  function txt(c, s, x, y, size, col, align, weight, glow) {
    c.font = `${weight || 900} ${size}px "Trebuchet MS",sans-serif`; c.textAlign = align || "center"; c.textBaseline = "middle";
    if (glow) { c.shadowColor = glow; c.shadowBlur = 10; }
    c.fillStyle = col; c.fillText(s, x, y); c.shadowBlur = 0;
  }
  function trophy(c, x, base, h, col) {
    c.fillStyle = "#3a2a14"; c.fillRect(x - h * 0.22, base - h * 0.18, h * 0.44, h * 0.18);
    c.fillStyle = col; c.fillRect(x - h * 0.05, base - h * 0.5, h * 0.1, h * 0.32);
    c.beginPath(); c.moveTo(x - h * 0.24, base - h); c.lineTo(x + h * 0.24, base - h);
    c.quadraticCurveTo(x + h * 0.22, base - h * 0.5, x, base - h * 0.5); c.quadraticCurveTo(x - h * 0.22, base - h * 0.5, x - h * 0.24, base - h); c.fill();
    c.strokeStyle = col; c.lineWidth = 2;
    for (const d of [-1, 1]) { c.beginPath(); c.arc(x + d * h * 0.26, base - h * 0.82, h * 0.1, 0, TAU); c.stroke(); }
    c.fillStyle = "rgba(255,255,255,.4)"; c.fillRect(x - h * 0.15, base - h * 0.95, h * 0.05, h * 0.3);
  }
  // Tiered trophy: marble plinth, `tiers` stacked columns + platforms narrowing upward, cup on top
  function tieredTrophy(c, x, base, h, tiers, col, colDark) {
    const plH = h * 0.12, plW = h * 0.5;
    c.fillStyle = "#2a2018"; c.fillRect(x - plW / 2, base - plH, plW, plH);
    c.fillStyle = "rgba(255,255,255,.12)"; c.fillRect(x - plW / 2, base - plH, plW, 2);
    let y = base - plH, w = plW * 0.86;
    const tierH = (h * 0.62) / tiers;
    for (let i = 0; i < tiers; i++) {
      // columns
      const cw = Math.max(2, w * 0.09);
      for (const d of tiers > 1 ? [-1, 1] : [0]) {
        c.fillStyle = col; c.fillRect(x + d * w * 0.34 - cw / 2, y - tierH * 0.8, cw, tierH * 0.8);
        c.fillStyle = "rgba(255,255,255,.35)"; c.fillRect(x + d * w * 0.34 - cw / 2, y - tierH * 0.8, Math.max(1, cw * 0.35), tierH * 0.8);
      }
      if (tiers > 1) { c.fillStyle = colDark; c.fillRect(x - cw / 2, y - tierH * 0.8, cw, tierH * 0.8); }
      // platform
      y -= tierH * 0.8;
      c.fillStyle = colDark; c.fillRect(x - w / 2, y - tierH * 0.2, w, tierH * 0.2);
      c.fillStyle = col; c.fillRect(x - w / 2, y - tierH * 0.2, w, Math.max(1.5, tierH * 0.08));
      y -= tierH * 0.2; w *= 0.78;
    }
    // cup
    const ch = h * 0.26, cw2 = Math.max(w * 0.9, h * 0.2);
    c.fillStyle = col; c.fillRect(x - ch * 0.08, y - ch * 0.35, ch * 0.16, ch * 0.35);
    c.beginPath(); c.moveTo(x - cw2 / 2, y - ch * 1.35); c.lineTo(x + cw2 / 2, y - ch * 1.35);
    c.quadraticCurveTo(x + cw2 * 0.46, y - ch * 0.35, x, y - ch * 0.35); c.quadraticCurveTo(x - cw2 * 0.46, y - ch * 0.35, x - cw2 / 2, y - ch * 1.35); c.fill();
    c.strokeStyle = col; c.lineWidth = Math.max(1.5, h * 0.025);
    for (const d of [-1, 1]) { c.beginPath(); c.arc(x + d * cw2 * 0.55, y - ch, ch * 0.22, 0, TAU); c.stroke(); }
    c.fillStyle = "rgba(255,255,255,.45)"; c.fillRect(x - cw2 * 0.3, y - ch * 1.28, Math.max(1.5, cw2 * 0.1), ch * 0.6);
    if (tiers > 2) { // star topper on the grand trophy
      c.fillStyle = col; c.beginPath();
      for (let i = 0; i < 10; i++) { const an = -Math.PI / 2 + (i * Math.PI) / 5, rr2 = i % 2 ? ch * 0.16 : ch * 0.38;
        c.lineTo(x + Math.cos(an) * rr2, y - ch * 1.7 + Math.sin(an) * rr2); }
      c.closePath(); c.fill();
    }
  }

  // A band block in silhouette (rows of little marchers with plumes)
  function bandBlock(c, x0, y0, cols, rows, col, plume) {
    for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
      const x = x0 + k * 16 + (r % 2) * 8, y = y0 + r * 7;
      c.fillStyle = col; c.fillRect(x - 3, y - 14, 6, 14); c.beginPath(); c.arc(x, y - 17, 3.5, 0, TAU); c.fill();
      c.fillRect(x - 2.5, y - 26, 5, 8); c.fillStyle = plume; c.fillRect(x - 1, y - 31, 2, 5);
    }
  }

  /* ---------- level 6: the bus ride home ---------- */
  let SN = null; // engine helpers, captured from sounds()
  const BUS = 5; // level index
  const KT = { stage: 0, groups: [], won: false };
  const TX = 460; // logo center x
  // where each reveal band appears (for the burst)
  const STAGE_AT = [1, 2, 3, 4].map((k) => [TX, 118 + 253 - (k - 0.5) * 63]);

  // Pisgah's athletic "P": italic block letter, red fill, black outline, white outer outline.
  // x,y = center, size = letter height
  function pisgahP(c, x, y, size, outline = true) {
    const P = new Path2D();
    // outer shape (unit box: 1.22 wide, 1 tall, drawn upright then slanted)
    P.moveTo(-0.08, 0); P.lineTo(0.98, 0);
    P.quadraticCurveTo(1.22, 0, 1.22, 0.2); P.lineTo(1.22, 0.42);
    P.quadraticCurveTo(1.22, 0.62, 0.98, 0.62); P.lineTo(0.48, 0.62);
    P.lineTo(0.48, 1); P.lineTo(0, 1); P.lineTo(0, 0.17); P.lineTo(-0.08, 0.17); P.closePath();
    // counter (the slot in the bowl)
    P.moveTo(0.48, 0.17); P.lineTo(0.84, 0.17); P.quadraticCurveTo(0.9, 0.17, 0.9, 0.23);
    P.lineTo(0.9, 0.39); P.quadraticCurveTo(0.9, 0.45, 0.84, 0.45); P.lineTo(0.48, 0.45); P.closePath();
    c.save();
    c.translate(x, y); c.scale(size, size);
    c.transform(1, 0, -0.32, 1, 0, 0); // italic slant
    c.translate(-0.5, -0.5);
    c.lineJoin = "miter"; c.miterLimit = 3;
    if (outline) {
      c.strokeStyle = "#ffffff"; c.lineWidth = 0.22; c.stroke(P);
      c.strokeStyle = "#111111"; c.lineWidth = 0.12; c.stroke(P);
    } else { c.strokeStyle = "#111111"; c.lineWidth = 0.08; c.stroke(P); }
    c.fillStyle = "#ee1c25"; c.fill(P, "evenodd");
    c.restore();
  }

  // Level 6 celebration: the Pisgah P (logo image embedded below), revealed bottom-up in four bands
  const LOGO = new Image();
  let logoReady = false;
  LOGO.onload = () => { logoReady = true; if (SN && SN.level === BUS) try { window.dispatchEvent(new Event("resize")); } catch (err) {} };
  const LW = 460, LH = Math.round((LW * 282) / 512), LX = TX - LW / 2, LY = 118;
  const drawLogo = (c) => (logoReady ? c.drawImage(LOGO, LX, LY, LW, LH) : pisgahP(c, TX, LY + LH / 2, LH * 0.92));
  function bigLogo(c, stage, won) {
    const cx = TX, cy = LY + LH / 2;
    if (won) {
      c.save(); c.globalAlpha = 0.22;
      for (let i = 0; i < 18; i++) {
        const an = (i / 18) * TAU; c.fillStyle = i % 2 ? "#fff3c0" : "#ff7a6a";
        c.beginPath(); c.moveTo(cx, cy); c.arc(cx, cy, 440, an, an + TAU / 36); c.closePath(); c.fill();
      }
      c.restore();
    }
    // ghost of the whole P so players can see what they're building
    c.save(); c.globalAlpha = stage >= 4 ? 1 : 0.16; drawLogo(c); c.restore();
    if (stage > 0 && stage < 4) {
      const top = LY + LH - (LH * stage) / 4;
      c.save(); c.beginPath(); c.rect(LX - 20, top, LW + 40, LH - (top - LY) + 20); c.clip(); drawLogo(c); c.restore();
      c.fillStyle = "rgba(255,226,140,.8)"; c.fillRect(LX + 10, top - 1.5, LW - 20, 3);
    }
    if (stage >= 4) {
      const bx = TX - 235, by = LY + LH + 22, bw = 470, bh = 78;
      c.fillStyle = "rgba(0,0,0,.35)"; rr(c, bx + 4, by + 5, bw, bh, 12); c.fill();
      const g = c.createLinearGradient(0, by, 0, by + bh); g.addColorStop(0, "#b01a1a"); g.addColorStop(1, "#6e0c0c");
      c.fillStyle = g; rr(c, bx, by, bw, bh, 12); c.fill();
      c.strokeStyle = "#ffd25a"; c.lineWidth = 3; rr(c, bx, by, bw, bh, 12); c.stroke();
      c.textAlign = "center"; c.textBaseline = "middle";
      c.fillStyle = "#ffffff"; c.font = 'italic 900 30px Georgia,"Times New Roman",serif'; c.fillText("Awesome season", TX, by + 27);
      c.fillStyle = "#ffd25a"; c.font = 'italic 700 20px Georgia,"Times New Roman",serif'; c.fillText("and way to end with fan favorite!", TX, by + 57);
    }
  }

  function trophyReveal(S, stage) {
    try { window.dispatchEvent(new Event("resize")); } catch (err) {} // re-renders the cached background
    const [x, y] = STAGE_AT[Math.min(stage, 4) - 1];
    S.sfx("chime"); S.ring(x, y, 140, "#fff3c0", 0.6); S.stars(x, y, 14); S.shake(4);
    for (let i = 0; i < 24; i++)
      S.P({ x: x + rnd(-110, 110), y: y + rnd(-40, 40), vx: rnd(-80, 80), vy: rnd(-200, -60), life: rnd(0.6, 1.2), max: 1,
        size: rnd(3, 6), color: i % 3 ? "#ffd25a" : "#ffffff", type: "spark", g: 260 });
    S.popup(x, y - 60, "♥", "#ffd0d6");
  }

  // the Blues: little rain clouds riding along — knock them out to cheer up the bus
  function blues(big) {
    return (c, o, { hit, hurt, blink, look }) => {
      const puff = big ? "#7d8fb8" : "#8a9cc4", dark = "#4a5a84";
      for (const [x, y, r] of [[-0.62, 0.15, 0.55], [0.62, 0.18, 0.52], [-0.3, -0.42, 0.55], [0.32, -0.48, 0.5], [0, 0.32, 0.6]])
        circ(c, x * o, y * o, r * o, puff, dark, 1.5);
      circ(c, 0, 0, 0.78 * o, puff);
      c.fillStyle = "rgba(255,255,255,.25)"; c.beginPath(); c.arc(-0.3 * o, -0.55 * o, 0.28 * o, 0, TAU); c.fill();
      rivalEyes(c, o, { hit, blink, look }, 0.28 * o, -0.05 * o, 0.16 * o, null, false);
      if (!hit) { // sad brows + frown
        line(c, [[-0.46 * o, -0.32 * o], [-0.16 * o, -0.42 * o]], dark, 2.2);
        line(c, [[0.46 * o, -0.32 * o], [0.16 * o, -0.42 * o]], dark, 2.2);
        c.strokeStyle = dark; c.lineWidth = 2; c.beginPath(); c.moveTo(-0.18 * o, 0.42 * o); c.quadraticCurveTo(0, 0.28 * o, 0.18 * o, 0.42 * o); c.stroke();
        ell(c, 0.42 * o, 0.18 * o, 0.06 * o, 0.1 * o, 0, "#bfe4ff");
      } else ell(c, 0, 0.38 * o, 0.12 * o, 0.14 * o, 0, "#2a3250");
      if (hurt) hurtMarks(c, o);
    };
  }
  const drizzle = (c, o, t, ent, { hit }) => {
    if (hit) return;
    c.fillStyle = "rgba(160,210,255,.85)";
    for (let i = 0; i < 3; i++) {
      const k = (t * 1.6 + i / 3 + (ent.blink || 0)) % 1, x = (i - 1) * 0.45 * o;
      ell(c, x, 0.9 * o + k * 0.8 * o, 0.05 * o, 0.11 * o, 0, `rgba(160,210,255,${0.9 * (1 - k)})`);
    }
  };

  LOGO.src = "data:image/png;base64,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";

  /* ---------- the theme ---------- */
  Slingshot.start({
    id: "knight-tournament",
    storageKey: "kt_progress",
    title: "Pisgah Band · Knight Tournament",
    titleHTML: "<em>PISGAH BAND</em><span>AT THE</span><b>KNIGHT TOURNAMENT</b>",
    text: {
      subtitle: "Drag a bear back to aim · release to launch · tap mid-air for that section’s move",
      hint: "Mouse / touch · R restart · M mute · S shuffle",
      win: "SECTION CLEARED!",
      finalWin: "PROUD OF YOU, PISGAH!",
      lose: "BACK TO REHEARSAL…",
      noBonus: "No bandies to spare!",
      firstHint: "◀ Drag the bear back, then release!",
      outOfAmmo: "Out of bandies! Call the Drum Major ↗",
      bonus: (n, pts) => `Bonus: ${n} bandie${n > 1 ? "s" : ""} left × 10,000 = ${pts}`,
      goal: (n) => (SN && SN.level === BUS ? `Chase away ${n} case${n > 1 ? "s" : ""} of the blues!` : `Outplay ${n} rival${n > 1 ? "s" : ""}!`),
      nameLabel: "Bandie name",
      scoreLabel: "SCORE",
    },
    names: {
      first: ["Big Red", "Forte", "Downbeat", "Tempo", "Staccato", "High-Step", "Crescendo", "Snappy", "Brassy",
        "Canton", "Rimshot", "Mellow", "Fermata", "Allegro", "Mountain"],
      last: ["Bear", "Cub", "Tuba", "Snare", "Flag", "Mallet", "Piccolo", "Trombone", "Quad", "Clarinet",
        "Bari", "Bruin", "Marcher"],
    },
    nameFilter: { block: [], allow: [] },
    css: `:root{--page-bg:#07090f;--title1:linear-gradient(180deg,#fff 0%,#ff5a4a 50%,#c4161c);--title2:linear-gradient(180deg,#ffffff 0%,#dfe5ec 45%,#8a96a6);
      --btn:linear-gradient(180deg,#ff5a4a,#c4161c);--btn-edge:#6a0a0e;--alt-text:#ffd25a;
      --panel-bg:radial-gradient(ellipse at center,rgba(20,10,12,.7),rgba(6,4,8,.94));
      --special:linear-gradient(180deg,#f4d36a,#c9961e);--special-edge:#6a4a05;--special-glow:#fff3c0;
      --shuffle:linear-gradient(180deg,#4a4a52,#222228);--shuffle-edge:#0a0a0e}
    h1 b{font-size:.78em;letter-spacing:.06em}
    h1::after{content:'17TH ANNUAL KNIGHT TOURNAMENT · NORTH HENDERSON · 10.24.26 · 5A';display:block;font-size:calc(14*var(--u));font-weight:700;letter-spacing:.28em;color:#e9e4d8;margin-top:calc(14*var(--u))}
    .special{color:#2a1a02}
    .stadium .pill{background:#070707;border:2px solid #555;color:#ffb62e;font-family:"Courier New",monospace;text-shadow:0 0 8px #ff9a00;border-radius:calc(6*var(--u));backdrop-filter:none}
    .stadium .ib{background:#111;border-color:#555;color:#ffb62e}`,
    telemetry: {
      endpoint: "https://script.google.com/macros/s/AKfycbz3hC8h7GBVOdxbrVbQqtGk5qSY6XHyEmRoqYtrmfn3VXKYvr4rxbqqStQZpNvQEC8/exec",
    },
    materials: {
      // TNT becomes a pit amp: knock it and it blows
      tnt: {
        draw: (c, b) => {
          const w = b.w, h = b.h, x = -w / 2, y = -h / 2;
          c.fillStyle = "#1c1c1c"; rr(c, x, y, w, h, 3); c.fill();
          c.strokeStyle = RED; c.lineWidth = 2.5; rr(c, x, y, w, h, 3); c.stroke();
          circ(c, 0, 2, w * 0.3, "#3a3a3a", "#777", 1.5);
          circ(c, 0, 2, w * 0.12, "#111");
          c.fillStyle = "#ffd25a"; c.font = '900 7px "Trebuchet MS",sans-serif'; c.textAlign = "center"; c.textBaseline = "middle";
          c.fillText("AMP", 0, y + 5);
          c.strokeStyle = "#3a2a1a"; c.lineWidth = 2; c.beginPath(); c.moveTo(w / 2 - 4, y); c.quadraticCurveTo(w / 2 + 2, y - 8, w / 2 - 2, y - 11); c.stroke();
        },
        live: (c, b) => { circ(c, b.w / 2 - 2, -b.h / 2 - 12, 2 + 1.5 * Math.random(), "#ffd25a"); },
      },
    },
    projectiles: {
      brass: {
        r: 19, color: "#2a2a2a", name: "Brass",
        tip: "tap for FORTISSIMO — a blast of sound that shoves everything ahead",
        ability: fortissimo, hitMul: 1.15,
        sprite: { pad: 2.5, body: brassBody },
      },
      woodwind: {
        r: 16, color: "#262626", name: "Woodwinds",
        tip: "tap to TRILL — a quick burst of speed",
        ability: "dash",
        sprite: {
          pad: 2.4,
          behind: (c, a, t, mood) => {
            if (mood !== "fly") return;
            c.strokeStyle = "rgba(255,255,255,.75)"; c.lineWidth = 0.12 * a; c.lineCap = "round";
            for (const k of [0, 1]) {
              const w = Math.sin(t * 18 + k * 2) * a * 0.2;
              c.beginPath(); c.moveTo(-0.9 * a, -0.2 * a + k * 0.5 * a);
              c.quadraticCurveTo(-1.5 * a, -0.2 * a + w + k * 0.5 * a, -2.1 * a, 0.1 * a + k * 0.4 * a + w); c.stroke();
            }
            c.lineCap = "butt";
          },
          body: woodwindBody,
        },
      },
      drumline: {
        r: 17, color: "#2d2d2d", name: "Drumline",
        tip: "tap to SPLIT into a three-piece battery",
        ability: "split", splitR: 12, splitColor: RED,
        sprite: { pad: 2.3, body: drumlineBody },
      },
      front: {
        r: 20, color: "#303030", name: "Front Ensemble",
        tip: "tap for a TIMPANI BOOM",
        ability: "explode",
        sprite: {
          pad: 2.2,
          front: (c, a, t, { flash }) => {
            const k = (Math.sin(t * 30) + 1) / 2;
            circ(c, 0.95 * a, -1.45 * a, 0.08 * a + (flash ? 4 : 1.5 * k), flash ? "#fff" : `rgba(255,${(180 + 70 * k) | 0},120,.9)`);
          },
          body: frontBody,
        },
      },
      guard: {
        r: 17, color: "#2a2a2a", name: "Color Guard",
        tip: "tap to TOSS & DROP straight down",
        ability: guardDrop, hitMul: 1.25,
        sprite: { pad: 2.0, behind: (c, a, t, mood) => guardFlag(c, a, t, mood), body: guardBody },
      },
      major: {
        r: 22, color: "#2a2a2a", name: "Drum Major",
        tip: "tap for THE BIG FINISH — the whole band hits and tall pieces topple",
        ability: bigFinish,
        sprite: { scale: 0.85, pad: 2.9, queueLift: 1.3, body: majorBody },
      },
    },
    targets: {
      trojanCadet: { r: 14, hp: 26, score: 5000, debris: [CHASE_BLUE, CHASE_GOLD, "#fff"], sprite: { pad: 2.2, body: trojan("cadet") } },
      trojan: { r: 18, hp: 42, score: 5000, debris: [CHASE_BLUE, CHASE_GOLD, "#fff"], sprite: { pad: 2.2, body: trojan("normal") } },
      trojanShield: { r: 18, hp: 46, score: 5000, armor: true, debris: [CHASE_BLUE, CHASE_GOLD, "#fff"], sprite: { pad: 2.2, body: trojan("normal") } },
      trojanKing: { r: 27, hp: 120, score: 10000, dmgMul: 1.1, debris: [CHASE_BLUE, CHASE_GOLD, RED], sprite: { pad: 2.5, body: trojan("king") } },
      rocketSmall: { r: 14, hp: 26, score: 5000, debris: [ACR_GREEN, ACR_GOLD, "#fff"], sprite: { pad: 2.2, body: rocket("small"), front: exhaust } },
      rocket: { r: 18, hp: 42, score: 5000, debris: [ACR_GREEN, ACR_GOLD, "#fff"], sprite: { pad: 2.3, body: rocket("normal"), front: exhaust } },
      blues: { r: 16, hp: 34, score: 5000, debris: ["#8a9cc4", "#bfe4ff", "#fff"], sprite: { pad: 2.2, body: blues(false), front: drizzle } },
      bigBlues: { r: 24, hp: 80, score: 10000, debris: ["#7d8fb8", "#bfe4ff", "#fff"], sprite: { pad: 2.2, body: blues(true), front: drizzle } },
      rocketKing: { r: 27, hp: 120, score: 10000, dmgMul: 1.1, debris: [ACR_GREEN, ACR_GOLD, "#fff"], sprite: { pad: 2.4, body: rocket("king"), front: exhaust } },
    },
    special: { type: "major", label: "DRUM MAJOR", icon: "🎼", uses: 1, perLevel: true, fromLevel: 1, dust: "rgba(255,236,170," },
    shuffle: { label: "SHUFFLE SECTIONS", icon: "🔀" },
    sling: { wood: "#7a1a14", woodFront: "#a3271d" },
    sounds: (S) => { SN = S; const { tone, noise } = S; return {
      blast() {
        [233, 294, 349, 466].forEach((f, i) => { tone(f, 0.55, "sawtooth", 0.07, 0, 0.01 * i); tone(f * 2, 0.4, "square", 0.025, 0, 0.01 * i); });
        noise(0.15, 0.12, 1800, "bandpass");
      },
      swish() { noise(0.25, 0.2, 2500, "bandpass"); tone(900, 0.25, "sine", 0.05, -500); },
      finale() {
        noise(0.9, 0.5, 220, "lowpass");
        for (let i = 0; i < 10; i++) noise(0.04, 0.12, 3800, "highpass", 0.03 * i);
        [[262, 0.35], [330, 0.35], [392, 0.35], [523, 0.35]].forEach(([f]) => {
          tone(f, 1.3, "sawtooth", 0.06, 0, 0.32); tone(f * 2, 1.0, "square", 0.02, 0, 0.32);
        });
        tone(65, 0.9, "sine", 0.3, -20, 0.32); noise(0.5, 0.35, 300, "lowpass", 0.32);
      },
      chime() { [784, 988, 1175, 1568].forEach((f, i) => { tone(f, 0.9, "sine", 0.09, 0, 0.08 * i); tone(2 * f, 0.5, "sine", 0.025, 0, 0.08 * i); }); },
    }; },
    onStep(dt, S) {
      if (S.level !== BUS) return;
      for (const g of KT.groups) {
        if (g.done || !g.items.length) continue;
        let wrecked = 0;
        for (const it of g.items) {
          const b = it.e.body;
          if (it.e.dead || Math.hypot(b.position.x - it.x, b.position.y - it.y) > 45 || Math.abs(b.angle - it.a) > 0.5) wrecked++;
        }
        if (wrecked >= Math.ceil(g.items.length * 0.6)) { g.done = true; KT.stage = Math.min(4, KT.stage + 1); trophyReveal(S, KT.stage); }
      }
      if (S.state === "won" && !KT.won) { KT.won = true; KT.stage = 4; trophyReveal(S, 4); }
    },
    onTargetDown(t, S) {
      if (S.level !== BUS) return;
      const p = t.body.position;
      for (let i = 0; i < 6; i++)
        S.P({ x: p.x, y: p.y, vx: rnd(-120, 120), vy: rnd(-220, -80), life: 1, max: 1, size: rnd(16, 24), color: i % 2 ? "#ff7a8a" : "#ffd25a", type: "text", text: i % 2 ? "♥" : "☀", g: 200 });
    },
    backgrounds: [
      // 0 · WARM-UP LOT — afternoon, Blue Ridge behind, band trailer, asphalt
      {
        sky: ["#4f9ad6", "#d3eaf7"], cel: "sun", cloud: "#ffffff",
        draw(c, r, { W, H, G }) {
          ridge(c, W, G, 420, 55, 0.004, 1.2, "#7f9cba");
          ridge(c, W, G, 470, 40, 0.006, 3.1, "#5c7a98");
          // dark tree line keeps the structures readable
          c.fillStyle = "#1f3a2c";
          for (let x = -20; x < W + 40; x += 34) { const h = 60 + 30 * r(); c.beginPath(); c.arc(x, 600 - h * 0.4, h * 0.45, 0, TAU); c.fill(); }
          c.fillRect(0, 585, W, 55);
          // band trailer
          c.fillStyle = "rgba(0,0,0,.25)"; c.fillRect(342, 616, 280, 14);
          c.fillStyle = "#f2f2f0"; rr(c, 330, 508, 290, 112, 6); c.fill();
          c.strokeStyle = "#9aa1a8"; c.lineWidth = 2; c.stroke();
          c.fillStyle = RED; c.fillRect(330, 585, 290, 12); c.fillStyle = "#141414"; c.fillRect(330, 597, 290, 5);
          txt(c, "PISGAH BEARS", 475, 534, 22, "#141414", "center", 900);
          txt(c, "MARCHING BAND", 475, 560, 15, RED, "center", 900);
          for (const x of [380, 570]) circ(c, x, 626, 13, "#141414", "#555", 3);
          // asphalt
          const g = c.createLinearGradient(0, G, 0, H); g.addColorStop(0, "#40444b"); g.addColorStop(1, "#24272c");
          c.fillStyle = g; c.fillRect(0, G, W, H - G);
          c.fillStyle = "#b8bcc2"; c.fillRect(0, G, W, 5);
          c.fillStyle = "rgba(255,214,90,.75)";
          for (let x = 40; x < W; x += 150) { c.save(); c.translate(x, G + 10); c.rotate(-0.5); c.fillRect(0, 0, 6, 80); c.restore(); }
        },
      },
      // 1 · THE GATE — sunset outside the stadium, pennants in every band's colors
      {
        sky: ["#f3895c", "#ffe2a8"], cel: "sun", clouds: false,
        draw(c, r, { W, H, G }) {
          ridge(c, W, G, 470, 45, 0.005, 0.4, "#b46a78");
          // grandstand back wall (dark so blocks pop)
          c.fillStyle = "#3a2c3c";
          c.beginPath(); c.moveTo(560, G);
          for (let i = 0; i <= 12; i++) { const x = 560 + i * 60; c.lineTo(x, 360 + i * -2); c.lineTo(x + 60, 360 + i * -2); }
          c.lineTo(W, G); c.closePath(); c.fill();
          c.fillStyle = "rgba(255,255,255,.05)"; for (let y = 380; y < G; y += 26) c.fillRect(560, y, W - 560, 2);
          for (let x = 600; x < W; x += 120) { c.fillStyle = "rgba(255,210,150,.12)"; c.fillRect(x, 400, 40, 180); }
          lightTower(c, 1210, 150, 360, 0);
          // ticket gate arch
          c.fillStyle = "#2a2230"; c.fillRect(380, 440, 22, 200); c.fillRect(540, 440, 22, 200);
          c.fillStyle = "#f4ead2"; rr(c, 360, 404, 222, 46, 6); c.fill(); c.strokeStyle = "#2a2230"; c.lineWidth = 3; c.stroke();
          txt(c, "KNIGHT TOURNAMENT", 471, 427, 17, "#7a1018", "center", 900);
          c.strokeStyle = "rgba(42,34,48,.8)"; c.lineWidth = 2;
          for (let x = 412; x < 540; x += 16) { c.beginPath(); c.moveTo(x, 460); c.lineTo(x, 640); c.stroke(); }
          pennants(c, 560, 1270, 352, 26, [RED, CHASE_BLUE, ACR_GREEN, GOLD, "#141414", "#fff"]);
          // plaza concrete
          const g = c.createLinearGradient(0, G, 0, H); g.addColorStop(0, "#8d8379"); g.addColorStop(1, "#5c544c");
          c.fillStyle = g; c.fillRect(0, G, W, H - G);
          c.fillStyle = "#c9bfb2"; c.fillRect(0, G, W, 4);
          c.fillStyle = "rgba(0,0,0,.15)"; for (let x = 0; x < W; x += 90) c.fillRect(x, G + 4, 2, H - G);
        },
      },
      // 2 · THE SIDELINE — dusk inside, visitor stands, pit carts on the track
      {
        sky: ["#262a64", "#f09a6a"], clouds: false,
        draw(c, r, { W, H, G }) {
          stands(c, r, W, 330, 560, 7, ["#232740", "#1a1d30"], ["rgba(255,255,255,.18)", "rgba(216,40,31,.22)", "rgba(29,79,184,.25)", "rgba(31,138,69,.25)"], 470);
          c.fillStyle = "#151827"; c.fillRect(470, 312, W - 470, 20);
          lightTower(c, 300, 120, 560, 0.18);
          lightTower(c, 1220, 110, 330, 0.12);
          // padded wall with banners
          c.fillStyle = "#12152a"; c.fillRect(0, 560, W, 40);
          [["GO KNIGHTS", 160], ["5A CLASS", 520], ["KNIGHT TOURNAMENT", 900]].forEach(([s, x]) => txt(c, s, x, 580, 15, "rgba(255,255,255,.45)", "center", 900));
          // running track
          c.fillStyle = "#7a3a30"; c.fillRect(0, 600, W, 40);
          c.fillStyle = "rgba(255,255,255,.35)"; c.fillRect(0, 612, W, 2); c.fillRect(0, 626, W, 2);
          // pit carts parked by the wall (left of the play area)
          for (const x of [360, 470]) {
            c.fillStyle = "#1a1a1a"; c.fillRect(x, 590, 90, 10);
            for (let i = 0; i < 9; i++) { c.fillStyle = i % 2 ? "#6a3018" : "#7a3a1c"; c.fillRect(x + 4 + i * 9, 578, 7, 12); }
            c.fillStyle = "#222"; c.fillRect(x + 8, 600, 4, 30); c.fillRect(x + 78, 600, 4, 30);
          }
          turf(c, W, H, G, false);
        },
      },
      // 3 · UNDER THE LIGHTS — night, press box, judges on the roof, scoreboard
      {
        sky: ["#050918", "#1b2c63"], stars: true, stadium: true, clouds: false,
        draw(c, r, { W, H, G }) {
          stands(c, r, W, 330, G - 46, 6, ["#141a36", "#0d1128"], ["rgba(216,40,31,.32)", "rgba(255,255,255,.2)", "rgba(216,40,31,.24)", "rgba(255,255,255,.12)"]);
          // press box
          c.fillStyle = "#0a0e20"; c.fillRect(300, 240, 700, 100); c.fillStyle = "#070a17"; c.fillRect(284, 230, 732, 14);
          c.fillStyle = "rgba(255,233,160,.55)"; for (let x = 312; x < 990; x += 34) c.fillRect(x, 322, 22, 8);
          c.fillStyle = "#050505"; c.fillRect(330, 254, 640, 56);
          c.strokeStyle = "rgba(255,255,255,.75)"; c.lineWidth = 3; c.strokeRect(330, 254, 640, 56);
          txt(c, "NORTH HENDERSON", 560, 277, 30, "#c9ced9", "center", 900, "#fff");
          txt(c, "KNIGHTS", 850, 277, 30, "#e8b830", "center", 900, "#ffcf40");
          txt(c, "17TH ANNUAL KNIGHT TOURNAMENT · HENDERSONVILLE, NC", 650, 301, 11, "#c9ced9", "center", 800);
          // judges on the roof
          for (const x of [420, 560, 740, 880]) { c.fillStyle = "#03050c"; c.fillRect(x - 6, 214, 12, 16); c.beginPath(); c.arc(x, 208, 6, 0, TAU); c.fill(); }
          // scoreboard (no football — band show info)
          c.fillStyle = "#4b5060"; c.fillRect(1040, 280, 8, 56); c.fillRect(1140, 280, 8, 56);
          c.fillStyle = "#050505"; c.fillRect(1010, 190, 170, 94); c.strokeStyle = "#444"; c.lineWidth = 3; c.strokeRect(1010, 190, 170, 94);
          c.font = '700 14px "Courier New",monospace'; c.textAlign = "left"; c.fillStyle = "#ffb62e"; c.shadowColor = "#ff9a00"; c.shadowBlur = 8;
          c.fillText("ON FIELD", 1022, 212); c.fillText("CLASS", 1022, 256);
          c.font = '900 22px "Courier New",monospace'; c.fillText("PISGAH", 1022, 234); c.textAlign = "right"; c.fillText("5A", 1168, 258);
          c.shadowBlur = 0;
          // sideline wall
          c.fillStyle = "#10142a"; c.fillRect(0, G - 44, W, 44); c.fillStyle = "#8c1c16"; c.fillRect(0, G - 44, W, 5);
          c.fillStyle = "rgba(255,255,255,.5)"; c.fillRect(0, G - 48, W, 3);
          for (let x = 160; x < W; x += 320) txt(c, "GO BAND!", x, G - 18, 16, "rgba(255,255,255,.22)", "center", 900);
          turf(c, W, H, G, true);
          // yard number on the turf
          txt(c, "5 0", 640, 690, 34, "rgba(255,255,255,.35)", "center", 900);
          for (const x of [64, 1226]) lightTower(c, x, 92, G, 0.32);
          // soft light behind the sling so black bears stay visible
          const sg = c.createRadialGradient(217, 470, 10, 217, 470, 230);
          sg.addColorStop(0, "rgba(255,250,225,.22)"); sg.addColorStop(1, "rgba(255,250,225,0)");
          c.fillStyle = sg; c.fillRect(0, 240, 460, 400);
        },
      },
      // 4 · RETREAT & AWARDS — finals, fireworks high above, bands in block, trophy table
      {
        sky: ["#040714", "#20194a"], stars: true, stadium: true, clouds: false,
        draw(c, r, { W, H, G }) {
          // fireworks (kept high, away from the play area)
          [[180, 120, RED], [520, 80, "#fff3c0"], [860, 110, ACR_GOLD], [1120, 70, "#9ad0ff"]].forEach(([x, y, col]) => {
            c.strokeStyle = col; c.globalAlpha = 0.75; c.lineWidth = 2;
            for (let i = 0; i < 16; i++) { const an = (i / 16) * TAU; c.beginPath(); c.moveTo(x + Math.cos(an) * 12, y + Math.sin(an) * 12); c.lineTo(x + Math.cos(an) * 46, y + Math.sin(an) * 46); c.stroke(); }
            c.globalAlpha = 1; circ(c, x, y, 4, "#fff");
          });
          stands(c, r, W, 300, G - 46, 7, ["#121530", "#0b0d22"], ["rgba(255,255,255,.16)", "rgba(216,40,31,.3)", "rgba(29,79,184,.25)", "rgba(31,138,69,.25)", "rgba(244,196,48,.2)"]);
          // big banner across the stands
          c.fillStyle = "#0a0a12"; c.fillRect(250, 232, 780, 60); c.strokeStyle = GOLD; c.lineWidth = 3; c.strokeRect(250, 232, 780, 60);
          txt(c, "17TH ANNUAL KNIGHT TOURNAMENT", 640, 254, 26, "#fff3c0", "center", 900, "#ffcf40");
          txt(c, "RETREAT & AWARDS · 5A", 640, 280, 13, "#c9ced9", "center", 800);
          // sideline wall
          c.fillStyle = "#10142a"; c.fillRect(0, G - 44, W, 44); c.fillStyle = GOLD; c.fillRect(0, G - 44, W, 4);
          turf(c, W, H, G, true);
          // bands lined up in block on the far side (dim, behind the action line)
          // trophy table between sling and rivals
          c.fillStyle = "#1a1410"; c.fillRect(392, 600, 272, 8); c.fillRect(402, 608, 6, 32); c.fillRect(648, 608, 6, 32);
          c.fillStyle = "#e9e4d8"; c.fillRect(392, 596, 272, 6);
          c.fillStyle = "#7a1018"; c.fillRect(392, 602, 272, 14); // table skirt
          const G1 = "#ffd25a", G2 = "#a8780a", S1 = "#dfe5ec", S2 = "#7a8696", B1 = "#d9904a", B2 = "#7a4a1a";
          trophy(c, 414, 596, 30, G1);                     // single-tier
          tieredTrophy(c, 450, 596, 66, 2, S1, S2);        // two-tier
          trophy(c, 488, 596, 34, B1);                     // single-tier
          tieredTrophy(c, 530, 596, 118, 4, G1, G2);       // grand champion, four tiers
          trophy(c, 572, 596, 32, S1);                     // single-tier
          tieredTrophy(c, 608, 596, 72, 3, G1, G2);        // three-tier
          trophy(c, 644, 596, 30, B1);                     // single-tier
          for (const x of [64, 1226]) lightTower(c, x, 92, G, 0.3);
          const sg = c.createRadialGradient(217, 470, 10, 217, 470, 230);
          sg.addColorStop(0, "rgba(255,250,225,.22)"); sg.addColorStop(1, "rgba(255,250,225,0)");
          c.fillStyle = sg; c.fillRect(0, 240, 460, 400);
        },
      },
      // 5 · THE BUS RIDE HOME — inside a packed band bus at night, giant trophy strapped in the aisle
      {
        sky: ["#0a1030", "#1a2450"], clouds: false, stadium: true,
        draw(c, r, { W, H, G }) {
          // interior wall
          c.fillStyle = "#3b3a36"; c.fillRect(0, 0, W, G);
          // ceiling with warm dome lights
          const cg = c.createLinearGradient(0, 0, 0, 96); cg.addColorStop(0, "#5a564c"); cg.addColorStop(1, "#47443c");
          c.fillStyle = cg; c.fillRect(0, 0, W, 96);
          c.fillStyle = "rgba(0,0,0,.18)"; for (let x = 0; x < W; x += 80) c.fillRect(x, 0, 2, 96);
          for (const x of [120, 440, 760, 1080]) {
            const lg = c.createRadialGradient(x, 40, 4, x, 40, 160); lg.addColorStop(0, "rgba(255,226,160,.35)"); lg.addColorStop(1, "rgba(255,226,160,0)");
            c.fillStyle = lg; c.fillRect(x - 170, 0, 340, 220);
            c.fillStyle = "#fff0c8"; rr(c, x - 28, 32, 56, 14, 6); c.fill();
          }
          // luggage rack with cases and a sousaphone bell
          c.fillStyle = "#24231f"; c.fillRect(0, 100, W, 10);
          for (let x = 30; x < W - 60; x += 110) { c.fillStyle = (x / 110) % 2 < 1 ? "#1a1a1a" : "#2a2424"; rr(c, x, 74, 86, 28, 5); c.fill(); c.fillStyle = "#9aa3ad"; c.fillRect(x + 38, 84, 10, 6); }
          // night windows rolling past
          for (let x = 20; x < W; x += 210) {
            const wg = c.createLinearGradient(0, 124, 0, 300); wg.addColorStop(0, "#0b1430"); wg.addColorStop(1, "#1c2a55");
            c.fillStyle = wg; rr(c, x, 124, 180, 172, 12); c.fill();
            c.save(); rr(c, x, 124, 180, 172, 12); c.clip();
            c.fillStyle = "#111a36"; c.beginPath(); c.moveTo(x, 270);
            for (let k = 0; k <= 180; k += 15) c.lineTo(x + k, 250 - 22 * Math.abs(Math.sin((x + k) * 0.012)));
            c.lineTo(x + 180, 300); c.lineTo(x, 300); c.fill();
            for (let k = 0; k < 6; k++) { c.fillStyle = "rgba(255,255,255,.7)"; c.fillRect(x + r() * 180, 130 + r() * 90, 1.5, 1.5); }
            c.strokeStyle = "rgba(255,190,90,.55)"; c.lineWidth = 3; c.lineCap = "round";
            for (let k = 0; k < 3; k++) { const y = 262 + k * 10, x0 = x + r() * 100; c.beginPath(); c.moveTo(x0, y); c.lineTo(x0 + 50 + r() * 40, y); c.stroke(); }
            c.lineCap = "butt"; c.restore();
            c.strokeStyle = "#1a1916"; c.lineWidth = 6; rr(c, x, 124, 180, 172, 12); c.stroke();
            c.fillStyle = "#1a1916"; c.fillRect(x, 206, 180, 5);
          }
          // seat backs, packed with bandies (dim silhouettes, kept clear of the slingshot)
          const head = (x, y, k) => {
            c.fillStyle = "#27304a"; c.beginPath(); c.arc(x, y, 15 * k, 0, TAU); c.fill();
            c.beginPath(); c.arc(x - 9 * k, y - 12 * k, 6 * k, 0, TAU); c.arc(x + 9 * k, y - 12 * k, 6 * k, 0, TAU); c.fill();
            if (r() < 0.5) { c.fillStyle = "#1c2236"; c.fillRect(x - 9 * k, y - 34 * k, 18 * k, 22 * k); c.fillStyle = "rgba(255,255,255,.4)"; c.fillRect(x - 2 * k, y - 44 * k, 4 * k, 10 * k); }
          };
          for (let x = 0; x < W; x += 150) {
            if (x > 90 && x < 300) continue;
            head(x + 40, 455, 1); head(x + 95, 460, 0.95);
          }
          for (let x = -20; x < W; x += 150) {
            if (x > 60 && x < 300) continue;
            const sg = c.createLinearGradient(0, 470, 0, 640); sg.addColorStop(0, "#2a5a4e"); sg.addColorStop(1, "#173a32");
            c.fillStyle = sg; rr(c, x, 470, 140, 180, 22); c.fill();
            c.fillStyle = "rgba(255,255,255,.08)"; rr(c, x + 8, 478, 124, 10, 5); c.fill();
            c.strokeStyle = "rgba(0,0,0,.35)"; c.lineWidth = 2; for (let y = 520; y < 640; y += 34) { c.beginPath(); c.moveTo(x + 10, y); c.lineTo(x + 130, y); c.stroke(); }
          }
          // instrument cases stacked in the aisle by the slingshot
          c.fillStyle = "#121212"; rr(c, 110, 588, 70, 52, 6); c.fill(); rr(c, 250, 600, 44, 40, 6); c.fill();
          c.fillStyle = "#9aa3ad"; c.fillRect(140, 600, 10, 5); c.fillRect(266, 610, 8, 5);
          bigLogo(c, KT.stage, KT.won);
          // ribbed rubber floor
          c.fillStyle = "#1b1b1d"; c.fillRect(0, G, W, H - G);
          c.fillStyle = "#c9a227"; c.fillRect(0, G, W, 4);
          c.fillStyle = "rgba(255,255,255,.06)"; for (let y = G + 10; y < H; y += 8) c.fillRect(0, y, W, 2);
        },
      },
    ],
    levels: [
      {
        name: "Warm-Up Lot", bg: 0,
        birds: ["brass", "brass", "woodwind", "drumline"],
        build(e) {
          e.blk("wood", 840, 640, 18, 90); e.blk("wood", 960, 640, 18, 90);
          e.blk("wood", 900, 550, 170, 18);
          e.pig("trojan", 900, 640); e.pig("rocketSmall", 900, 532);
          e.blk("glass", 1080, 640, 16, 70); e.blk("glass", 1160, 640, 16, 70);
          e.blk("wood", 1120, 570, 140, 16);
          e.pig("trojanCadet", 1120, 640);
        },
      },
      {
        name: "The Gate", bg: 1,
        birds: ["brass", "drumline", "woodwind", "guard"],
        build(e) {
          const G = 640;
          e.blk("stone", 850, G, 22, 90); e.blk("stone", 950, G, 22, 90);
          e.blk("wood", 900, 550, 160, 18);
          e.pig("rocket", 900, G);
          e.blk("wood", 865, 532, 16, 70); e.blk("wood", 935, 532, 16, 70);
          e.blk("wood", 900, 462, 110, 16);
          e.pig("trojan", 900, 532); e.pig("rocketSmall", 900, 446);
          e.blk("glass", 1090, G, 16, 80); e.blk("glass", 1170, G, 16, 80);
          e.blk("stone", 1130, 560, 120, 16);
          e.pig("trojanCadet", 1130, G); e.pig("trojanShield", 1130, 544);
        },
      },
      {
        name: "The Sideline", bg: 2,
        birds: ["brass", "drumline", "woodwind", "front", "guard"],
        build(e) {
          const G = 640;
          e.blk("stone", 800, G, 24, 100); e.blk("stone", 1000, G, 24, 100);
          e.blk("wood", 900, G, 18, 100);
          e.blk("wood", 900, 540, 240, 16);
          e.tnt(851, G); e.pig("rocketSmall", 851, 608);
          e.pig("trojan", 950, G);
          e.blk("wood", 840, 524, 16, 70); e.blk("wood", 960, 524, 16, 70);
          e.blk("wood", 900, 454, 170, 16);
          e.pig("trojanShield", 900, 524); e.pig("rocketSmall", 900, 438);
          e.blk("glass", 1110, G, 16, 100); e.blk("glass", 1170, G, 16, 100);
          e.blk("wood", 1140, 540, 100, 16);
          e.pig("trojanCadet", 1140, G); e.tnt(1140, 524);
        },
      },
      {
        name: "Under the Lights", bg: 3,
        birds: ["brass", "drumline", "drumline", "woodwind", "front", "guard"],
        label: "NORTH HENDERSON · UNDER THE LIGHTS",
        hudClass: "stadium", scoreLabel: "PISGAH · 5A",
        build(e) {
          const G = 640;
          e.blk("stone", 800, G, 22, 130); e.blk("stone", 880, G, 22, 130);
          let t = 510;
          e.blk("wood", 840, t, 120, 16); t -= 16;
          e.blk("stone", 1060, G, 22, 130); e.blk("stone", 1140, G, 22, 130);
          e.blk("wood", 1100, 510, 120, 16);
          e.blk("glass", 970, t, 200, 14);
          e.pig("trojanShield", 810, t);
          e.tnt(970, G);
          e.pig("rocket", 925, G); e.pig("trojan", 1015, G);
          e.pig("rocketSmall", 970, t - 14); e.pig("trojanCadet", 1100, t);
          e.blk("wood", 840, G, 16, 60); e.pig("rocketSmall", 840, 580);
        },
      },
      {
        name: "Retreat & Awards", bg: 4,
        birds: ["brass", "drumline", "woodwind", "front", "guard", "brass"],
        label: "KNIGHT TOURNAMENT · 5A FINALS",
        hudClass: "stadium", scoreLabel: "PISGAH · 5A",
        bannerExtra: "17TH ANNUAL KNIGHT TOURNAMENT",
        build(e) {
          const G = 640;
          e.blk("stone", 790, G, 26, 110); e.blk("stone", 1010, G, 26, 110);
          e.blk("wood", 850, G, 18, 110); e.blk("wood", 950, G, 18, 110);
          e.blk("stone", 900, 530, 270, 18);
          e.pig("trojanCadet", 822, G); e.pig("trojanKing", 900, G); e.pig("rocketSmall", 978, G);
          const l = 512;
          e.blk("wood", 820, l, 16, 90); e.blk("wood", 980, l, 16, 90);
          e.blk("stone", 900, 422, 200, 16);
          e.tnt(900, l);
          e.pig("trojanShield", 855, l); e.pig("rocket", 945, l);
          e.pig("rocketKing", 900, 406);
          e.blk("glass", 1120, G, 16, 80); e.blk("glass", 1190, G, 16, 80);
          e.blk("wood", 1155, 560, 100, 16);
          e.pig("trojan", 1155, G); e.tnt(1155, 544);
          e.blk("wood", 700, G, 16, 60); e.blk("wood", 740, G, 16, 60);
        },
      },
      {
        name: "Bus Ride Home", bg: 5,
        birds: ["brass", "woodwind", "drumline", "front", "guard", "brass", "drumline"],
        label: "THE BUS RIDE HOME",
        build(e) {
          const G = 640;
          KT.stage = 0; KT.won = false; KT.groups = [];
          const grp = (fn) => {
            const n0 = SN ? SN.ents.length : 0; fn();
            const items = SN ? SN.ents.slice(n0).filter((x) => x.kind !== "pig").map((x) => ({ e: x, x: x.body.position.x, y: x.body.position.y, a: x.body.angle })) : [];
            KT.groups.push({ items, done: false });
          };
          grp(() => {
            e.blk("wood", 720, G, 18, 90); e.blk("wood", 800, G, 18, 90); e.blk("wood", 760, 550, 120, 16);
            e.pig("blues", 760, G); e.pig("blues", 760, 534);
          });
          grp(() => {
            e.blk("stone", 850, G, 22, 100); e.blk("stone", 950, G, 22, 100); e.blk("wood", 900, 540, 140, 16);
            e.blk("glass", 868, 524, 14, 70); e.blk("glass", 932, 524, 14, 70); e.blk("wood", 900, 454, 100, 14);
            e.pig("blues", 900, G); e.pig("blues", 900, 524);
          });
          grp(() => {
            e.blk("wood", 1010, G, 16, 120); e.blk("wood", 1080, G, 16, 120); e.blk("stone", 1045, 520, 110, 16);
            e.tnt(1045, G); e.pig("blues", 1045, 504);
          });
          grp(() => {
            e.blk("stone", 1150, G, 20, 80); e.blk("stone", 1230, G, 20, 80); e.blk("wood", 1190, 560, 110, 16);
            e.pig("bigBlues", 1190, 544); e.pig("blues", 1190, G);
          });
        },
      },
    ],
  });
})();
