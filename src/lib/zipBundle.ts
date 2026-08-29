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
    "../AVVIA VESTIRE IL FERRO.bat",
    "../public/**/*.txt",
    "../scripts/**/*.mjs",
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
  const root = zip.folder("vestire-il-ferro");
  if (!root) throw new Error("Impossibile creare l'archivio");

  let count = 0;
  for (const [rawPath, content] of Object.entries(MODULES)) {
    root.file(normalize(rawPath), content);
    count += 1;
  }

  // Nota per chi apre l'archivio: come rendere le immagini permanenti.
  root.file(
    "LEGGIMI-IMMAGINI.txt",
    [
      "VESTIRE IL FERRO — L'Evoluzione dell'Armatura Medievale",
      "=======================================================",
      "",
      "Per avviare il sito:",
      "  1. npm install",
      "  2. npm run dev  ->  apri http://localhost:5173",
      "",
      "IMMAGINI: le 11 tavole sono caricate da un servizio esterno.",
      "Per renderle PERMANENTI e indipendenti da quel servizio,",
      "apri public/images/LEGGIMI.txt: trovi la tabella con i link",
      "da cui salvare ogni immagine e il nome da darle. Una volta",
      "salvate in public/images/, il sito le userà in automatico",
      "(prova prima la copia locale, poi il link esterno).",
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
