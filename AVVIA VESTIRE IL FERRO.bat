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

rem --- Ricerca di Node.js: prima nel PATH, poi nelle posizioni comuni ---
where node >nul 2>nul && goto :node_ok
if exist "C:\Program Files\nodejs\node.exe" set "PATH=C:\Program Files\nodejs;%PATH%" && goto :node_ok
if exist "%ProgramFiles%\nodejs\node.exe" set "PATH=%ProgramFiles%\nodejs;%PATH%" && goto :node_ok
if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%" && goto :node_ok
if exist "%USERPROFILE%\scoop\apps\nodejs\current\node.exe" set "PATH=%USERPROFILE%\scoop\apps\nodejs\current;%PATH%" && goto :node_ok
if exist "%LOCALAPPDATA%\Volta\bin\node.exe" set "PATH=%LOCALAPPDATA%\Volta\bin;%PATH%" && goto :node_ok
set "NODEDIR="
for /d %%v in ("%APPDATA%\nvm\v*") do if exist "%%~v\node.exe" set "NODEDIR=%%~v"
if defined NODEDIR set "PATH=%NODEDIR%;%PATH%" && goto :node_ok

echo [ERRORE] Node.js non risulta raggiungibile da questa finestra.
echo Se non lo hai mai installato: scaricalo da https://nodejs.org (v. 18 o superiore)
echo e riprova a fare doppio clic su questo file.
echo.
echo Se invece lo usi gia' nel terminale (npm funziona), avvialo da li':
echo   npm run dev
echo.
pause
exit /b 1

:node_ok
echo Node.js trovato. Avvio in corso...
echo.

if not exist node_modules (
    echo [1/4] Prima esecuzione: installazione dei componenti necessari...
    echo       (puo' richiedere qualche minuto, e' normale)
    call npm install
    if %errorlevel% neq 0 goto :errore
    rem Consenti e ricostruisci esbuild anche se npm aveva bloccato i suoi script.
    call npm approve-scripts esbuild >nul 2>nul
    call npm rebuild esbuild >nul 2>nul
)

if not exist "public\images\tavola-elmo-e-corazza.jpg" if not exist "public\images\tavola-elmo-e-corazza.png" (
    echo [2/4] Scarico le tavole illustrate in public\images...
    echo       (le immagini gia' presenti vengono saltate)
    call node scripts\scarica-immagini.mjs
    if %errorlevel% neq 0 echo       Avviso: scarico non riuscito; il sito usera' i collegamenti online.
) else (
    echo [2/4] Tavole illustrate gia' presenti: salto lo scaricamento.
)

echo [3/4] Preparazione del sito...
call npm run build
if %errorlevel% neq 0 goto :errore

echo [4/4] Avvio del server...
echo.
echo Sito pronto! Sto aprendo il browser su http://127.0.0.1:4173
echo Lascia aperta questa finestra finche' navighi: chiudila per fermare il sito.
start "" http://127.0.0.1:4173
call npm run preview -- --host 127.0.0.1 --port 4173
goto :fine

:errore
echo.
echo ================================================
echo   QUALCOSA E' ANDATO STORTO
echo ================================================
echo Leggi il messaggio di errore qui sopra (le righe in rosso)
echo e copia quel testo nella chat: serve per risolvere il problema.
echo.
pause
exit /b 1

:fine
pause
