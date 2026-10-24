/*
 * THEME FILE — all reskinnable content lives here.
 * Step 1 only uses a small part of it (one player, one opponent, one arena).
 * Step 4 expands this into the full roster / arenas / ladder format.
 */
window.THEME = {
  id: 'stickfight-default',
  title: 'Stick Fight',
  font: '"Trebuchet MS", "Segoe UI", system-ui, sans-serif',

  colors: {
    skyTop: '#1d2550',
    skyBottom: '#5a3d6e',
    hills: '#2b2550',
    floor: '#2a2340',
    floorEdge: '#ffb347',
    floorLines: 'rgba(255,255,255,0.06)',
    ui: '#ffffff',
    uiDim: 'rgba(255,255,255,0.65)',
    accent: '#ffb347',
    hpBack: 'rgba(0,0,0,0.45)',
    hpPlayer: '#4fd1ff',
    hpCpu: '#ff5a5a',
    hpLow: '#ffd23f',
    buttons: 'rgba(255,255,255,0.14)',
    buttonsPressed: 'rgba(255,179,71,0.55)',
    buttonEdge: 'rgba(255,255,255,0.45)'
  },

  text: {
    tapToStart: 'Tap to fight',
    pressToStart: 'Press any key to fight',
    rotate: 'Turn your phone sideways',
    round: 'Round',
    fight: 'FIGHT!',
    ko: 'K.O.!',
    timeUp: 'TIME!',
    draw: 'DRAW',
    youWin: 'YOU WIN!',
    youLose: 'YOU LOSE',
    playAgain: 'Tap to play again',
    playAgainKeys: 'Press any key to play again',
    buttons: { light: 'Light', heavy: 'Heavy', block: 'Block', special: 'Special' }
  },

  roundTime: 60,       // seconds
  roundsToWin: 2,      // best of 3

  player: {
    name: 'Hero',
    head: { color: '#ffd27a' },   // or { image: 'assets/face.png' }
    body: '#f4f4f4',
    line: 6,
    stats: { health: 100, speed: 1, power: 1 }
  },

  opponent: {
    name: 'Rival',
    head: { color: '#ff8a80' },
    body: '#ff6b6b',
    line: 6,
    stats: { health: 100, speed: 0.95, power: 1 },
    ai: {
      aggression: 0.55,   // 0..1  how often it closes in and swings
      reaction: 0.28,     // seconds before it reacts to your attack windup
      block: 0.35,        // 0..1  chance it blocks once it reacts
      combo: 0.3,         // 0..1  chance it follows a jab with more jabs
      range: 85           // preferred fighting distance (px)
    }
  },

  arena: {
    floorY: 400          // world is 960 x 540; fighters stand on this line
  }
};
