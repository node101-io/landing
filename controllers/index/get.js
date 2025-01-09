const PORTFOLIO = [
  {
    _id: 'cosmos',
    name: 'Cosmos Hub',
    apr: '15.12',
    link: 'https://wallet.keplr.app/chains/cosmos-hub?modal=validator&chain=cosmoshub-4&validator_address=cosmosvaloper1lrzxwu4dmy8030waevcpft7rpxjjz26cpzvumd'
  },
  {
    _id: 'celestia',
    name: 'Celestia',
    apr: '10.10',
    link: 'https://wallet.keplr.app/chains/celestia?modal=validator&chain=celestia&validator_address=celestiavaloper1lrzxwu4dmy8030waevcpft7rpxjjz26csrtqm4'
  },
  {
    _id: 'band',
    name: 'Band',
    apr: '13.28',
    link: 'https://ping.pub/band/staking/bandvaloper1l8zzhhe3ltlkk7sd38rcw7u6g9d609t2etc2zp'
  },
  {
    _id: 'shentu',
    name: 'Shentu',
    apr: '24.18',
    link: 'https://wallet.keplr.app/chains/shentu?modal=validator&chain=shentu-2.2&validator_address=shentuvaloper1lrzxwu4dmy8030waevcpft7rpxjjz26c3jv9w9'
  },
  {
    _id: 'agoric',
    name: 'Agoric',
    apr: '9.59',
    link: 'https://wallet.keplr.app/chains/agoric?modal=validator&chain=agoric-3&validator_address=agoricvaloper1k334nqagmmxajt32hdtxrpnsavz0njwa3mtcqc'
  },
  {
    _id: 'irisnet',
    name: 'Iris Network',
    apr: '10.24',
    link: 'https://wallet.keplr.app/chains/irisnet?modal=validator&chain=irishub-1&validator_address=iva1lrzxwu4dmy8030waevcpft7rpxjjz26cy9jhgg'
  },
  {
    _id: 'cheqd',
    name: 'Cheqd',
    apr: '5.05',
    link: 'https://cheqd.omniflix.co/stake'
  },
  {
    _id: 'pica',
    name: 'Pica',
    apr: '2.66',
    link: 'https://ping.pub/composable/staking/centaurivaloper1lrzxwu4dmy8030waevcpft7rpxjjz26c6mldw5'
  },
  {
    _id: 'kyve',
    name: 'Kyve',
    apr: '21.48',
    link: 'https://wallet.keplr.app/chains/kyve?modal=validator&chain=kyve-1&validator_address=kyvevaloper1lrzxwu4dmy8030waevcpft7rpxjjz26cpg4ljc'
  },
  {
    _id: 'ux',
    name: 'UX',
    apr: '13.31',
    link: 'https://ping.pub/umee/staking/umeevaloper12h8fpmg5qs570rmlem27km5xu4l2gv0lapuels'
  },
  {
    _id: 'ki-chain',
    name: 'Ki Chain',
    apr: '6.59',
    link: 'https://ping.pub/kichain/staking/kivaloper1lrzxwu4dmy8030waevcpft7rpxjjz26cpu8ms5'
  },
  {
    _id: 'assetmantle',
    name: 'Asset Mantle',
    apr: '59.13',
    link: 'https://wallet.assetmantle.one/stake'
  },
  {
    _id: 'desmos',
    name: 'Desmos',
    apr: '5.58',
    link: 'https://ping.pub/desmos/staking/desmosvaloper1y6j0ych2elrxsqmxg5z39svtdlnkcxql4wvclc'
  },
  {
    _id: 'lava',
    name: 'Lava',
    apr: '1.16',
    link: 'https://wallet.keplr.app/chains/lava?modal=staking&chain=lava-mainnet-1&validator_address=lava%40valoper1lrzxwu4dmy8030waevcpft7rpxjjz26cg85tzy&step_id=2'
  },
  {
    _id: 'nolus',
    name: 'Nolus',
    apr: '3.02',
    link: 'https://wallet.keplr.app/chains/nolus?modal=staking&chain=pirin-1&validator_address=nolusvaloper1lrzxwu4dmy8030waevcpft7rpxjjz26ctkankx&step_id=2'
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
      title: res.__('Open Source'),
      color: 'green'
    },
    {
      _id: 'relayers',
      title: res.__('Relayers'),
      color: 'green'
    },
    // {
    //   _id: 'articles',
    //   title: res.__('Articles'),
    //   color: 'green'
    // },
    {
      _id: 'videos',
      title: res.__('Videos'),
      color: 'green'
    },
    {
      _id: 'podcasts',
      title: res.__('Podcasts'),
      color: 'green'
    },
    {
      _id: '101-telegram',
      title: res.__('101 Telegram'),
      color: 'green'
    },
    // {
    //   _id: '101-x',
    //   title: res.__('101 X'),
    //   color: 'green'
    // },
    {
      _id: 'bot101',
      title: res.__('bot101'),
      color: 'green'
    },
    {
      _id: 'klein',
      title: res.__('Klein'),
      color: 'green'
    },
    {
      _id: 'rpcs',
      title: res.__('RPCs'),
      color: 'green'
    },
    {
      _id: 'validator',
      title: res.__('Validator'),
      color: 'green'
    }
  ];

  const EVENTS = [
    {
      _id: 'cryptist',
      name: res.__('Cryptist')
    },
    {
      _id: 'cosmosphere',
      name: res.__('Cosmosphere')
    },
    {
      _id: 'moda-palas',
      name: res.__('Moda Palas')
    },
    {
      _id: 'workshops',
      name: res.__('Workshops')
    },
    {
      _id: 'gatherings',
      name: res.__('Gatherings')
    },
    {
      _id: 'summits',
      name: res.__('Summits')
    },
    {
      _id: 'hacker-houses',
      name: res.__('Hacker-Houses')
    },
    {
      _id: 'parties',
      name: res.__('Parties')
    },
    {
      _id: 'hacker-tours',
      name: res.__('Hacker-Tours')
    }
  ];

  return res.render('index/index', {
    page: 'index/index',
    title: res.__('For you to make most of the distributed value'),
    includes: {
      external: {
        css: ['general', 'header', 'page', 'contributions', 'events'],
        js: ['header', 'page', 'serverRequest']
      },
      meta: {
        title: res.__('For you to make most of the distributed value'),
        description: res.__('World is changing, and there are a lot of new values emerging with blockchain technology. Now, it is the time to distribute the value. node101 is validating and distributing the value in more than 15 blockchains, all with different visions for their community. To discover and learn more how you can join the distributed ecosystem, reach out at hello@node101.io.'),
        image: '/img/meta/header.png',
        twitter: true
      }
    },
    portfolio: PORTFOLIO,
    services: SERVICES,
    events: EVENTS,
    contributions: CONTRIBUTIONS.concat(CONTRIBUTIONS),
    // frequently_asked_questions: []
  });
};
