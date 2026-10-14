# GENITUS Charts Terminal

14 Chart- und Trading-Terminals aus dem ORBITRON-CHARTS-Replit-Export, zusammengeführt in eine Workshell und auf die visuelle Sprache der GENITUS-Dividenden-Terminals normiert.

**Live:** https://babybounce500.github.io/genitus-charts-terminal/

## Was drin ist

| Gruppe | Terminal | Art |
|---|---|---|
| Signale & Timing | Signals-Terminal | live (RSI-MR + Heikin-Ashi) |
| | Bull-Bear-Scanner | live (Heikin-Ashi-Regime) |
| | Dachboden-Terminal | statisch, real backtestet |
| Fundamental × Timing | Legendary-Terminal | live |
| | Fibonacci-Terminal | statisch, real backtestet |
| | Tech-Terminal | statisch, real backtestet (107 Nasdaq-Tech-Werte) |
| | Mega-Nasdaq-Terminal | statisch, real backtestet (1.185 von 3.267 NASDAQ-Symbolen) |
| Risk & Volatilität | Portfolio-Risk-Engine | live |
| | Volatility-Screener | live |
| News & Sentiment | News-Sentiment-Terminal | live |
| | News-Terminal | live, eigenes Magazin-Design (siehe unten) |
| Charts & Watchlist | Stocks-/Watchlist-Terminal | live |
| | Watchlist-Charts | live |
| | Charts-Bot | live |

"Live" = lädt Kurse/News zur Laufzeit von `theserver-open-ai.replit.app` (derselbe Proxy wie die Dividenden-Tools, am 14.10.2026 health-gecheckt: `/eod/historical`, `/eod/realtime`, `/eod/news`, `/api/chat` alle 200 OK). "Statisch" = Backtest-Ergebnisse fest ins HTML gebacken, keine Laufzeit-Abhängigkeit.

## Audit & Normalisierung (14.10.2026)

Beim Review des Replit-Exports gefunden und behoben:

1. **Eine leere, kaputte Datei**: `REPLIT-ADDONS/MEGA-TERMINAL.html` (0 Bytes, seit dem ursprünglichen Replit-Commit leer, von nichts referenziert). **Nicht übernommen** — zu verwechseln mit dem echten, funktionierenden `mega-nasdaq-terminal.html`, das hier enthalten ist.
2. **Vier Terminals mit abweichender Optik**: `BULL-BEAR-SCANNER`, `CHARTS-BOT`, `WATCHLIST-CHARTS` nutzten ein dunkleres, leicht anderes Farbschema (`--bg:#050608` statt `#080c10`, `--red:#ff003c` statt `#ff3b5c`, `--muted:#3a5068` statt `#7d92a8`) sowie 'Orbitron'/'JetBrains Mono' statt 'Space Mono'/'Rajdhani'. Farb-Tokens wurden auf die Dividenden-Terminal-Palette normiert; die Schriftart wurde **bewusst nicht** angefasst (siehe Punkt 4 unten — Risikoabwägung).
3. **Sechs bereits GENITUS-gebrandete Terminals** (Legendary, News-Sentiment, Portfolio-Risk-Engine, Signals, Stocks, Volatility) sowie alle 4 Addon-Terminals hatten nur eine einzige abweichende Variable (`--muted:#3a5068` statt `#7d92a8`) — korrigiert.
4. **News-Terminal bewusst NICHT vollständig normiert**: nutzt ein eigenständiges, in sich stimmiges Editorial-Design (DM Serif Display + Inter + JetBrains Mono, eigenes Light/Dark-Theming mit `data-theme`-Attribut, ~15 semantische Farbtokens mit abgeleiteten RGBA-Werten). Nur das `--bg`/`--accent`-Tokenpaar durch die Terminal-Cyan-Farbe zu ersetzen hätte die abgeleiteten RGBA-Werte (`--accent-d`, `--accent-b`, `--ticker-tag-fg`, …) inkonsistent zur Haupt-Akzentfarbe gemacht — ein kosmetischer Halbfix, der schlechter ausgesehen hätte als der Ausgangszustand. Eingeordnet als bewusste Design-Familie innerhalb der Suite, nicht als Bug. Nur der `<title>` wurde für die GENITUS-Markenfamilie angepasst.
5. Titel aller 14 Terminals auf einheitliches `GENITUS <NAME> // <Untertitel>`-Schema gebracht.
6. Alle 14 Dateien nach der Normalisierung syntaktisch validiert (`new Function()` auf jedes eingebettete `<script>`) — 0 Fehler.

## Nicht übernommen (bewusst außerhalb des Scopes "Charts Terminal only")

- `viewer/*` (Chart-Bildergalerien, ~3.000 Bilder über ein externes GitHub-Pages-Repo) — eigenständiges Produkt, kein Terminal.
- `research/*` (Backtest-Reports als Lesestücke) — Reports, keine interaktiven Terminals.
- `FUN-AND-PROFIT-LIBRARY/`, `PAGINATION-EXPORT/` — Ebooks/Manuskript-Reader, thematisch unabhängig.
- `Charts-public.html`, die Haupt-Workshell aus `REPLIT-export/index.html` — eigene Produkt-Oberflächen mit breiterem Scope als nur Terminals.

## Methodik-Hinweis

Die vier statischen Backtest-Terminals (Dachboden, Fibonacci, Tech, Mega-Nasdaq) haben eigene, im jeweiligen `REPLIT-ADDONS/README.md` dokumentierte Transparenz-Hinweise zu Methodik-Grenzen (z. B. Dachboden-Regime jahresbasiert nicht aussagekräftig, Mega-Nasdaq nur 36% Datenabdeckung) — dort im Detail nachlesbar, hier nicht wiederholt.

Keine Anlageberatung.
