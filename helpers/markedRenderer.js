'use strict';

module.exports = {
  markedRenderer: {
    code: function(code, lang) {
      let escaped;

      if (code.match(/^sequenceDiagram/) || code.match(/^graph/) || code.match(/^gantt/)) {
        return `<div class="mermaid">\n${code}\n</div>\n`;
      }

      if (this.options.highlight) {
        const out = this.options.highlight(code, lang);
        if (out !== null && out !== code) {
          escaped = true;
          code = out;
        }
      }
      const languageClass = lang ? (this.options.langPrefix + _escape(lang, true)) : '';

      return `<pre><code class="${languageClass}">${escaped ? code : _escape(code, true)}\n</code></pre>\n`;
    }
  }
};

function _escape(html, encode) {
  const pattern = !encode ? /&(?!#?\w+;)/g : /&/g;
  return html
        .replace(pattern, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
