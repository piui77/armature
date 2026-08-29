#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
VESTIRE IL FERRO - Scaricatore delle tavole illustrate.

Scarica le 11 tavole del sito nella cartella public/images/, cosi' il sito
non dipende piu' dai collegamenti online. Usa solo la libreria standard di
Python: non serve installare nulla.

Uso (dal terminale, nella cartella del progetto):
    python scripts/scarica_immagini.py

Le immagini gia' presenti vengono saltate. Se una scarica non riesce,
lo script avvisa e prosegue con le altre.
"""

import os
import sys
import time
import urllib.request
import urllib.error

IMMAGINI = [
    ("tavola-elmo-e-corazza", "https://image.qwenlm.ai/generated-images/4e79017a-5eff-4c9c-94db-99972cbd39c8/_result.png"),
    ("epoca-1-eredita-di-roma", "https://image.qwenlm.ai/generated-images/c667c5ee-ee78-4499-a210-bde41157a839/_result.png"),
    ("epoca-2-cavaliere-anno-mille", "https://image.qwenlm.ai/generated-images/a8cf2055-0923-446e-b782-5e55ef8146bf/_result.png"),
    ("epoca-3-grande-transizione", "https://image.qwenlm.ai/generated-images/34f1a16a-806c-49ec-b787-26fb8be83795/_result.png"),
    ("epoca-4-armatura-bianca", "https://image.qwenlm.ai/generated-images/6b8caf32-56e7-46b7-8440-dd8e5abbe70e/_result.png"),
    ("epoca-5-gotico-fiammeggiante", "https://image.qwenlm.ai/generated-images/9bf81ec0-0fd5-4939-8515-9b1ba34cc0d6/_result.png"),
    ("epoca-6-crepuscolo-acciaio", "https://image.qwenlm.ai/generated-images/dbb93332-4c7a-404b-9360-2d6e91ac2a80/_result.png"),
    ("anatomia-arnese-bianco", "https://image.qwenlm.ai/generated-images/90fea5d3-4d51-4789-9ab5-0e7bfdbd7e80/_result.png"),
    ("bottega-del-forgiatore", "https://image.qwenlm.ai/generated-images/993587a3-57a9-439b-86f2-e7d7146073c4/_result.png"),
    ("macro-maglia-di-anelli", "https://image.qwenlm.ai/generated-images/29813111-b2ef-4b7a-955c-1493840a612a/_result.png"),
    ("giostra-dei-cavalieri", "https://image.qwenlm.ai/generated-images/4f025810-98a0-4bea-81ae-8672b4e7a53a/_result.png"),
]

TESTATA = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
    )
}


def percorso_base():
    """La cartella del progetto, ovvero la madre di scripts/."""
    return os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def gia_presente(cartella, nome):
    for est in ("jpg", "jpeg", "png"):
        if os.path.exists(os.path.join(cartella, nome + "." + est)):
            return True
    return False


def scarica(url, destinazione, tentativi=3):
    for tentativo in range(1, tentativi + 1):
        try:
            richiesta = urllib.request.Request(url, headers=TESTATA)
            with urllib.request.urlopen(richiesta, timeout=60) as risposta:
                dati = risposta.read()
            if len(dati) < 1000:
                raise ValueError("risposta troppo piccola, probabilmente non e' un'immagine")
            with open(destinazione, "wb") as file:
                file.write(dati)
            return True
        except Exception as problema:
            print("    tentativo %d non riuscito: %s" % (tentativo, problema))
            if tentativo < tentativi:
                time.sleep(2)
    return False


def main():
    cartella = os.path.join(percorso_base(), "public", "images")
    os.makedirs(cartella, exist_ok=True)

    print("=" * 52)
    print("  VESTIRE IL FERRO - scarico le tavole illustrate")
    print("=" * 52)
    print("Cartella di destinazione: %s" % cartella)
    print()

    fatte = 0
    saltate = 0
    fallite = []

    for indice, (nome, url) in enumerate(IMMAGINI, 1):
        if gia_presente(cartella, nome):
            print("[%2d/%d] %s ... gia' presente, salto" % (indice, len(IMMAGINI), nome))
            saltate += 1
            continue

        destinazione = os.path.join(cartella, nome + ".png")
        print("[%2d/%d] %s ... scarico in corso" % (indice, len(IMMAGINI), nome))
        if scarica(url, destinazione):
            print("        salvata in %s" % destinazione)
            fatte += 1
        else:
            fallite.append(nome)

    print()
    print("Riepilogo: %d scaricate, %d gia' presenti, %d non riuscite." % (fatte, saltate, len(fallite)))
    if fallite:
        print("Non sono riuscito a scaricare: %s" % ", ".join(fallite))
        print("Il sito continuera' a usare i collegamenti online per quelle tavole.")
        print("Riprova piu' tardi rilanciando questo script: salta quelle gia' salvate.")
        return 1
    print("Fatto: il sito ora usa solo le copie locali, anche senza connessione.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
