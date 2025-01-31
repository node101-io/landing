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
      name: 'Hatun',
      title: res.__('Developer'),
      description: res.__('Hatun, the former doyen designer of the ecosystem, the newly sought-after developer, and a strong and persistent character participates in developing open-source and decentralized 101 products.')
    },
    {
      name: 'Ömer',
      title: res.__('Marketing'),
      description: res.__('Drawing attention with his human relations and sense of humor, Ömer is the required man for node101 marketing processes. Ömer, who introduced the ideals and values of 101 to the world, is the indispensable name of morning meetings.')
    },
    {
      name: 'Kaleab',
      title: res.__('Developer'),
      description: res.__('Kaleab, an athlete, smart, agile, and Tubitak member, is busy developing open-source 101 products. He cannot resist his favorite food, "Kofte," even though he is the sports minister of node101.')
    },
    {
      name: 'Ahmet',
      title: res.__('DevOps'),
      description: res.__('Ahmet, the wealthiest member of the team, derives his fortune from his heart; in fact, we suspect that he might hold half of our total staked assets because we thought he was secretly trading. You know what, since he is also involved in overseeing our node operations, I don\'t feel suspicious anymore, just joking ahah! More importantly, Recep Bey is an engineer and the most gentlemanly and charismatic member of the Yıldız Technical University gang in the company.')
    },
    {
      name: 'Atahan',
      title: res.__('Developer'),
      description: res.__('You can immediately recognize Atahan in the office with his lake-green Apple over-the-head headphones. He is a doer leader who shapes and directs the Blockchain Club. His only fault is supporting a Beyoğlu team instead of supporting Konyaspor, even though he is from Konya...')
    },
    {
      name: 'Kadircan',
      title: res.__('Developer'),
      description: res.__('A comedian with highly skilled jokes that require an IQ of at least 120 to be fully appreciated. The most technical member of the team with a rare mind hidden under his joker identity and bonus hair to solve the impossible with a keyboard... 006 Ankara Kadircan... AKA Düldül Osman serves as a secret blockchain agent in daylight.')
    },
    {
      name: 'Ahmed',
      title: res.__('Developer'),
      description: res.__('Ahmed creates amazing things with the products he codes, showcasing his unwavering dedication. He is like a rare Socotra dragon tree, valuable and unique. As an esteemed member of the team, he is a respected gentleman, known for his coin collection, intellectual personality, interesting friendships, and aesthetic outlook. Ahlan wa sahlan!')
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
