# Event Games

Live at https://koontzjosh-dev.github.io/event_games/

- `pisgah-vs-tuscola/` — slingshot game (single-file build from the Slingshot engine)
- `pastors-vs-vices/` — Pastor Appreciation Sunday slingshot game
- `leaderboard/` — big-screen play counts and top scores (`?game=pastors-vs-vices&title=Pastors%20vs%20Vices` for the Pastors board)

Each game folder holds one self-contained `index.html` built with `base/build.py` from the Slingshot project. To update a game, rebuild it and replace that folder's `index.html`.
