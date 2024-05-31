const express = require('express');

const router = express.Router();

const indexGetController = require('../controllers/index/get');
const stakeGetController = require('../controllers/stake/get');
const aboutUsGetController = require('../controllers/about-us/get');

router.get(
  '/',
    indexGetController
);
router.get(
  '/stake',
    stakeGetController
);
router.get(
  '/about-us',
    aboutUsGetController
);

module.exports = router;