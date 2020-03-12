// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("./../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-blog-list-js": () => import("./../src/templates/blog-list.js" /* webpackChunkName: "component---src-templates-blog-list-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-search-js": () => import("./../src/pages/search.js" /* webpackChunkName: "component---src-pages-search-js" */)
}

