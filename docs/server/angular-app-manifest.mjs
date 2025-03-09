
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
    "route": "/Dattansh/service/socio-economic-research"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Dattansh",
    "route": "/Dattansh/**"
  }
],
  assets: {
    'index.csr.html': {size: 13671, hash: 'cb987d6302b4a5ea34a3770e946a2f013bea6ae7a9fe8114d52aa5c3b5e3cf37', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1206, hash: '6290c0454c7526e1558f64d84358fc8649b52154364730c0568f97049b2d3459', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57121, hash: '8734aedf746a8e357a838bf0eaeef3c348bbc35a0fed54c4365913ca6da13d02', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'service/public-opinion-survey/index.html': {size: 43992, hash: '45346a8a9263b9f0188e824c714ac62d4f00118cd753078e7d3f59d2e6880334', text: () => import('./assets-chunks/service_public-opinion-survey_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 51655, hash: '5ea4884e555cf8cc40dd0af3d8ffbc5fa2e2299c3209cb779e05eff5f0c8be63', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'service/political-research/index.html': {size: 44001, hash: 'd2454e50cee76a0b0a8a7f571458971ede9ba96bb8ce0a57b6a47f91c052a840', text: () => import('./assets-chunks/service_political-research_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 50315, hash: 'd55504c4a4c3f9c06b87b2d44fa18fb16acfe4ef58c2baadc07924e65b655484', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'service/seat-wise-survey/index.html': {size: 43977, hash: '25f8a8b7a1a9be4f2c3b6fe10d513a3edc07474c1b33383f840d7595cc1de350', text: () => import('./assets-chunks/service_seat-wise-survey_index_html.mjs').then(m => m.default)},
    'service/socio-economic-research/index.html': {size: 44386, hash: 'e67dc1c3bd9505484eb256bc9530d9d152ae32b1ee1cf415e7b5053e36fcf08b', text: () => import('./assets-chunks/service_socio-economic-research_index_html.mjs').then(m => m.default)},
    'service/election-campaign-management/index.html': {size: 44008, hash: 'a7460acd9661bd07bf22827a197945815260979017d87f08eeb0664f6704e99d', text: () => import('./assets-chunks/service_election-campaign-management_index_html.mjs').then(m => m.default)},
    'service/social-media-campaign/index.html': {size: 43992, hash: 'a31ca3521afb3089d50b6bf14feea1daf7468e18adb6058282ae6352770ccf1b', text: () => import('./assets-chunks/service_social-media-campaign_index_html.mjs').then(m => m.default)},
    'styles-2GHZXCS2.css': {size: 239674, hash: 'sOItVzUlAPo', text: () => import('./assets-chunks/styles-2GHZXCS2_css.mjs').then(m => m.default)}
  },
};
