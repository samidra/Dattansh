
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
    'index.csr.html': {size: 13661, hash: '9d3b6184a929cd0097fd02f0a9e03dd60447cb90877dfa13b196802016461f69', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1206, hash: 'c14d89fef6860e293576216d0a0ab3295633b39a335f9c9056209b69350a067d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58976, hash: '2d24107a31b754764058536c049b7c2d6c8a75ce189ea1d90d5518af4bfccaee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 54070, hash: 'c0d345fcc86caace8fd01352b44082ce9f2a703d80d315a5b4a3af89f1038792', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 50124, hash: '769068f1942732f8c3286a893a49e56190a2b958f5a9653527531423148f8858', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'service/election-campaign-management/index.html': {size: 36414, hash: '86dfb31800cda710ed1a9dc149fcd028934bb69867ae3e642f3739f66dd22f6a', text: () => import('./assets-chunks/service_election-campaign-management_index_html.mjs').then(m => m.default)},
    'service/political-research/index.html': {size: 36385, hash: '5d91a125d95b15e5612afd1325691a955fc9a430d663d55bf12d440785a19da1', text: () => import('./assets-chunks/service_political-research_index_html.mjs').then(m => m.default)},
    'service/public-opinion-survey/index.html': {size: 36394, hash: '9969f0067fe92bb377d5de2617a6076693cb0631727dc1f00a3fdd884e70eb1a', text: () => import('./assets-chunks/service_public-opinion-survey_index_html.mjs').then(m => m.default)},
    'service/social-media-campaign/index.html': {size: 36393, hash: '0b1e31589d28db276d3ad1e212eaebc890dbd3f01a14a1aff7ce0aad417d41a8', text: () => import('./assets-chunks/service_social-media-campaign_index_html.mjs').then(m => m.default)},
    'service/seat-wise-survey/index.html': {size: 36379, hash: 'a9a564e04eaf2aa78b0cc90a4fcd7f4b61b2795d2eff974985cdd9b6fa486f67', text: () => import('./assets-chunks/service_seat-wise-survey_index_html.mjs').then(m => m.default)},
    'styles-NCGDYCRK.css': {size: 235935, hash: '7LZFgbQYwnk', text: () => import('./assets-chunks/styles-NCGDYCRK_css.mjs').then(m => m.default)}
  },
};
