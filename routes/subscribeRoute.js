const express = require('express');

const router = express.Router();

const subscribePostController = require('../controllers/subscribe/post');

router.post(
  '/',
    subscribePostController
);

module.exports = router;