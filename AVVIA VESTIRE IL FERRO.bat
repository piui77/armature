@echo off
chcp 65001 >nul
title Vestire il Ferro - Server locale
cd /d "%~dp0"

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRORE] Node.js non risulta installato su questo computer.
    echo Scaricalo gratuitamente da https://nodejs.org (versione 18 o superiore),
    echo installalo e riprova a fare doppio clic su questo file.
    pause
    exit /b 1
)

if not exist node_modules (
    echo [1/3] Prima esecuzione: installazione dei componenti necessari...
    echo       (puo' richiedere qualche minuto, e' normale)
    call npm install
    rem Se il tuo npm blocca gli script di installazione (allow-scripts),
    rem consenti quello di esbuild e riprova la preparazione del binario.
    call npm approve-scripts esbuild >nul 2>nul
    call npm rebuild esbuild >nul 2>nul
)

echo [2/3] Tavole illustrate: controllo e download in public\images...
echo       (le immagini gia' presenti vengono saltate)
call node scripts\scarica-immagini.mjs

echo [3/3] Preparazione del sito...
call npm run build

echo.
echo Sito pronto! Sto aprendo il browser su http://127.0.0.1:4173
echo Lascia aperta questa finestra finche' navighi: chiudila per fermare il sito.
start "" http://127.0.0.1:4173
call npm run preview -- --host 127.0.0.1 --port 4173
