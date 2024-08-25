module.exports = (req, res) => {
  const TEAM = [
    {
      name: 'Akın',
      title: res.__('Strategy'),
      description: res.__('A white-paperworm, the Sun-Tzu of blockchain investing, Akın, the patron of reports and presentations, is a very talented crypto "mentat".')
    },
    {
      name: 'Mustafa',
      title: res.__('Sales & DevOps'),
      description: res.__('Mustafa, a "big brother" who builds the team\'s common experience and culture, a talented salesperson, and an excellent DevOps player, is better known as "mechul".He is the "hacıcavcav" of the Turkish Blockchain Ecosystem, and is its humble bracer.')
    },
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
      name: 'Hatun',
      title: res.__('Developer'),
      description: res.__('Hatun, the former doyen designer of the ecosystem, the newly sought-after developer, and a strong and persistent character participates in developing open-source and decentralized 101 products.')
    },
    {
      name: 'Yakup',
      title: res.__('Developer & DevOps'),
      description: res.__('Economist, social media, DevOps and software developer; Yakup can play any role like a Metamorphmagus. As someone who constantly produces and works, he always sets an example and supports the family.')
    },
    {
      name: 'Aleyna',
      title: res.__('Art Director'),
      description: res.__('An artist far from industrialism and mediocrity, a designer who constantly produces diligently, she is the hardest working member of the team and its muse.')
    },
    {
      name: 'Necip',
      title: res.__('Lead-Developer'),
      description: res.__('Leader and peer educator of the developer team, sophisticated yet humble and friendly, the man loved by everyone in the ecosystem, the technical owner of 101 products and vision.')
    },
    {
      name: 'Kaleab',
      title: res.__('Developer'),
      description: res.__('Kaleab, an athlete, smart, agile, and Tubitak member, is busy developing open-source 101 products. He cannot resist his favorite food, "Kofte," even though he is the sports minister of node101.')
    },
    {
      name: 'Ömer',
      title: res.__('Marketing'),
      description: res.__('Drawing attention with his human relations and sense of humor, Ömer is the required man for node101 marketing processes. Ömer, who introduced the ideals and values of 101 to the world, is the indispensable name of morning meetings.')
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
