$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

$env:PATH = "$ScriptDir\.runtime\node;$ScriptDir\bin\platform-tools;$env:PATH"

Write-Host "[Dr.Firmware] Checking frontend assets..." -ForegroundColor Cyan
if (!(Test-Path "$ScriptDir\dist")) {
    Write-Host "[Dr.Firmware] Building production bundle..." -ForegroundColor Yellow
    & npm run build:ui
}

Write-Host "[Dr.Firmware] Starting backend server on http://localhost:4500..." -ForegroundColor Green
$serverProc = Start-Process -FilePath "$ScriptDir\.runtime\node\node.exe" -ArgumentList "server/server.js" -PassThru -NoNewWindow

Start-Sleep -Seconds 2

Write-Host "[Dr.Firmware] Launching desktop app window..." -ForegroundColor Cyan
Start-Process "msedge.exe" -ArgumentList "--app=http://localhost:4500", "--window-size=1320,880" -ErrorAction SilentlyContinue

Write-Host "[Dr.Firmware] Application is running! Press Ctrl+C to exit." -ForegroundColor Green
$serverProc.WaitForExit()
