const PORTFOLIO = [
  {
    _id: 'cosmos-hub',
    name: 'Cosmos Hub',
    apr: '14.39'
  },
  {
    _id: 'celestia',
    name: 'Celestia',
    apr: '11.29'
  },
  {
    _id: 'band',
    name: 'Band',
    apr: '11.96'
  },
  {
    _id: 'neutron',
    name: 'Neutron',
    apr: '0.00'
  },
  {
    _id: 'stride',
    name: 'Stride',
    apr: '3.26'
  },
  {
    _id: 'orai-chain',
    name: 'Orai Chain',
    apr: '17.78'
  },
  {
    _id: 'fxcore',
    name: 'f(x)Core',
    apr: '14.28'
  },
  {
    _id: 'canto',
    name: 'Canto',
    apr: '5.30'
  },
  {
    _id: 'shentu',
    name: 'Shentu',
    apr: '24.18'
  },
  {
    _id: 'agoric',
    name: 'Agoric',
    apr: '9.59'
  },
  {
    _id: 'iris-net',
    name: 'Iris Network',
    apr: '10.24'
  },
  {
    _id: 'cheqd',
    name: 'Cheqd',
    apr: '5.05'
  },
  {
    _id: 'pica',
    name: 'Pica',
    apr: '2.66'
  },
  {
    _id: 'kyve',
    name: 'Kyve',
    apr: '21.48'
  },
  {
    _id: 'ux',
    name: 'UX',
    apr: '13.31'
  },
  {
    _id: 'ki-chain',
    name: 'Ki Chain',
    apr: '6.59'
  },
  {
    _id: 'asset-mantle',
    name: 'Asset Mantle',
    apr: '59.13'
  },
  {
    _id: 'desmos',
    name: 'Desmos',
    apr: '5.58'
  },
  {
    _id: 'e-money',
    name: 'e-Money',
    apr: '33.13'
  },
  {
    _id: 'crescent',
    name: 'Crescent',
    apr: '8.79'
  }
];
const EVENTS = [
  {
    _id: 'cryptist',
    name: 'Cryptist',
    logo: '/img/events/cryptist/logo.png',
    link: 'https://cryptist.org/'
  },
  {
    _id: 'cosmosphere',
    name: 'Cosmosphere',
    logo: '/img/events/cosmosphere/logo.png',
    link: 'https://cosmosphere.dev/'
  },
  {
    _id: 'moda-palas',
    name: 'Moda Palas',
    logo: '/img/events/moda-palas/logo.png',
    link: 'https://events.node101.io/moda-palas'
  },
  {
    _id: 'aleo-tour',
    name: 'Aleo Tour',
    logo: '/img/events/aleo-tour/logo.png',
    link: 'https://events.node101.io/aleo-tour-of-turkiye'
  },
  {
    _id: 'sui-move-workshops',
    name: 'Sui Move Workshops',
    logo: '/img/events/sui-move-workshops/logo.png',
    link: 'https://events.node101.io/sui-move-workshop'
  },
  {
    _id: 'nym-gathering',
    name: 'Nym Gathering',
    logo: '/img/events/nym-gathering/logo.png',
    link: 'https://events.node101.io/nym-community-gathering'
  }
];

module.exports = (req, res) => {
  const SERVICES = [
    {
      title: [res.__('100%'), res.__('Uptime Guarantee')],
      description: [{
        type: 'text',
        content: res.__('We have 100% uptime guarantee in your stakes. You are compensated for any loss that originated from our actions. We are very confident that we will never miss a block, but isn’t it reassuring to know that it’s impossible to lose with node101?')
      }]
    },
    {
      title: [res.__('Auto'), res.__('Restaking')],
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

  const CONTRIBUTIONS = [
    {
      _id: 'open-source',
      title: 'Open Source',
      color: 'green'
    },
    {
      _id: 'relayers',
      title: 'Relayers',
      color: 'green'
    },
    {
      _id: 'articles',
      title: 'Articles',
      color: 'green'
    },
    {
      _id: 'videos',
      title: 'Videos',
      color: 'green'
    },
    {
      _id: 'podcasts',
      title: 'Podcasts',
      color: 'green'
    },
    {
      _id: '101-telegram',
      title: '101 Telegram',
      color: 'green'
    },
    {
      _id: '101-x',
      title: '101 X',
      color: 'green'
    },
    {
      _id: 'bot101',
      title: 'bot101',
      color: 'green'
    },
    {
      _id: 'klein',
      title: 'Klein',
      color: 'green'
    },
    {
      _id: 'rpcs',
      title: 'RPCs',
      color: 'green'
    },
    {
      _id: 'validator',
      title: 'Validator',
      color: 'green'
    }
  ];

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
    contributions: CONTRIBUTIONS.concat(CONTRIBUTIONS),
    frequently_asked_questions: []
  });
};