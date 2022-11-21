
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/diegopicazo/Documents/github/gu4re.github.io/_site/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/diegopicazo/Documents/github/gu4re.github.io/_site/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/diegopicazo/Documents/github/gu4re.github.io/_site/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/diegopicazo/Documents/github/gu4re.github.io/_site/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/Users/diegopicazo/Documents/github/gu4re.github.io/_site/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/diegopicazo/Documents/github/gu4re.github.io/_site/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/Users/diegopicazo/Documents/github/gu4re.github.io/_site/src/templates/using-dsg.js"))
}

