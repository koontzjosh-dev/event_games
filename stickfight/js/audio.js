/* Procedural sound effects via WebAudio. No audio files needed. */
(function () {
  const SF = window.SF = window.SF || {};
  let ctx = null, master = null, noiseBuf = null, muted = false;

  function unlock() {
    try {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = 0.5;
        master.connect(ctx.destination);
        noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
        const d = noiseBuf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      }
      if (ctx.state === 'suspended') ctx.resume();
    } catch (e) { /* audio is optional */ }
  }

  function tone(freq, dur, type, vol, slideTo) {
    const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.02);
  }

  function noise(dur, vol, freq, type) {
    const t = ctx.currentTime;
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf; f.type = type || 'lowpass'; f.frequency.value = freq;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(master); s.start(t); s.stop(t + dur + 0.02);
  }

  const SFX = {
    whiff()   { noise(0.09, 0.12, 2200, 'bandpass'); },
    light()   { noise(0.07, 0.45, 2000); tone(170, 0.08, 'square', 0.18, 90); },
    heavy()   { noise(0.14, 0.6, 900); tone(120, 0.18, 'sine', 0.55, 45); },
    block()   { tone(950, 0.05, 'square', 0.12, 620); noise(0.04, 0.25, 4500, 'highpass'); },
    jump()    { tone(320, 0.09, 'sine', 0.12, 540); },
    special() { noise(0.2, 0.2, 1500, 'bandpass'); tone(220, 0.2, 'sawtooth', 0.12, 440); },
    ko()      { tone(420, 0.7, 'sawtooth', 0.22, 55); noise(0.3, 0.5, 600); },
    round()   { tone(660, 0.12, 'square', 0.12); },
    fight()   { tone(523, 0.1, 'square', 0.14); setTimeout(() => ctx && tone(784, 0.2, 'square', 0.14), 110); }
  };

  SF.Audio = {
    unlock,
    play(name) { if (!ctx || muted || !SFX[name]) return; try { SFX[name](); } catch (e) {} },
    get muted() { return muted; },
    set muted(v) { muted = !!v; }
  };
})();
