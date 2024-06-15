/** 
 * @author 纸鹿本鹿 <hi@zhilu.cyou>
 * @license MIT
 */

'use strict';

const typer = require('./lib/typer');

const defaultExcerptTitle = hexo.config?.language === 'zh-CN'
  ? `${hexo.config?.author || ''}摘要`
  : `${hexo.config?.author || ''} Excerpt`;

const parseExcerpt = (data) => {
  const summary = data?.summary || data?.description || data?.excerpt || '';
  if (!data?.noexcerpt && summary.match(/\S/)) {
    const summaryContent = `
    <style>#summary-content.typing::after { content: '${hexo.config?.excerpt?.caret || '⬤'}'; }</style>
    <figure class="highlight" id="summary">
      <figcaption><span>${hexo.config?.excerpt?.title || defaultExcerptTitle}</span></figcaption>
      <p id="summary-content" style="margin: 0; padding: .5em 1em; font-size: .9em;"></p>
    </figure>
    <script type="module">
      (
        ${typer.toString()}
      )({
        text: '${summary}',
        eleSelector: '#summary-content',
        cps: ${hexo.config?.excerpt?.cps || 20},
        })
    </script>
    `;
    data.content = summaryContent + data.content;
  }
  return data;
}

if (hexo.config?.excerpt?.enable !== false) {
  hexo.extend.filter.register('after_post_render', parseExcerpt);
}