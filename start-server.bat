@echo off
chcp 65001 >nul
echo 正在启动本地服务器...
echo.

REM 尝试使用 Python 3
where python3 >nul 2>&1
if %errorlevel% == 0 (
    echo 使用 Python 3 启动服务器...
    python3 -m http.server 8000
    goto :end
)

REM 尝试使用 Python 2
where python >nul 2>&1
if %errorlevel% == 0 (
    echo 使用 Python 启动服务器...
    python -m http.server 8000
    goto :end
)

REM 如果 Python 都不存在，提示用户
echo 错误: 未找到 Python！
echo.
echo 请安装 Python 后重试，或者使用以下任一方式:
echo   1. 安装 Python: https://www.python.org/downloads/
echo   2. 使用 VS Code 的 Live Server 扩展
echo   3. 使用 Node.js: npx http-server
echo.
pause
goto :end

:end
