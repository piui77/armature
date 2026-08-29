# FERRARIA — L'Evoluzione dell'Armatura Medievale

Sito monografico (Vite + React + TypeScript + Tailwind CSS 4) sull'evoluzione delle armature medievali,
dalla caduta di Roma (476 d.C.) al crepuscolo degli arnesi bianchi (1600 d.C.).

## Requisiti

- **Node.js 18 o superiore** (consigliato 20+): https://nodejs.org
- npm (incluso con Node.js)

## Avvio in locale

1. Apri un terminale nella cartella del progetto.
2. Installa le dipendenze (solo la prima volta):

   npm install

3. Avvia il server di sviluppo:

   npm run dev

4. Apri nel browser l'indirizzo mostrato (di solito http://localhost:5173).

## Build di produzione

   npm run build

La versione ottimizzata viene generata nella cartella `dist/`. Per servirla in locale:

   npx serve dist

## Note

- **Immagini**: le tavole illustrate sono caricate da URL online; per la visione serve una connessione
  a Internet. Per un uso completamente offline, salva le immagini in `public/images/` e aggiorna
  gli URL nel file `src/data/content.ts` (oggetto `IMG`).
- **Caratteri**: Cinzel ed EB Garamond sono caricati da Google Fonts; senza connessione il sito usa
  automaticamente i caratteri di riserva (Georgia/serif) e resta pienamente funzionante.
- **Animazioni**: tutte le animazioni rispettano l'impostazione di sistema «riduci movimento».

## Struttura

- `src/data/content.ts` — tutti i testi e i dati (epoche, elmi, anatomia, pesi, bottega, miti, glossario)
- `src/components/` — le sezioni della pagina
- `src/lib/` — hook (scroll reveal, count-up, scramble) e componenti UI riutilizzabili
