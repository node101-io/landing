module.exports = (req, res) => {
  return res.render('stake/index', {
    page: 'stake/index',
    title: res.__('For you to make most of the distributed value'),
    includes: {
      external: {
        css: [],
        js: ['page']
      },
      meta: {
        title: res.__('For you to make most of the distributed value'),
        description: res.__('World is changing, and there are a lot of new values emerging with blockchain technology. Now, it is the time to distribute the value. node101 is validating and distributing the value in more than 15 blockchains, all with different visions for their community. To discover and learn more how you can join the distributed ecosystem, reach out at hello@node101.io.'),
        image: '/img/meta/header.png',
        twitter: true
      }
    }
  });
};