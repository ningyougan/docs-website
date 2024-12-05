import { full as emoji } from 'markdown-it-emoji';
import markdownit from 'markdown-it';
import ins from 'markdown-it-ins';
import mark from 'markdown-it-mark';
import abbr from 'markdown-it-abbr';
import container from 'markdown-it-container';
import deflist from 'markdown-it-deflist';
import footnote from 'markdown-it-footnote';
import hljs from 'highlight.js'; // https://highlightjs.org
// 引入默认样式
// import 'highlight.js/scss/default.scss';
// 引入个性化的vs2015样式
import './styles/night-owl.min.css';
// tables 未渲染

// Actual default values
export const markdownIt = markdownit({
  html: false,
  xhtmlOut: false,
  breaks: false,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  _highlight: true,
  _strict: false,
  _view: 'html', // html / src / debug
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          `<pre><code class="hljs">` +
          `${lang}` +
          '<br/>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>'
        );
      } catch (__) {}
    }

    return (
      '<pre><code class="hljs">' +
      markdownIt.utils.escapeHtml(str) +
      '</code></pre>'
    );
  },
})
  .use(emoji)
  .use(mark)
  .use(abbr)
  .use(container, 'warning')
  .use(deflist)
  .use(footnote)
  .use(ins);
