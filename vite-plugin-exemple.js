import { marked } from 'marked'

export default function mdToHtml() {
  return {
    name: 'vite-plugin-md-html',
    
    transform(src, id) {
      if (id.endsWith('.md')) {
        const html = marked(src)
        return `export default ${JSON.stringify(html)}`;
      }
    }
  }
}