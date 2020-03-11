const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/valter/Documentos/CursoJs/React/mybot-blog/src/templates/blog-post.js"))),
  "component---src-templates-blog-list-js": hot(preferDefault(require("/home/valter/Documentos/CursoJs/React/mybot-blog/src/templates/blog-list.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/valter/Documentos/CursoJs/React/mybot-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/valter/Documentos/CursoJs/React/mybot-blog/src/pages/404.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("/home/valter/Documentos/CursoJs/React/mybot-blog/src/pages/search.js")))
}

