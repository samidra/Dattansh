
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
    "route": "/Dattansh/service/public-opinion-survey"
  },
  {
    "renderMode": 2,
    "route": "/Dattansh/service/political-research"
  },
  {
    "renderMode": 2,
    "route": "/Dattansh/service/election-campaign-management"
  },
  {
    "renderMode": 2,
    "route": "/Dattansh/service/seat-wise-survey"
  },
  {
    "renderMode": 2,
    "route": "/Dattansh/service/social-media-campaign"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Dattansh",
    "route": "/Dattansh/**"
  }
],
  assets: {
    'index.csr.html': {size: 13661, hash: '2d97a5b804957f5b15122fedb497c52c90dbf26436d2eb819aad6c413e9d372d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1206, hash: '74a439ccbf532283d610740fc6956c18d73be41474d50b4772983b8512bcbb50', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58918, hash: '5c65fc57e5bae5625515f97cae0691bf611b61375ed0faf199d7fcc3c369dbf5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 54070, hash: 'e624331be9196b3d4accad7a68a3398a833dc0ef1ed6837d18fee35f1dd467a7', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 50124, hash: '26cf961da7aa3b3e972e3d803a4008e31740066dedb757642f6e1da75f0bf34c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'service/political-research/index.html': {size: 36385, hash: '792beb6e256a0d7d5d91de86bbee093490c97a10732f4e10692d809cc0e1e909', text: () => import('./assets-chunks/service_political-research_index_html.mjs').then(m => m.default)},
    'service/public-opinion-survey/index.html': {size: 36394, hash: '3fdb3f6cb004f180d85e59ccf1779a46d0bdee47e9da66162683e09bfb0d5f7f', text: () => import('./assets-chunks/service_public-opinion-survey_index_html.mjs').then(m => m.default)},
    'service/social-media-campaign/index.html': {size: 36393, hash: '20a4f898cf9f1bdec007ff880c786a05c4477b375ae2091c0726485cc42a16e1', text: () => import('./assets-chunks/service_social-media-campaign_index_html.mjs').then(m => m.default)},
    'service/election-campaign-management/index.html': {size: 36414, hash: '051091a2ce9051ae714eb4874a77576844d664f4a2b6c228e68d0ddb63a5faeb', text: () => import('./assets-chunks/service_election-campaign-management_index_html.mjs').then(m => m.default)},
    'service/seat-wise-survey/index.html': {size: 36379, hash: '78ed9b6151a790a1965dc1683fe717143d5a190064ae3a6c1fbffd82920096e6', text: () => import('./assets-chunks/service_seat-wise-survey_index_html.mjs').then(m => m.default)},
    'styles-NCGDYCRK.css': {size: 235935, hash: '7LZFgbQYwnk', text: () => import('./assets-chunks/styles-NCGDYCRK_css.mjs').then(m => m.default)}
  },
};
