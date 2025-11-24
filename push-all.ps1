# PowerShell 脚本：同时推送到所有远程仓库
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "   推送到所有远程仓库" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# 推送到 GitLab
Write-Host "正在推送到 GitLab (origin)..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "错误: GitLab 推送失败" -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host ""

# 推送到 GitHub
Write-Host "正在推送到 GitHub (github)..." -ForegroundColor Yellow
git push github main
if ($LASTEXITCODE -ne 0) {
    Write-Host "错误: GitHub 推送失败" -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "====================================" -ForegroundColor Green
Write-Host "   推送完成！" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green
Write-Host "GitLab: https://gitlab.com/goonirus/unirus.me" -ForegroundColor Cyan
Write-Host "GitHub: https://github.com/goonirus/unirus.me" -ForegroundColor Cyan
Write-Host ""


