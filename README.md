# Threads Video Downloader (Userscript)

Scarica facilmente video e immagini da Threads.net e Threads.com direttamente dal browser, grazie a questo userscript compatibile con Tampermonkey, Violentmonkey e Greasemonkey.

## Installazione

1. Installa un gestore di userscript come [Tampermonkey](https://www.tampermonkey.net/) o [Violentmonkey](https://violentmonkey.github.io/).
2. [Scarica e installa lo script](https://github.com/ManoloZocco/Threads-video-downloader-userscript/releases/latest/download/threads-video-downloader.user.js) oppure copia il contenuto di `threads-video-downloader.user.js` in un nuovo script nel tuo gestore.
3. Visita un post su Threads.net o Threads.com: vedrai comparire un pulsante "Scarica" sopra ogni video o immagine.

## Funzionalità
- Download diretto di video e immagini da Threads.net e Threads.com
- Pulsante "Scarica" aggiunto automaticamente ai contenuti rilevanti
- Download tramite `GM_download` (compatibile Tampermonkey/Violentmonkey)
- Notifiche di successo o errore tramite `GM_notification`
- Rilevamento dinamico dei nuovi contenuti tramite `MutationObserver`

## Novità versione 1.0.2
- Compatibilità estesa anche al dominio threads.com
- Migliorata efficienza: ora lo script rileva i nuovi contenuti tramite MutationObserver
- Download tramite GM_download, notifiche tramite GM_notification
- Codice più leggibile e robusto

## Licenza
MIT

---

Per segnalare problemi o suggerire miglioramenti, apri una issue su [GitHub](https://github.com/ManoloZocco/Threads-video-downloader-userscript/issues).
