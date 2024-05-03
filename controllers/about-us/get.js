const TEAM = [
  {
    name: 'Akın',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque, aut molestias saepe ipsum numquam modi corporis ad repellat soluta.'
  },
  {
    name: 'Mustafa',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque, aut molestias saepe ipsum numquam modi corporis ad repellat soluta.'
  },
  {
    name: 'Yunus',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque, aut molestias saepe ipsum numquam modi corporis ad repellat soluta.'
  },
  {
    name: 'Mete',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque, aut molestias saepe ipsum numquam modi corporis ad repellat soluta.'
  },
  {
    name: 'Hatun',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque, aut molestias saepe ipsum numquam modi corporis ad repellat soluta.'
  },
  {
    name: 'Yakup',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque, aut molestias saepe ipsum numquam modi corporis ad repellat soluta.'
  },
  {
    name: 'Aleyna',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque, aut molestias saepe ipsum numquam modi corporis ad repellat soluta.'
  },
  {
    name: 'Necip',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque, aut molestias saepe ipsum numquam modi corporis ad repellat soluta.'
  },
  {
    name: 'Kaleab',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque, aut molestias saepe ipsum numquam modi corporis ad repellat soluta.'
  },
  {
    name: 'Ömer',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque, aut molestias saepe ipsum numquam modi corporis ad repellat soluta.'
  }
];

module.exports = (req, res) => {
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