
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
    'index.csr.html': {size: 13661, hash: '87349fb51bacc1ae0c71a31e1fd415a4e655ac64f1bda311be1a640bf91fd457', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1206, hash: '5a59d884590b7f813d1f7e89c515e4679ca8883420a8ce59aaed2a6760fe14a1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 54326, hash: '22755fff3a0a13b92e63d5879e0f924441b9d253c519a79925fa2492d1257859', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59919, hash: 'ff1d7ceed35a7946e434e6e4b248d4d3d089721d71b5248bce078fa6f228b974', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 52657, hash: '51f68e195035b2df0178048abdd72c26978937e632db0e569b5bac4896666208', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-NCGDYCRK.css': {size: 235935, hash: '7LZFgbQYwnk', text: () => import('./assets-chunks/styles-NCGDYCRK_css.mjs').then(m => m.default)}
  },
};
