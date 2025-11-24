# Unirus.me

Offline-friendly作品集，包含主页、项目详情与文章详情三张静态页面，并附带本地预览与推送脚本。

## 项目结构

```
home.html        # 主页入口
public/
  articles/detail.html
  projects/detail.html
scripts/         # 常用脚本（本地服务 & 推送）
docs/            # 运行与协作文档
README.md
```

## 本地运行

1. 安装 Python（3.x 即可）
2. 启动本地服务器  
   - 批处理：`scripts\start-server.bat`  
   - PowerShell：`powershell -ExecutionPolicy Bypass -File scripts\start-server.ps1`
3. 浏览器访问 `http://localhost:8000/home.html`

更多方式见 `docs/running.md`。

## 常用脚本

| 脚本 | 作用 |
| --- | --- |
| `scripts/start-server.*` | 启动本地静态服务器（端口 8000） |
| `scripts/quick-preview.bat` | 直接在浏览器打开 `home.html`（无服务器） |
| `scripts/push-all.*` | 同时推送到 GitLab `origin` 与 GitHub `github` |

## 推送到远程

仓库同时托管在：
- GitLab: `origin` → https://gitlab.com/goonirus/unirus.me  
- GitHub: `github` → https://github.com/goonirus/unirus.me

一键推送：

```bash
scripts\push-all.bat
```
或在 PowerShell 中：
```powershell
.\scripts\push-all.ps1
```

若只推送单一远程：
```bash
git push origin main
git push github main
```

如何配置 GitHub Remote 详见 `docs/github-setup.md`。

## 约定

- 所有静态资源放在 `public/`，新增页面请保持相对路径层级一致，并更新引用
- 文档放在 `docs/`
- 脚本放在 `scripts/`，如需新增 CLI 工具请同步更新 README
