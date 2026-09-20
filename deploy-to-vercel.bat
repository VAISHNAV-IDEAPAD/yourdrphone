@echo off
title Deploy to Vercel - yourdrphone
cd /d "%~dp0"
set "PATH=%~dp0.runtime\node;%PATH%"

echo ========================================================
echo   Deploy Dr.Firmware to Vercel as "yourdrphone"
echo ========================================================
echo.

echo Building production bundle...
call npm run build:ui

echo.
echo Deploying to Vercel...
call npx vercel --name yourdrphone --prod

echo.
echo Deployment finished!
pause
