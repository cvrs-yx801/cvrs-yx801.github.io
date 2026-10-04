# CVRS · YX–801

沈阳建筑大学 Computer Vision & Remote Sensing Lab 的组织主页。原生 HTML / CSS / JavaScript，无构建依赖，适用于 `cvrs-yx801.github.io` 的 GitHub Pages。

## 本地预览

直接打开 `index.html`，或在项目目录运行：

```sh
python -m http.server 8000
```

然后打开 http://localhost:8000 。通过本地服务器预览可以更可靠地测试主题偏好的持久保存。

## 发布

将本目录内容推送到 `cvrs-yx801/cvrs-yx801.github.io` 仓库。在仓库 Settings → Pages 中选择 **Deploy from a branch**，指定实际使用的分支与 **/ (root)**。`.nojekyll` 已包含在项目中，无需打包、Node.js 或后端服务。本次仅实现本地版本，未推送或发布。

## 修改内容

- `index.html`：实验室简介与最新研究动态。
- `team.html`、`research.html`、`contact.html`：团队、研究和联系方式独立页面。各页共用 Home / Team / Research / Contact 导航。
- `assets/style.css`：所有页面正文及桌面导航统一为最大 960px 的居中容器，包含响应式布局、深浅主题变量及 0.45 秒颜色过渡。
- `assets/theme.js`：在样式加载前应用主题，避免错误主题闪烁。首次访问默认跟随系统；点击导航栏的月亮／太阳按钮直接切换深浅色，并将选择保存到 `localStorage`。尚未手动选择时跟随系统变化，同源其他标签页的主题修改也会同步。
- `assets/main.js`：一键主题切换，首屏绘制后启用渐变，避免进入页面时出现主题闪烁。系统启用“减少动态效果”时取消渐变。
- `assets/research/`：论文官网的原始展示图，已下载到本地。
- `assets/team/`：组织公开成员的 GitHub 头像。

新增论文时复制一个 `publication`，更新标题、作者、图片与 Project / Paper / Code 链接；首页动态和 Research 页面分别维护。新增成员时在 `team.html` 复制一个 `member`。

## 内容来源

- 组织、负责人、公开成员与邮箱：https://github.com/cvrs-yx801
- ApDepth：https://haruko386.github.io/research/
- ApDepth-G：https://haruko386.github.io/ApDepth-G/
- 视觉参考：https://www.humanplus.xyz/ 及用户提供的完整主页截图。参考网站访问时返回错误，当前依据截图采用窄版居中正文、居中标题、实验室介绍和左图右文研究列表，未复制该站代码或品牌素材。

Logo 使用用户提供的原始素材，通过 CSS 适配深色背景；原始文件未修改。成员使用公开昵称，未推测其真实姓名、职称或学历。ApDepth 未标注未经确认的录用会议/期刊。

## 兼容性

面向现代 Chrome / Edge / Firefox / Safari，适配手机、平板和桌面。支持键盘操作、跳转正文、减少动态效果偏好。JavaScript 禁用时内容和链接仍可访问；存储不可用时主题切换仍在当前页面生效，但无法跨刷新记忆。

当前环境的内置浏览器不可用，尚未完成真实浏览器中的视觉验收。
