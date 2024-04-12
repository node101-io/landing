const express = require('express');

const router = express.Router();

const indexGetController = require('../controllers/index/get');
const aboutUsGetController = require('../controllers/index/about-us/get');

router.get(
  '/',
  indexGetController
);

router.get(
  '/about-us',
  aboutUsGetController
);

module.exports = router;
