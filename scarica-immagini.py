#!/usr/bin/env python3
"""
VESTIRE IL FERRO — scarica le tavole illustrate in public/images/

Legge la tabella dei collegamenti dal file public/images/LEGGIMI.txt,
quindi non contiene indirizzi al suo interno: se gli indirizzi cambiano,
basta aggiornare quel file.

Uso:      python scarica-immagini.py
Requisiti: solo Python 3 (libreria standard, nessun pip install).

Le immagini gia' presenti vengono saltate; per quelle non riuscite il
sito continuera' a usare i collegamenti online (serve connessione).
"""

import re
import sys
import time
from pathlib import Path
from urllib.error import URLError
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent
LEGIMI = ROOT / "public" / "images" / "LEGGIMI.txt"
DEST = ROOT / "public" / "images"

# Riconosce le righe della tabella:  nome-file.jpg  <-  https://...
RIGA = re.compile(r"^\s*([\w\-]+\.(?:jpg|jpeg|png))\s*<-\s*(https?://\S+)\s*$", re.IGNORECASE)


def leggi_tabella():
    if not LEGIMI.exists():
        print(f"[ERRORE] File non trovato: {LEGIMI}")
        sys.exit(1)
    voci = []
    for riga in LEGIMI.read_text(encoding="utf-8").splitlines():
        m = RIGA.match(riga)
        if m:
            voci.append((m.group(1), m.group(2)))
    if not voci:
        print("[ERRORE] Nessuna voce trovata in LEGGIMI.txt")
        sys.exit(1)
    return voci


def gia_presente(nome):
    base = (DEST / nome).with_suffix("")
    return base.with_suffix(".jpg").exists() or base.with_suffix(".png").exists()


def scarica(nome, url):
    if gia_presente(nome):
        print(f"  gia' presente: {nome}")
        return True
    richiesta = Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    try:
        with urlopen(richiesta, timeout=60) as risposta:
            dati = risposta.read()
        (DEST / nome).write_bytes(dati)
        print(f"  scaricata: {nome} ({len(dati) // 1024} KB)")
        return True
    except (URLError, TimeoutError, OSError) as e:
        print(f"  NON RIUSCITA: {nome} -> {e}")
        return False


def main():
    DEST.mkdir(parents=True, exist_ok=True)
    voci = leggi_tabella()
    print(f"Scarico {len(voci)} tavole in {DEST} ...")
    print()
    ok = 0
    for i, (nome, url) in enumerate(voci, 1):
        print(f"[{i}/{len(voci)}] {nome}")
        if scarica(nome, url):
            ok += 1
        time.sleep(0.4)  # piccola pausa di cortesia verso il server
    print()
    if ok == len(voci):
        print(f"Fatto: {ok}/{len(voci)} tavole salvate.")
        print("Il sito ora usa le copie locali: funziona anche senza connessione.")
    else:
        print(f"Attenzione: salvate {ok}/{len(voci)} tavole.")
        print("Per quelle mancanti il sito usera' i collegamenti online.")


if __name__ == "__main__":
    main()
