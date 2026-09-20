@echo off
title Push Dr.Firmware to GitHub
cd /d "%~dp0"
set "PATH=%~dp0.runtime\git\cmd;%PATH%"

echo ========================================================
echo   Push Dr.Firmware Suite to GitHub (VAISHNAV-IDEAPAD)
echo ========================================================
echo.

set /p REPO_URL="Enter your GitHub Repository URL (or press Enter for https://github.com/VAISHNAV-IDEAPAD/dr-firmware.git): "
if "%REPO_URL%"=="" (
    set "REPO_URL=https://github.com/VAISHNAV-IDEAPAD/dr-firmware.git"
)

echo.
echo Adding remote origin: %REPO_URL%
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo Pushing main branch to %REPO_URL% ...
git branch -M main
git push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Code successfully pushed to GitHub!
) else (
    echo [NOTE] If repository does not exist yet, please create an empty repository on https://github.com/new
    echo        and then run this script again.
)

pause
