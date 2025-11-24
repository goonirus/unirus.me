# PowerShell 启动脚本
Write-Host "正在启动本地服务器..." -ForegroundColor Green
Write-Host ""

# 检查 Python 3
try {
    $python3 = Get-Command python3 -ErrorAction Stop
    Write-Host "使用 Python 3 启动服务器..." -ForegroundColor Yellow
    Write-Host "服务器地址: http://localhost:8000" -ForegroundColor Cyan
    Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Gray
    Write-Host ""
    python3 -m http.server 8000
} catch {
    # 尝试 Python
    try {
        $python = Get-Command python -ErrorAction Stop
        Write-Host "使用 Python 启动服务器..." -ForegroundColor Yellow
        Write-Host "服务器地址: http://localhost:8000" -ForegroundColor Cyan
        Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Gray
        Write-Host ""
        python -m http.server 8000
    } catch {
        Write-Host "错误: 未找到 Python！" -ForegroundColor Red
        Write-Host ""
        Write-Host "请选择以下方式之一:" -ForegroundColor Yellow
        Write-Host "  1. 安装 Python: https://www.python.org/downloads/"
        Write-Host "  2. 使用 VS Code 的 Live Server 扩展"
        Write-Host "  3. 使用 Node.js: npx http-server"
        Write-Host ""
        Read-Host "按 Enter 键退出"
    }
}

