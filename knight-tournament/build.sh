#!/bin/sh
# Rebuild knight-tournament/index.html: shared engine (taken from pisgah-vs-tuscola/index.html) + theme.source.js
set -e
cd "$(dirname "$0")"
SRC=../pisgah-vs-tuscola/index.html
{
  sed -n '1,123p' "$SRC" \
    | sed 's#<title>Pisgah vs Tuscola</title>#<title>Pisgah Band · Knight Tournament</title>#' \
    | sed 's#content="\#0b1020"#content="\#07090f"#' \
    | sed 's#t?900:700#t?2000:700#'
  echo '<script>'
  cat theme.source.js
  echo '</script>'
  echo '</body>'
  echo '</html>'
} > index.html
echo "built index.html ($(wc -c < index.html) bytes)"
