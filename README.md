# Event Games

Live at https://koontzjosh-dev.github.io/event_games/

- `pisgah-vs-tuscola/` — slingshot game (single-file build from the Slingshot engine)
- `pastors-vs-vices/` — Pastor Appreciation Sunday slingshot game
- `knight-tournament/` — Pisgah Band at the 17th Knight Tournament (10.24.26) slingshot game. Readable theme in `theme.source.js`; `./build.sh` rebuilds `index.html` from it plus the shared engine in `pisgah-vs-tuscola/index.html`. Leaderboard: `leaderboard/?game=knight-tournament&title=Knight%20Tournament`
- `leaderboard/` — big-screen play counts and top scores (`?game=pastors-vs-vices&title=Pastors%20vs%20Vices` for the Pastors board)

Each game folder holds one self-contained `index.html` built with `base/build.py` from the Slingshot project. To update a game, rebuild it and replace that folder's `index.html`.

The level-select screen of each slingshot game has a "🏆 Leaderboard ↗" button (a small `<script>` just before `</body>`, opening `../leaderboard/?game=<id>` in a new tab). It was added to the deployed files, so re-add it after rebuilding Pisgah vs Tuscola or Pastors vs Vices from the Slingshot project. Knight Tournament's `build.sh` adds it automatically from `leaderboard-link.html`.
