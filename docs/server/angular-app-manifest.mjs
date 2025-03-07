
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
    'index.csr.html': {size: 13661, hash: 'd6f9cd7fa0de425835dd53749f364d5ed5e897ce1b6fd6f92ee0c50a2f22aa27', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1206, hash: '950e68807f32f118ba39783db12c1afebbb7578f283809ea3c9869da7db5995a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 54070, hash: '245109e81e31f8f56199c7c03a702e4de72b56e1315a0bcb348066d4881dca2d', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 50124, hash: '47761dc871d5b5f0ad1343550ca64f4b1ef2e9778c612b431f3f390f7aca6871', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'service/public-opinion-survey/index.html': {size: 36394, hash: '3f06a9f9307f71c26a572eee9d7d205452937c11d2a9184c37610ada6da3e581', text: () => import('./assets-chunks/service_public-opinion-survey_index_html.mjs').then(m => m.default)},
    'service/political-research/index.html': {size: 36385, hash: '289ab25b986ca196ea088cf2fbf43a071ebc290404c2d76e187c9160f171bb22', text: () => import('./assets-chunks/service_political-research_index_html.mjs').then(m => m.default)},
    'index.html': {size: 58976, hash: '3d4e02e0951d46fd247d5d1f7da4d787738073a56cacc9bd01a79c2ba6729bf7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'service/election-campaign-management/index.html': {size: 36414, hash: '8abc519c6a01afe905c869af5c79c306720eed406cb68815ce262b3ba82253b4', text: () => import('./assets-chunks/service_election-campaign-management_index_html.mjs').then(m => m.default)},
    'service/seat-wise-survey/index.html': {size: 36379, hash: '91f9d67fbc34b93008cd5360b4dd480cfc8b82339b5a511fde602a8e211a2096', text: () => import('./assets-chunks/service_seat-wise-survey_index_html.mjs').then(m => m.default)},
    'service/social-media-campaign/index.html': {size: 36393, hash: 'd95ed8d739a9899cba9b9545ea7a682d0c8f73d72596c264184d3770d8a96ddf', text: () => import('./assets-chunks/service_social-media-campaign_index_html.mjs').then(m => m.default)},
    'styles-NCGDYCRK.css': {size: 235935, hash: '7LZFgbQYwnk', text: () => import('./assets-chunks/styles-NCGDYCRK_css.mjs').then(m => m.default)}
  },
};
