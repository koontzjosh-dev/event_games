# Event Games

Live at https://koontzjosh-dev.github.io/event_games/

- `pisgah-vs-tuscola/` — slingshot game (single-file build from the Slingshot engine)
- `pastors-vs-vices/` — Pastor Appreciation Sunday slingshot game
- `knight-tournament/` — Pisgah Band at the 17th Knight Tournament (10.24.26) slingshot game (6 levels)
- `stickfight/` — StickFight stick-figure fighting template (work in progress, not linked from the home page; source in `Event Games/StickFight` on the Mac)
- `leaderboard/` — big-screen play counts and top scores (`?game=pastors-vs-vices&title=Pastors%20vs%20Vices` for the Pastors board)

Each slingshot game folder holds one self-contained `index.html` built from the Slingshot project on the Mac (`Event Games/Slingshot`): `python3 base/build.py variants/<game>` makes `variants/<game>/<game>.html`, which is copied here as `<game>/index.html`. Source lives there, not here. `leaderboard/index.html` is that project's `base/leaderboard.html`. Each game's level picker links to its leaderboard (`leaderboard: true` in the theme).
