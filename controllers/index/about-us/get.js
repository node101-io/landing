module.exports = (req, res) => {
  const TEAM = [
    {
      name: 'Akın',
      title: 'Title'
    },
    {
      name: 'Mustafa',
      title: 'Title'
    },
    {
      name: 'Yunus',
      title: 'Title'
    },
    {
      name: 'Mete',
      title: 'Title'
    },
    {
      name: 'Hatun',
      title: 'Title'
    },
    {
      name: 'Yakup',
      title: 'Title'
    },
    {
      name: 'Aleyna',
      title: 'Title'
    },
    {
      name: 'Necip',
      title: 'Title'
    },
    {
      name: 'Kaleab',
      title: 'Title'
    },
    {
      name: 'Ömer',
      title: 'Title'
    }
  ];
  return res.render('about-us/index', {
    page: 'about-us/index',
    title: 'About Us',
    includes: {
      external: {
        css: ['general', 'header', 'page'],
        js: ['header', 'page', 'serverRequest']
      }
    },
    team: TEAM
  });
};