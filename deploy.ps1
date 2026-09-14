Write-Host "===================================================" -ForegroundColor Gold
Write-Host "🚀 Advocate Sundaram Web App - Production Deployment" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Gold
Write-Host ""

Write-Host "📦 1. Building Production Bundle with Vite..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Aborting deployment." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "📁 2. Staging all changed assets and files..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "💾 3. Committing deployment changes..." -ForegroundColor Yellow
git commit -m "Deploy Advocate Sundaram Production Bundle"

Write-Host ""
Write-Host "🌐 4. Pushing code to GitHub main branch..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Git push failed! Please check repository credentials." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "===================================================" -ForegroundColor Gold
Write-Host "✅ Production Deployment Completed Successfully!" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Gold
