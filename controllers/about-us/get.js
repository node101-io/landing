module.exports = (req, res) => {
  const TEAM = [
    {
      name: 'Yunus',
      title: res.__('Leader'),
      description: res.__('As the "marshal" of node101, he coordinates many operations, especially development. With his energy and high technical skills, he is a playmaker who impresses and adds value to everyone he talks to. He is both a Parisian and an Istanbulite.')
    },
    {
      name: 'Mete',
      title: res.__('Product & Events'),
      description: res.__('He organizes legendary non-profit events, is responsible for the open source 101 products, and is interested in decentralized human development theses. He is also from Troy and loves geography and history.')
    },
    {
      name: 'Aleyna',
      title: res.__('Art Director'),
      description: res.__('An artist far from industrialism and mediocrity, a designer who constantly produces diligently, she is the hardest working member of the team and its muse.')
    },
    {
      name: 'Yakup',
      title: res.__('Developer & DevOps'),
      description: res.__('Economist, social media, DevOps and software developer; Yakup can play any role like a Metamorphmagus. As someone who constantly produces and works, he always sets an example and supports the family.')
    },
    {
      name: 'Necip',
      title: res.__('Lead Developer'),
      description: res.__('Leader and peer educator of the developer team, sophisticated yet humble and friendly, the man loved by everyone in the ecosystem, the technical owner of 101 products and vision.')
    },
    {
      name: 'Ömer',
      title: res.__('Marketing'),
      description: res.__('Drawing attention with his human relations and sense of humor, Ömer is the required man for node101 marketing processes. Ömer, who introduced the ideals and values of 101 to the world, is the indispensable name of morning meetings.')
    },
    {
      name: 'Ahmet',
      title: res.__('DevOps'),
      description: res.__('Ahmet, the wealthiest member of the team, derives his fortune from his heart; in fact, we suspect that he might hold half of our total staked assets because we thought he was secretly trading. You know what, since he is also involved in overseeing our node operations, I don\'t feel suspicious anymore, just joking ahah! More importantly, Recep Bey is an engineer and the most gentlemanly and charismatic member of the Yıldız Technical University gang in the company.')
    },
    {
      name: 'Miray',
      title: res.__('Designer'),
      description: res.__('Our junior designer, Miralay Miray, who is quite a sleepyhead, has forced us to schedule our daily meetings at 11 AM. She claims this is because she stays up late working on designs. Fighting on every design front—from UI/UX to presentations, from social media visuals to brand design—Miralay holds a crucial position in our talent pool\'s battlefield.')
    }
  ];

  return res.render('about-us/index', {
    page: 'about-us/index',
    title: 'About Us',
    includes: {
      external: {
        css: ['general', 'header', 'page'],
        js: ['header']
      }
    },
    team: TEAM
  });
};
