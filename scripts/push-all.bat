@echo off
setlocal
chcp 65001 >nul
pushd "%~dp0.."
echo ====================================
echo   推送到所有远程仓库
echo ====================================
echo.

echo 正在推送到 GitLab (origin)...
git push origin main
if %errorlevel% neq 0 (
    echo 错误: GitLab 推送失败
    pause
    exit /b %errorlevel%
)

echo.
echo 正在推送到 GitHub (github)...
git push github main
if %errorlevel% neq 0 (
    echo 错误: GitHub 推送失败
    pause
    exit /b %errorlevel%
)

echo.
echo ====================================
echo   推送完成！
echo ====================================
echo GitLab: https://gitlab.com/goonirus/unirus.me
echo GitHub: https://github.com/goonirus/unirus.me
echo.
pause
popd
endlocal
