@echo off
chcp 65001 >nul
echo ====================================
echo   启动 Home 页面
echo ====================================
echo.

REM 尝试在浏览器中直接打开文件
start "" "%~dp0home.html"

echo 正在浏览器中打开 home.html...
echo.
echo 如果需要在服务器模式下运行（推荐），请运行 start-server.bat
echo.
timeout /t 3 >nul

