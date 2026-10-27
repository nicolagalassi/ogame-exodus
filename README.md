# OGame Exodus: classifiche unite

**https://nicolagalassi.github.io/ogame-exodus/**

I giocatori degli universi italiani che si fondono nell'Exodus, in un'unica classifica per gruppo di
colore (Blu, Arancio, Verde) o per universo di destinazione (Zhang, Astrid, Buzz, Celestia): generale,
economia, ricerca, militare e forme di vita, con alleanza, universo di provenienza e posizione originale.

Per destinazione entrano tutti i giocatori che possono sceglierla: Zhang e Astrid raccolgono due gruppi,
quindi un giocatore di quei gruppi compare in entrambe le sue destinazioni.

| Gruppo | Universi | Destinazioni |
|---|---|---|
| Blu | 264, 265, 267, 269, 270, 274 | Celestia (IT 284), Zhang (IT 281) |
| Arancio | 195, 254 | Zhang (IT 281), Astrid (IT 282) |
| Verde | 266, 268, 271, 272, 273, 275, 276 | Astrid (IT 282), Buzz (IT 283) |

I gruppi sono scritti in `GROUPS`, in `fetch.mjs`.

## Dati

Solo l'API pubblica ufficiale di OGame (`https://sN-it.ogame.gameforge.com/api/`): nessun login, nessuna
pagina del gioco. Il flusso `.github/workflows/pages.yml` scarica i file ogni 3 ore, una richiesta alla
volta, ricostruisce `data.js` e pubblica la pagina. Gameforge aggiorna le classifiche circa una volta
all'ora. Gli amministratori del gioco sono esclusi.

Aggiornamento a mano: Actions → "Exodus rankings on Pages" → Run workflow.

## In locale

```
node fetch.mjs      # scrive data.js, circa un minuto
```

poi apri `index.html` nel browser.
