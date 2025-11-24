# 运行 home.html

有几种方式可以在本地运行这个网站：

## 方法 1：使用脚本（推荐）

### Windows 批处理
双击 `scripts/start-server.bat`，脚本会自动启动本地服务器。

### PowerShell
在项目根目录运行：
```powershell
.\scripts\start-server.ps1
```

服务器启动后，在浏览器访问：**http://localhost:8000/home.html**

## 方法 2：手动使用 Python

如果已经安装 Python，在项目根目录运行：

**Python 3**
```bash
python3 -m http.server 8000
```

**Python 2**
```bash
python -m http.server 8000
```

然后访问：**http://localhost:8000/home.html**

## 方法 3：使用 Node.js

```bash
npx http-server -p 8000
```

访问：**http://localhost:8000/home.html**

## 方法 4：VS Code Live Server

1. 安装 “Live Server” 扩展
2. 在 VS Code 中右键 `home.html`
3. 选择 “Open with Live Server”

## 方法 5：直接打开（不推荐）

可以运行 `scripts/quick-preview.bat` 或直接双击 `home.html`，但由于依赖 CDN，建议还是通过本地服务器运行。

---

**提示**：服务器运行期间按 `Ctrl+C` 可停止服务。

