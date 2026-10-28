# OGame Exodus: classifiche unite

**https://nicolagalassi.github.io/ogame-exodus/**

I giocatori degli universi che si fondono a novembre-dicembre 2026, in tutte le community (AR, BR, CZ, DE,
DK, EN, ES, FR, GR, HR, HU, IT, JP, MX, NL, PL, PT, RO, RU, SI, SK, TR, TW, US), in un'unica classifica per
gruppo o per universo di destinazione: generale, economia, ricerca, militare e forme di vita, con alleanza,
universo di provenienza e posizione originale. La community si sceglie in alto; un link con `?c=DE` apre
direttamente quella. La pagina è in italiano e in inglese (IT / EN in alto a destra, oppure `?lang=en`): di
partenza segue la lingua del browser, italiano per i browser italiani e inglese per tutti gli altri.

- **Per gruppo**: gli universi che condividono le stesse destinazioni, più le destinazioni che esistono già
  (il gruppo DE di Sombrero 171 mostra anche Volans EN 174); ogni giocatore compare una volta.
- **Per destinazione**: tutti i giocatori che possono sceglierla, anche di altre community (Yi–SWAN,
  Zhang e Astrid ES raccolgono anche gruppi AR e MX; Volans EN anche Sombrero DE). Se la destinazione è un
  universo che esiste già (fusione forzata, per esempio Taurus GR 120), entrano anche i suoi giocatori. Chi
  può scegliere più destinazioni compare in ognuna.

Le fusioni sono scritte in `merges.mjs`, ricopiate da https://ogame.comastuff.com/merges2026.html
(aggiornata al 28/10/2026). Per Italia, per esempio:

| Gruppo | Universi | Destinazioni |
|---|---|---|
| Blu | 264, 265, 267, 269, 270, 274 | Celestia (IT 284), Zhang (IT 281) |
| Arancio | 195, 254 | Zhang (IT 281), Astrid (IT 282) |
| Verde | 266, 268, 271, 272, 273, 275, 276 | Astrid (IT 282), Buzz (IT 283) |

Per ogni destinazione la pagina mostra anche le caratteristiche. Per i nuovi universi sono quelle annunciate
negli annunci di fusione dei forum di ogni community (velocità, detriti, campi extra, materia oscura, ACS,
sonde con stiva...), scritte a mano in `SPECS`, in `index.html`, con le fonti nei commenti: i nuovi universi
non esistono ancora nell'API, e un'impostazione che l'annuncio non dice resta fuori. Per gli universi che
esistono già sono quelle attuali, lette da `serverData.xml` dell'API, più le modifiche annunciate per la
fusione (`CHANGES`, in `index.html`).

## Dati

Solo l'API pubblica ufficiale di OGame (`https://sN-xx.ogame.gameforge.com/api/`): nessun login, nessuna
pagina del gioco. Il flusso `.github/workflows/pages.yml` scarica i file ogni 3 ore, una richiesta alla
volta per server (circa 330 universi, sei alla volta: qualche minuto), ricostruisce `data/` e pubblica la pagina. Gameforge
aggiorna le classifiche circa una volta all'ora. Gli amministratori del gioco sono esclusi. Un universo che
non risponde viene saltato e segnalato nella pagina, senza fermare il resto.

`data/index.js` contiene le fusioni e l'elenco degli universi; i giocatori di ogni universo stanno in
`data/<community>-<numero>.js` e la pagina carica solo quelli della classifica scelta.

Aggiornamento a mano: Actions → "Exodus rankings on Pages" → Run workflow.

## In locale

```
node fetch.mjs      # scrive data/, qualche minuto
```

poi apri `index.html` nel browser.
