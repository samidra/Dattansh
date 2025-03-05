
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '//',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about-us"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 13653, hash: '25ac075e58e77a0c92ae5fe632347a8c3d1de86cc39e53167366c2d94d2a9ab5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1198, hash: '2fd87bea920961d50d7ce5fb7b827b6494f62ffd213c5aa5381df9a04db7e251', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 54303, hash: 'e46f201b2820b6506a1b1354d79f71307c353e1026bde834c73ec82cc420a092', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 52639, hash: '8913e6ea49f99c00e0b8e855611b8e4273186d8ed2c09546a3c428ea1ffd2275', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59896, hash: '85bc2e856106095d669e9efc58196b067a04af9657a7bc1b0d76199bd79963fb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NCGDYCRK.css': {size: 235935, hash: '7LZFgbQYwnk', text: () => import('./assets-chunks/styles-NCGDYCRK_css.mjs').then(m => m.default)}
  },
};
