@echo off
echo ================================
echo ChanTech Quantitative Investment Dashboard
echo ================================
echo.
echo Installing dependencies...
call npm install
echo.
echo Dependencies installed successfully!
echo.
echo Starting development server...
echo Application will open at http://localhost:3000
echo.
call npm run dev
pause
