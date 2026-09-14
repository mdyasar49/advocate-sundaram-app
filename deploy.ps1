# Automatically set directory to the app location
Set-Location -Path $PSScriptRoot

Write-Host "===================================================" -ForegroundColor Yellow
Write-Host "Advocate Sundaram Web App - Production Deployment" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Yellow
Write-Host ""

Write-Host "[1/4] Building Production Bundle with Vite..." -ForegroundColor DarkYellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Aborting deployment." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "[2/4] Staging all changed assets and files..." -ForegroundColor DarkYellow
git add .

Write-Host ""
Write-Host "[3/4] Committing deployment changes..." -ForegroundColor DarkYellow
git commit -m "Deploy Advocate Sundaram Production Bundle"

Write-Host ""
Write-Host "[4/4] Pushing code to GitHub main branch..." -ForegroundColor DarkYellow
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Git push failed! Please check repository credentials." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "===================================================" -ForegroundColor Yellow
Write-Host "Production Deployment Completed Successfully!" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Yellow
