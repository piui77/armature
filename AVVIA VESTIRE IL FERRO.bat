@echo off
chcp 65001 >nul
title Vestire il Ferro - Server locale
cd /d "%~dp0"

echo.
echo ================================================
echo   VESTIRE IL FERRO - Avvio del sito
echo ================================================
echo Cartella del progetto: %cd%
echo.

where node >nul 2>nul
if %errorlevel% equ 0 goto node_ok
echo [ERRORE] Node.js non risulta installato su questo computer.
echo Scaricalo gratuitamente da https://nodejs.org, versione 18 o superiore,
echo poi installalo e riprova a fare doppio clic su questo file.
echo.
pause
exit /b 1

:node_ok
if exist node_modules goto dipendenze_ok
echo [1/4] Prima esecuzione: installazione dei componenti necessari...
echo       puo' richiedere qualche minuto, e' normale
call npm install
if %errorlevel% neq 0 goto errore
call npm approve-scripts esbuild >nul 2>nul
call npm rebuild esbuild >nul 2>nul

:dipendenze_ok
if exist "public\images\tavola-elmo-e-corazza.jpg" goto immagini_ok
if exist "public\images\tavola-elmo-e-corazza.png" goto immagini_ok
echo [2/4] Scarico le tavole illustrate in public\images...
echo       le immagini gia' presenti vengono saltate
call node scripts\scarica-immagini.mjs
if %errorlevel% neq 0 echo       Avviso: scarico non riuscito, il sito usera' i collegamenti online.
goto dopo_immagini

:immagini_ok
echo [2/4] Tavole illustrate gia' presenti: salto lo scaricamento.

:dopo_immagini
echo [3/4] Preparazione del sito...
call npm run build
if %errorlevel% neq 0 goto errore

echo [4/4] Avvio del server...
echo.
echo Sito pronto! Sto aprendo il browser su http://127.0.0.1:4173
echo Lascia aperta questa finestra finche' navighi: chiudila per fermare il sito.
start "" http://127.0.0.1:4173
call npm run preview -- --host 127.0.0.1 --port 4173
goto fine

:errore
echo.
echo ================================================
echo   QUALCOSA E' ANDATO STORTO
echo ================================================
echo Leggi il messaggio di errore qui sopra, le righe in rosso,
echo e copia quel testo nella chat per risolvere il problema.
echo.
pause
exit /b 1

:fine
pause
