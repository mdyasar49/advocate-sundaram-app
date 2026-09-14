@echo off
cd /d "%~dp0"
echo ===================================================
echo Advocate Sundaram Web App - Production Deployment
echo ===================================================
echo.

echo [1/4] Building Production Bundle with Vite...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Aborting deployment.
    exit /b %errorlevel%
)

echo.
echo [2/4] Staging all changed assets and files...
git add .

echo.
echo [3/4] Committing deployment changes...
git commit -m "Deploy Advocate Sundaram Production Bundle"

echo.
echo [4/4] Pushing code to GitHub main branch...
git push origin main
if %errorlevel% neq 0 (
    echo Git push failed! Please check repository credentials.
    exit /b %errorlevel%
)

echo.
echo ===================================================
echo Production Deployment Completed Successfully!
echo ===================================================
