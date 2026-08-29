#!/usr/bin/env node
/**
 * VESTIRE IL FERRO — Download automatico delle tavole illustrate.
 *
 * Salva le 11 immagini del sito nella cartella public/images/ con i nomi
 * esatti che il componente SafeImg si aspetta. Dopo il download il sito
 * non dipende più dal servizio esterno che ospita gli originali.
 *
 * Requisiti : Node.js 18 o superiore
 * Uso       : node scripts/scarica-immagini.mjs
 *
 * Il file è idempotente: le immagini già presenti vengono saltate.
 * In caso di errore su una singola immagine avvisa e prosegue (il sito
 * continuerà a usare il link esterno per quella tavola).
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "images");

/** [nome del file locale, link dell'originale] — stessa tabella di public/images/LEGGIMI.txt */
const IMAGES = [
  ["tavola-elmo-e-corazza.png", "https://image.qwenlm.ai/generated-images/4e79017a-5eff-4c9c-94db-99972cbd39c8/_result.png"],
  ["epoca-1-eredita-di-roma.png", "https://image.qwenlm.ai/generated-images/c667c5ee-ee78-4499-a210-bde41157a839/_result.png"],
  ["epoca-2-cavaliere-anno-mille.png", "https://image.qwenlm.ai/generated-images/a8cf2055-0923-446e-b782-5e55ef8146bf/_result.png"],
  ["epoca-3-grande-transizione.png", "https://image.qwenlm.ai/generated-images/34f1a16a-806c-49ec-b787-26fb8be83795/_result.png"],
  ["epoca-4-armatura-bianca.png", "https://image.qwenlm.ai/generated-images/6b8caf32-56e7-46b7-8440-dd8e5abbe70e/_result.png"],
  ["epoca-5-gotico-fiammeggiante.png", "https://image.qwenlm.ai/generated-images/9bf81ec0-0fd5-4939-8515-9b1ba34cc0d6/_result.png"],
  ["epoca-6-crepuscolo-acciaio.png", "https://image.qwenlm.ai/generated-images/dbb93332-4c7a-404b-9360-2d6e91ac2a80/_result.png"],
  ["anatomia-arnese-bianco.png", "https://image.qwenlm.ai/generated-images/90fea5d3-4d51-4789-9ab5-0e7bfdbd7e80/_result.png"],
  ["bottega-del-forgiatore.png", "https://image.qwenlm.ai/generated-images/993587a3-57a9-439b-86f2-e7d7146073c4/_result.png"],
  ["macro-maglia-di-anelli.png", "https://image.qwenlm.ai/generated-images/29813111-b2ef-4b7a-955c-1493840a612a/_result.png"],
  ["giostra-dei-cavalieri.png", "https://image.qwenlm.ai/generated-images/4f025810-98a0-4bea-81ae-8672b4e7a53a/_result.png"],
];

async function esiste(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let scaricate = 0;
let presenti = 0;
let fallite = 0;

await mkdir(OUT, { recursive: true });
console.log(`Cartella di destinazione: ${OUT}`);
console.log("");

for (const [nome, url] of IMAGES) {
  const dest = join(OUT, nome);

  if (await esiste(dest)) {
    console.log(`  = gia' presente : ${nome}`);
    presenti += 1;
    continue;
  }

  try {
    const risposta = await fetch(url, {
      headers: { "User-Agent": "VestireIlFerro/1.0 (download tavole)" },
    });
    if (!risposta.ok) throw new Error(`HTTP ${risposta.status}`);
    const buffer = Buffer.from(await risposta.arrayBuffer());
    await writeFile(dest, buffer);
    console.log(`  + scaricata     : ${nome}  (${Math.round(buffer.length / 1024)} KB)`);
    scaricate += 1;
    await sleep(350); // piccolo respiro tra un download e l'altro
  } catch (errore) {
    console.warn(`  ! non riuscita  : ${nome} — ${errore.message}`);
    console.warn(`                    (il sito usera' il link esterno per questa tavola)`);
    fallite += 1;
  }
}

console.log("");
console.log(`Riepilogo: ${scaricate} scaricate · ${presenti} gia' presenti · ${fallite} non riuscite`);
if (fallite > 0) {
  console.log("Nessun problema: per le tavole non riuscite il sito continua a usare i link esterni.");
  console.log("Puoi rilanciare lo script piu' tardi: saltera' le immagini gia' presenti.");
}
