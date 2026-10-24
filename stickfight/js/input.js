/*
 * Input: keyboard + touch merged into one controller.
 * Fighters read: Input.move (-1/0/1), Input.block (held), Input.take('light'|'heavy'|'special'|'jump').
 * Presses are buffered briefly so a tap just before an attack ends still comes out.
 */
(function () {
  const SF = window.SF = window.SF || {};
  const BUFFER_MS = 130;
  const now = () => performance.now();

  const buf = {};                        // action -> timestamp of last press
  const keyHeld = { left: false, right: false, block: false };
  const touchHeld = { block: false };
  const stick = { active: false, id: null, ox: 0, oy: 0, x: 0, y: 0, nx: 0, ny: 0, up: false };
  const btnPointers = new Map();         // pointerId -> button id
  const layout = { w: 0, h: 0, r: 40, stickR: 54, stickHome: { x: 0, y: 0 }, buttons: [] };
  let touchMode = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  let onAny = null;

  function press(a) { buf[a] = now(); }
  function take(a) {
    const t = buf[a];
    if (t && now() - t <= BUFFER_MS) { buf[a] = 0; return true; }
    return false;
  }
  function clearAll() {
    for (const k in buf) buf[k] = 0;
    keyHeld.left = keyHeld.right = keyHeld.block = false;
    touchHeld.block = false;
    stick.active = false; stick.nx = stick.ny = 0;
    btnPointers.clear();
  }

  // ---------- Keyboard ----------
  const KEYMAP = {
    ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right',
    ArrowUp: 'jump', KeyW: 'jump', Space: 'jump',
    KeyJ: 'light', KeyK: 'heavy', KeyL: 'block', Semicolon: 'special'
  };
  window.addEventListener('keydown', (e) => {
    if (onAny) onAny('key');
    const a = KEYMAP[e.code];
    if (!a) return;
    e.preventDefault();
    if (a === 'left' || a === 'right' || a === 'block') { keyHeld[a] = true; return; }
    if (!e.repeat) press(a);
  });
  window.addEventListener('keyup', (e) => {
    const a = KEYMAP[e.code];
    if (a === 'left' || a === 'right' || a === 'block') keyHeld[a] = false;
  });
  window.addEventListener('blur', clearAll);

  // ---------- Touch layout (CSS pixels) ----------
  function setSize(w, h) {
    layout.w = w; layout.h = h;
    const r = Math.max(32, Math.min(64, Math.min(w, h) * 0.105));
    layout.r = r;
    layout.stickR = r * 1.35;
    const pad = Math.max(14, r * 0.4);
    layout.stickHome = { x: pad + layout.stickR + 10, y: h - pad - layout.stickR - 6 };
    // 2x2 staggered cluster, bottom right. Bottom row = most used.
    const right = w - pad - r, bottom = h - pad - r;
    const dx = r * 2.3, dy = r * 2.15;
    layout.buttons = [
      { id: 'heavy',   x: right,             y: bottom - r * 0.35, r },
      { id: 'light',   x: right - dx,        y: bottom,            r },
      { id: 'special', x: right - r * 0.2,   y: bottom - dy - r * 0.35, r },
      { id: 'block',   x: right - dx - r * 0.2, y: bottom - dy,    r }
    ];
  }

  function buttonAt(x, y) {
    let best = null, bestD = Infinity;
    for (const b of layout.buttons) {
      const d = Math.hypot(x - b.x, y - b.y);
      if (d < b.r * 1.3 && d < bestD) { best = b; bestD = d; }
    }
    return best;
  }

  function updateStick(x, y) {
    const R = layout.stickR;
    let dx = x - stick.ox, dy = y - stick.oy;
    const len = Math.hypot(dx, dy);
    if (len > R) { dx = dx / len * R; dy = dy / len * R; }
    stick.x = stick.ox + dx; stick.y = stick.oy + dy;
    stick.nx = dx / R; stick.ny = dy / R;
    if (!stick.up && stick.ny < -0.55) { stick.up = true; press('jump'); }
    else if (stick.up && stick.ny > -0.3) stick.up = false;
  }

  function attach(canvas) {
    canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (onAny) onAny('pointer');
      if (e.pointerType === 'touch' || e.pointerType === 'pen') touchMode = true;
      if (!touchMode) return;
      try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
      const x = e.clientX, y = e.clientY;
      const b = buttonAt(x, y);
      if (b) {
        btnPointers.set(e.pointerId, b.id);
        if (b.id === 'block') touchHeld.block = true; else press(b.id);
        return;
      }
      if (x < layout.w * 0.5 && !stick.active) {
        // Floating stick: centre where the thumb lands, kept on screen.
        const R = layout.stickR;
        stick.active = true; stick.id = e.pointerId; stick.up = false;
        stick.ox = Math.max(R + 6, Math.min(layout.w * 0.5 - R, x));
        stick.oy = Math.max(R + 6, Math.min(layout.h - R - 6, y));
        updateStick(x, y);
      }
    }, { passive: false });

    canvas.addEventListener('pointermove', (e) => {
      if (stick.active && e.pointerId === stick.id) { e.preventDefault(); updateStick(e.clientX, e.clientY); }
    }, { passive: false });

    const end = (e) => {
      if (stick.active && e.pointerId === stick.id) { stick.active = false; stick.nx = stick.ny = 0; stick.up = false; }
      const id = btnPointers.get(e.pointerId);
      if (id) {
        btnPointers.delete(e.pointerId);
        if (id === 'block') touchHeld.block = [...btnPointers.values()].includes('block');
      }
    };
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', end);
    canvas.addEventListener('lostpointercapture', end);
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    // iOS Safari pinch / double-tap zoom guards
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    document.addEventListener('dblclick', (e) => e.preventDefault());
  }

  SF.Input = {
    attach, setSize, take, press, clearAll, layout, stick,
    get move() {
      let m = (keyHeld.right ? 1 : 0) - (keyHeld.left ? 1 : 0);
      if (stick.active && Math.abs(stick.nx) > 0.28) m = Math.sign(stick.nx);
      return m;
    },
    get block() { return keyHeld.block || touchHeld.block; },
    get touchMode() { return touchMode; },
    isPressed(id) { return [...btnPointers.values()].includes(id); },
    set onAny(fn) { onAny = fn; }
  };
})();
