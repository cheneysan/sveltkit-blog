import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

import {escapeSvelte, mdsvex} from 'mdsvex'
import shiki from 'shiki'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang = 'test') => {
      const highlighter = await shiki.getHighlighter({
        theme: 'poimandres'
      })
      const html = highlighter.codeToHtml(code, { lang })
      return `{@html \`${escapeSvelte(html)}\`}`
    }
  }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter()
  }
}

export default config
