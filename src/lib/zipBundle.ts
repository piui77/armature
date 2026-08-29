import JSZip from "jszip";

/**
 * Tutti i file del progetto, incorporati come testo al momento della build
 * grazie al glob "raw" di Vite: il sito stesso sa impacchettarsi.
 */
const glob = (import.meta as unknown as {
  glob: (
    pattern: string[],
    options: { query: string; import: string; eager: boolean }
  ) => Record<string, string>;
}).glob;

const MODULES = glob(
  [
    "../index.html",
    "../package.json",
    "../tsconfig.json",
    "../vite.config.js",
    "../README.md",
    "../AVVIA FERRARIA.bat",
    "./**/*.{ts,tsx,css}",
  ],
  { query: "?raw", import: "default", eager: true }
);

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
  const zip = new JSZip();
  const root = zip.folder("ferraria-armatura-medievale");
  if (!root) throw new Error("Impossibile creare l'archivio");

  let count = 0;
  for (const [rawPath, content] of Object.entries(MODULES)) {
    root.file(normalize(rawPath), content);
    count += 1;
  }

  // Nota per chi apre l'archivio: le immagini restano online.
  root.file(
    "LEGGIMI-IMMAGINI.txt",
    [
      "FERRARIA — L'Evoluzione dell'Armatura Medievale",
      "================================================",
      "",
      "Per avviare il sito:",
      "  1. npm install",
      "  2. npm run dev  ->  apri http://localhost:5173",
      "",
      "Le 11 tavole illustrate sono caricate da URL online",
      "(vedi src/data/content.ts, oggetto IMG): per una copia",
      "100% offline salvale in public/images/ e aggiorna gli indirizzi.",
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
  a.download = "ferraria-armatura-medievale.zip";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);

  return { files: count };
}
