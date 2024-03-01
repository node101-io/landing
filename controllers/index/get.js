const PORTFOLIO = [
  {
    _id: 'asset-mantle',
    name: 'Asset Mantle'
  },
  {
    _id: 'band-protocol',
    name: 'Band Protocol'
  },
  {
    _id: 'canto',
    name: 'Canto'
  },
  {
    _id: 'cheqd',
    name: 'Cheqd'
  },
  {
    _id: 'cosmos-hub',
    name: 'Cosmos Hub'
  },
  {
    _id: 'crescent',
    name: 'Crescent'
  },
  {
    _id: 'desmos',
    name: 'Desmos'
  },
  {
    _id: 'e-money',
    name: 'E-Money'
  },
  {
    _id: 'iris-net',
    name: 'Iris Network'
  },
  {
    _id: 'ki-chain',
    name: 'Ki Chain'
  },
  {
    _id: 'nym',
    name: 'NYM Mixnode'
  },
  {
    _id: 'orai-chain',
    name: 'Orai Chain'
  },
  {
    _id: 'shentu',
    name: 'Shentu'
  },
  {
    _id: 'umee',
    name: 'UMEE'
  }
];

module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('For you to make most of the distributed value'),
    includes: {
      external: {
        css: ['general', 'header', 'page'],
        js: ['header', 'page', 'serverRequest']
      },
      meta: {
        title: res.__('For you to make most of the distributed value'),
        description: res.__('World is changing, and there are a lot of new values emerging with blockchain technology. Now, it is the time to _distribute_ the value. node101 is validating and distributing the value in more than 15 blockchains, all with different visions for their community. To discover and learn more how you can join the distributed ecosystem, reach out at hello@node101.io.'),
        image: '/res/images/open-graph/header.png',
        twitter: true
      }
    },
    portfolio: PORTFOLIO,
    services: [],
    events_title: '',
    events: [],
    contributions: [],
    frequently_asked_questions: []
  });
}