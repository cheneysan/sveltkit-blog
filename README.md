# SvelteKit test blog

This is a little personal test project for seeing what SvelteKit offers over home of the other alternatives.

The project is a simple blog - which uses Markdown as the blog post format, .md files are loaded from the `./posts` 
directory and converted to XML using mdsvex and shiki (for code highlighting)

Other new (for me at least) things I'm using in this mini-project:
* `open-props` - I wanted to see how this compares to Tailwind CSS
* `lucide-svelte` - icons, as an alternative to Box fonts
* `fontsource` - importing fonts in code rather than linking to Google Web Fonts
* `mdsvex` - a preprocessor that takes Markdown and spits out HTML
* `shiki` - add code snippet highlighting to `mdsvex`

The rest is my usual stack:
* `typescript` - always better than Javascript for production code
* `eslint` - defacto code linting
* `prettier` - defacto code formatting
* `vite` - my favorite project tooling for web

## Building
I'm using `pnpm` for dependency management:
1. Clone the project
2. Run `pnpm install` from the root directory to install packages
3. Run `pnpm run dev` to start the dev server on localhost
4. Open `http://localhost:5173` to see the blog