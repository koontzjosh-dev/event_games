# Stick Fight

Browser stick figure fighting game template. Vanilla JS + Canvas, no build step, works offline after first load.

**Status: step 1 of 5** — one player vs one CPU in one arena, touch + keyboard controls, best of 3 rounds.

## Files

- `index.html` — page shell, rotate-your-phone overlay, loads the scripts
- `theme.js` — all reskinnable content (title, colors, text, fighters, AI tuning, arena)
- `js/input.js` — keyboard + touch (floating left stick, four right buttons), merged into one controller
- `js/fighter.js` — stick figure skeleton, poses, moves, hit/block/KO logic
- `js/ai.js` — CPU controller (same interface as the player's input; never reads your buttons)
- `js/game.js` — loop, round flow, arena, HUD, drawing the touch controls
- `js/audio.js` — sound effects generated with WebAudio
- `sw.js` — offline cache (network-first)

## Controls

- Touch: drag anywhere on the left half to move, push up to jump. Buttons on the right: Light, Heavy, Block (hold), Special.
- Keyboard: arrows / WASD to move, up / W / space to jump, J light, K heavy, L block, ; special.

Add `?debug` to the URL to see hitboxes, states, and fps.

## Making a themed variant

Full instructions come with step 4, when the roster, arenas, and ladder move into `theme.js`. For now, copy the folder and edit `theme.js`.
