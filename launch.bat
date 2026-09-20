@echo off
title Dr.Firmware Suite
cd /d "%~dp0"

echo [Dr.Firmware] Initializing environment...
set "PATH=%~dp0.runtime\node;%~dp0bin\platform-tools;%PATH%"

if not exist "dist" (
    echo [Dr.Firmware] Building frontend assets...
    call npm run build:ui
)

echo [Dr.Firmware] Starting local server on http://localhost:4500 ...
start /B node server/server.js

timeout /t 2 /nobreak >nul

echo [Dr.Firmware] Opening native desktop application window...
start msedge.exe --app=http://localhost:4500 --window-size=1320,880 || start http://localhost:4500

echo [Dr.Firmware] Suite is running. Close this window to stop.
pause
