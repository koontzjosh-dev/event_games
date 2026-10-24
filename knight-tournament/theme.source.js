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
    c.fillStyle = "#fff"; c.font = `900 ${Math.round(0.42 * a)}px "Trebuchet MS",sans-serif`;
    c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("P", -0.05 * a, -0.38 * a);
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
  // A band block in silhouette (rows of little marchers with plumes)
  function bandBlock(c, x0, y0, cols, rows, col, plume) {
    for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
      const x = x0 + k * 16 + (r % 2) * 8, y = y0 + r * 7;
      c.fillStyle = col; c.fillRect(x - 3, y - 14, 6, 14); c.beginPath(); c.arc(x, y - 17, 3.5, 0, TAU); c.fill();
      c.fillRect(x - 2.5, y - 26, 5, 8); c.fillStyle = plume; c.fillRect(x - 1, y - 31, 2, 5);
    }
  }

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
      finalWin: "PISGAH BRINGS IT HOME!",
      lose: "BACK TO REHEARSAL…",
      noBonus: "No bandies to spare!",
      firstHint: "◀ Drag the bear back, then release!",
      outOfAmmo: "Out of bandies! Call the Drum Major ↗",
      bonus: (n, pts) => `Bonus: ${n} bandie${n > 1 ? "s" : ""} left × 10,000 = ${pts}`,
      goal: (n) => `Outplay ${n} rival${n > 1 ? "s" : ""}!`,
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
      rocketKing: { r: 27, hp: 120, score: 10000, dmgMul: 1.1, debris: [ACR_GREEN, ACR_GOLD, "#fff"], sprite: { pad: 2.4, body: rocket("king"), front: exhaust } },
    },
    special: { type: "major", label: "DRUM MAJOR", icon: "🎼", uses: 1, perLevel: true, fromLevel: 1, dust: "rgba(255,236,170," },
    shuffle: { label: "SHUFFLE SECTIONS", icon: "🔀" },
    sling: { wood: "#7a1a14", woodFront: "#a3271d" },
    sounds: ({ tone, noise }) => ({
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
    }),
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
          c.fillStyle = "#1a1410"; c.fillRect(470, 600, 170, 8); c.fillRect(480, 608, 6, 32); c.fillRect(624, 608, 6, 32);
          c.fillStyle = "#e9e4d8"; c.fillRect(470, 596, 170, 6);
          trophy(c, 505, 596, 34, "#e8b830"); trophy(c, 555, 596, 52, "#ffd25a"); trophy(c, 605, 596, 40, "#c9ced6");
          for (const x of [64, 1226]) lightTower(c, x, 92, G, 0.3);
          const sg = c.createRadialGradient(217, 470, 10, 217, 470, 230);
          sg.addColorStop(0, "rgba(255,250,225,.22)"); sg.addColorStop(1, "rgba(255,250,225,0)");
          c.fillStyle = sg; c.fillRect(0, 240, 460, 400);
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
    ],
  });
})();
