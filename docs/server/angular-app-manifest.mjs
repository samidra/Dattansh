
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Dattansh/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Dattansh"
  },
  {
    "renderMode": 2,
    "route": "/Dattansh/about-us"
  },
  {
    "renderMode": 2,
    "route": "/Dattansh/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Dattansh",
    "route": "/Dattansh/**"
  }
],
  assets: {
    'index.csr.html': {size: 13661, hash: '61b479e0ba4c62353eb6041e8b9d24b4b714f35bd925566f98ebde669dc92907', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1206, hash: '37d46f8e2b0709260e4f805287a702f98b47891a804398e17cc5a373eeb81a30', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 52924, hash: '286f6676396910770fb15e4be712cf32441b13fe166e76b183b6ac1e48c9b7be', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 54464, hash: '4ae893ddb5b2b3941416f5330868bc0cb6e1c7cd25b5c1d944decc7d5fd496ff', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59767, hash: 'fd0b838bd83e3120bc7429243c57ef6fc0aaf5829167a496a979c4a873a0f6c0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NCGDYCRK.css': {size: 235935, hash: '7LZFgbQYwnk', text: () => import('./assets-chunks/styles-NCGDYCRK_css.mjs').then(m => m.default)}
  },
};
