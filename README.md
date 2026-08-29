# Vestire il Ferro — L'Evoluzione dell'Armatura Medievale

Sito monografico (Vite + React + TypeScript + Tailwind CSS 4) sull'evoluzione delle armature medievali,
dalla caduta di Roma (476 d.C.) al crepuscolo degli arnesi bianchi (1600 d.C.).

## Requisiti

- **Node.js 18 o superiore** (consigliato 20+): https://nodejs.org
- npm (incluso con Node.js)

## Avvio in locale

### Avvio con doppio clic (Windows)

Fai doppio clic su `AVVIA VESTIRE IL FERRO.bat`: alla prima esecuzione installa i componenti necessari,
prepara il sito e lo apre nel browser all'indirizzo `http://127.0.0.1:4173`.
Lascia aperta la piccola finestra del server mentre navighi; puoi chiuderla quando hai finito.
È necessario avere [Node.js 18 o superiore](https://nodejs.org/) installato una sola volta.

### Avvio da terminale (Windows, macOS, Linux)

1. Apri un terminale nella cartella del progetto.
2. Installa le dipendenze (solo la prima volta):

   npm install

3. Avvia il server di sviluppo:

   npm run dev

4. Apri nel browser l'indirizzo mostrato (di solito http://localhost:5173).

## Scaricare l'archivio (.zip)

Il sito include un pulsante **«Scarica il progetto (.zip)»** nel footer (dopo il glossario):
premendolo, il sito stesso impacchetta tutto il codice sorgente e avvia il download
dell'archivio `vestire-il-ferro.zip`, pronto da decomprimere e avviare come sopra.

In alternativa, dalla cartella del progetto, senza dipendenze aggiuntive:

- **macOS / Linux**: `zip -r vestire-il-ferro.zip . -x "node_modules/*" -x "dist/*"`
- **Windows (PowerShell)**: `Compress-Archive -Path * -DestinationPath vestire-il-ferro.zip`
  (escludi poi a mano `node_modules` e `dist` se presenti)

## Le immagini (tavole illustrate)

Le tavole sono salvate nella cartella `public/images/` e viaggiano insieme al progetto.

Il sito usa il componente `SafeImg` (`src/lib/ui.tsx`): per ogni tavola prova **prima la copia
locale** in `public/images/` (sia `.jpg` sia `.png`) e solo se non la trova ripiega sul
collegamento online originale. Quindi non serve alcuna configurazione: con la cartella
`public/images/` presente il sito è indipendente dai servizi esterni e funziona anche senza
connessione. Se usi GitHub, carica la cartella `public/` nel repository per conservare le
immagini al sicuro.

## Risoluzione problemi

- **Avvisi «deprecated» (uuid, recharts) durante `npm install`**: sono solo avvisi, non errori.
  L'installazione è andata a buon fine e il sito funziona normalmente.
- **«allow-scripts … esbuild … postinstall»** e poi `npm run dev` segnala un errore di esbuild:
  il tuo npm blocca gli script di installazione. Esegui una volta:

      npm approve-scripts esbuild
      npm rebuild esbuild

  poi riprova `npm run dev`. Il file `AVVIA VESTIRE IL FERRO.bat` esegue questi passaggi da solo.
- **`npm approve-scripts esbuild` risponde ENOMATCH** (il componente non è proprio installato):
  sblocca gli script e reinstalla:

      npm config set allow-scripts true
      npm install

  Se ancora non basta, reinstallazione pulita: cancella la cartella `node_modules` e il file
  `package-lock.json`, poi esegui di nuovo `npm install`.
- **«moderate severity vulnerabilities»**: avviso generico di npm sugli strumenti di sviluppo;
  per un sito personale in locale non richiede interventi.

## Build di produzione

   npm run build

La versione ottimizzata viene generata nella cartella `dist/`. Per servirla in locale:

   npx serve dist

## Note

- **Caratteri**: Cinzel ed EB Garamond sono caricati da Google Fonts; senza connessione il sito usa
  automaticamente i caratteri di riserva (Georgia/serif) e resta pienamente funzionante.
- **Animazioni**: tutte le animazioni rispettano l'impostazione di sistema «riduci movimento».

## Struttura

- `src/data/content.ts` — tutti i testi e i dati (epoche, elmi, anatomia, pesi, bottega, miti, glossario)
- `src/data/arsenal.ts` — l'arsenale (armi, barda del cavallo, scuole, vita nel ferro, fonti)
- `src/components/` — le sezioni della pagina
- `src/lib/ui.tsx` — componenti UI, incluso `SafeImg` per le immagini permanenti
- `src/lib/zipBundle.ts` — il generatore dell'archivio zip
- `public/images/` — cartella dove salvare le copie locali delle tavole
