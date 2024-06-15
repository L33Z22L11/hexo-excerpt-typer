# hexo-excerpt-typer

使用打字机动画在文章开头显示摘要。

## 使用方法

### 安装

```bash
npm i hexo-excerpt-typer
```

### 配置

无需配置即可很好工作。你也可以在 `_config.yml` 中添加以下配置：

```yaml
excerpt:
  enable: true # 是否启用，默认为 true
  title: '纸鹿导读' # 标题，默认为 '作者名+导读'
  caret: '_' # 打字动画光标，默认为 '⬤'
  cps: 20 # 每秒打字速度，默认为 20
```

### 给文章添加摘要

插件会读取文章 front-matter 中的 `summary`、`description`、`excerpt` 字段，如果存在则使用它作为摘要。

如果要禁用某篇文章的摘要，可以在 front-matter 中添加 `noexcerpt: true`。
