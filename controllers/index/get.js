module.exports = (req, res) => {
  const PORTFOLIO = [
    {
      _id: 'asset-mantle',
      name: 'Asset Mantle',
      apr: ''
    },
    {
      _id: 'band-protocol',
      name: 'Band Protocol',
      apr: ''
    },
    {
      _id: 'canto',
      name: 'Canto',
      apr: ''
    },
    {
      _id: 'cheqd',
      name: 'Cheqd',
      apr: ''
    },
    {
      _id: 'cosmos-hub',
      name: 'Cosmos Hub',
      apr: ''
    },
    {
      _id: 'crescent',
      name: 'Crescent',
      apr: ''
    },
    {
      _id: 'desmos',
      name: 'Desmos',
      apr: ''
    },
    {
      _id: 'e-money',
      name: 'E-Money',
      apr: ''
    },
    {
      _id: 'iris-net',
      name: 'Iris Network',
      apr: ''
    },
    {
      _id: 'ki-chain',
      name: 'Ki Chain',
      apr: ''
    },
    {
      _id: 'nym',
      name: 'NYM Mixnode',
      apr: ''
    },
    {
      _id: 'orai-chain',
      name: 'Orai Chain',
      apr: ''
    },
    {
      _id: 'shentu',
      name: 'Shentu',
      apr: ''
    },
    {
      _id: 'umee',
      name: 'UMEE',
      apr: ''
    }
  ];
  const SERVICES = [
    {
      title: [res.__('100%'), res.__('Uptime Guarantee')],
      description: [{
        type: 'text',
        content: res.__('We have 100% uptime guarantee in your stakes. You are compensated for any loss that originated from our actions. We are very confident that we will never miss a block, but isn’t it reassuring to know that it’s impossible to lose with node101?')
      }]
    },
    {
      title:[res.__('Auto'), res.__('Restaking')],
      description: [{
        type: 'text',
        content: res.__('By using the trustless auto restake tool we provide, you can maximize your gain with compound reward mechanisms. We restake the tokens you receive periodically and help you make most of your regular income.')
      }]
    },
    {
      title: [res.__('0 Fee'), res.__('Auto Stake')],
      description: [{
        type: 'text',
        content: res.__('When you choose to auto restake with node101, you do not need to worry about the additional transaction fees coming from restaking orders. We take care of them for you. Why? Because you deserve the best.')
      }]
    },
    {
      title: [res.__('Notification'), res.__('Services')],
      description: [{
        type: 'text',
        content: res.__('Just stake and forget about your coins… Not always a good idea, right? With node101 newsletter, you can get the latest news weekly. Wouldn’t it be nice to read about your investments sunday morning with a cup of coffee?')
      }]
    },
    {
      title: [res.__('One Click'), res.__('Staking')],
      description: [
        {
          type: 'text',
          content: res.__('Hundreds of chains, tens of wallets, and a lot to learn just to stake in a single chain… We maximize your staking experience with our interface, allowing you to stake with just a click. Just hit the “stake with us” button,'),
          spaceRight: true
        },
        {
          type: 'button',
          url: '/stake-with-node101',
          target: '_self',
          content: res.__('stake now')
        },
        {
          type: 'text',
          content: '.'
        }
      ]
    },
    {
      title: [res.__('7/24'), res.__('Support')],
      description: [
        {
          type: 'text',
          content: res.__('We do not see blockchain as just about a technology, but about people itself. Our team is always here to help, in any way you need with your blockchain questions. Just reach out at'),
          spaceRight: true
        },
        {
          type: 'link',
          url: 'mailto:hello@node101.io',
          target: '_blank',
          content: 'hello@node101.io'
        },
        {
          type: 'text',
          content: res.__('. We are waiting to hear from you.')
        }
      ]
    }
  ];
  const EVENTS = [
    {
      _id: 'cryptist',
      name: 'Cryptist',
      logo: '/img/events/cryptist/logo.png'
    }
  ]

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
    services: SERVICES,
    events: EVENTS,
    contributions: [],
    frequently_asked_questions: []
  });
}