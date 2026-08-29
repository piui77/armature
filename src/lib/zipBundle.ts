import JSZip from "jszip";

/**
 * Tutti i file del progetto, incorporati come testo al momento della build
 * grazie al glob "raw" di Vite: il sito stesso sa impacchettarsi.
 *
 * IMPORTANTE: la chiamata a import.meta.glob deve restare DIRETTA.
 * Se la si assegna a una variabile, Vite non la riconosce piu' come
 * trasformazione da compilare e il sito si blocca al caricamento.
 */
const MODULES = import.meta.glob(
  [
    "../index.html",
    "../package.json",
    "../tsconfig.json",
    "../vite.config.js",
    "../README.md",
    "../AVVIA VESTIRE IL FERRO.bat",
    "./**/*.{ts,tsx,css}",
  ],
  { query: "?raw", import: "default", eager: true }
) as Record<string, string>;

function normalize(path: string): string {
  // "../index.html" -> "index.html" · "./App.tsx" -> "src/App.tsx"
  if (path.startsWith("../")) return path.slice(3);
  if (path.startsWith("./")) return `src/${path.slice(2)}`;
  return path;
}

export interface ZipInfo {
  files: number;
}

export async function downloadProjectZip(): Promise<ZipInfo> {
  const entries = Object.entries(MODULES);
  if (entries.length === 0) {
    throw new Error("Archivio non disponibile in questo ambiente.");
  }

  const zip = new JSZip();
  const root = zip.folder("vestire-il-ferro");
  if (!root) throw new Error("Impossibile creare l'archivio");

  let count = 0;
  for (const [rawPath, content] of entries) {
    root.file(normalize(rawPath), content);
    count += 1;
  }

  // Nota per chi apre l'archivio.
  root.file(
    "LEGGIMI.txt",
    [
      "VESTIRE IL FERRO — L'Evoluzione dell'Armatura Medievale",
      "=======================================================",
      "",
      "Per avviare il sito:",
      "  1. npm install",
      "  2. npm run dev  ->  apri http://localhost:5173",
      "",
      "IMMAGINI: le tavole sono nella cartella public/images/.",
      "Il sito usa prima la copia locale e ripiega sui collegamenti",
      "online solo se un file manca: non serve alcuna configurazione.",
      "",
      "Buona forgia!",
    ].join("\n")
  );
  count += 1;

  const blob = await zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 9 },
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "vestire-il-ferro.zip";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);

  return { files: count };
}
