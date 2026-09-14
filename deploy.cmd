@echo off
echo ===================================================
echo 🚀 Advocate Sundaram Web App - Production Deployment
echo ===================================================
echo.

echo 📦 1. Building Production Bundle with Vite...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Aborting deployment.
    exit /b %errorlevel%
)

echo.
echo 📁 2. Staging all changed assets and files...
git add .

echo.
echo 💾 3. Committing deployment changes...
git commit -m "Deploy Advocate Sundaram Production Bundle"

echo.
echo 🌐 4. Pushing code to GitHub main branch...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ Git push failed! Please check your network or repository credentials.
    exit /b %errorlevel%
)

echo.
echo ===================================================
echo ✅ Production Deployment Completed Successfully!
echo ===================================================
