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
const SERVICES = [
  {
    title: '100% Uptime Guarantee',
    description: 'node101 has a 100% uptime guarantee in your stakes. You are compensated for any loss that originated from our actions. We are very confident that we will never miss a block, but isn’t it very reassuring to know that it is impossible to lose with node101?'
  },
  {
    title: 'Auto Restaking',
    description: 'By using the trustless auto restake tool we provide, you can maximize your gain with compound reward mechanisms. We restake the tokens you receive periodically and help you make most of your regular income.'
  },
  {
    title: '0 Fee Auto Stake',
    description: 'When you choose to auto restake with node101, you do not need to worry about the additional transaction fees coming from restaking orders. We take care of them for you. Why? Because you deserve the best.'
  },
  {
    title: 'Notification Services',
    description: 'Just stake your coins and forget about them… Not always a good idea, right? With the node101 newsletter, you can get the latest news about the chains you chose weekly. You can even add your public keys to track your gain! Wouldn’t it be nice to read about your investments sunday morning with a cup of coffee?'
  },
  {
    title: 'One Click Staking',
    description: 'Hundreds of chains, tens of wallets, and a lot to learn just to stake in a single chain… node101 provides you the option to stake in all chains we validate in only with a click. Just hit the “stake with us” button, stake now.'
  },
  {
    title: '7/24 Support',
    description: 'We do not see blockchain as just about a technology, but about people itself. Our support team is always there to help you, in any way you need with your blockchain questions. Just reach out at hello@node101.io. We are waiting to hear from you.'
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