# GitHub 推送设置指南

## 当前状态

✅ 代码已提交到本地仓库
✅ 已添加 GitHub remote (github)

## 接下来需要做的

### 步骤 1: 在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 仓库名称设置为: `unirus.me`
3. 选择 Public 或 Private（根据你的需求）
4. **不要** 初始化 README、.gitignore 或 license（因为本地已经有代码了）
5. 点击 "Create repository"

### 步骤 2: 如果仓库地址不同

如果你的 GitHub 用户名不是 `goonirus`，或者仓库名称不同，需要修改 remote 地址：

```bash
# 删除现有的 GitHub remote
git remote remove github

# 添加正确的 GitHub remote（替换为你的实际地址）
git remote add github https://github.com/你的用户名/你的仓库名.git
```

### 步骤 3: 推送到 GitHub

创建好仓库后，运行以下命令：

```bash
# 推送代码到 GitHub
git push github main

# 或者如果你想把 GitHub 设置为默认 remote
git push -u github main
```

### 步骤 4: 推送到 GitLab（可选）

如果你想同时推送到 GitLab 和 GitHub：

```bash
# 推送到 GitLab
git push origin main

# 推送到 GitHub
git push github main
```

> 提示：也可以直接运行 `scripts/push-all.bat`（或 `scripts/push-all.ps1`）一次性推送两个远程。

## 当前 remote 配置

- **origin**: https://gitlab.com/goonirus/unirus.me (GitLab)
- **github**: https://github.com/goonirus/unirus.me.git (GitHub)

## 常见问题

**Q: 如果提示 "repository not found"?**  
A: 说明 GitHub 上还没有这个仓库，请先按照步骤 1 创建仓库。

**Q: 如果提示权限错误?**  
A: 你可能需要配置 GitHub 的认证，使用 Personal Access Token 或 SSH key。

**Q: 如何修改 GitHub remote 地址?**  
A: 使用 `git remote set-url github <新的URL>`


