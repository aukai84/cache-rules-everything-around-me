
const express = require('express');

const sleep = require('../services/sleep');

const redis = require('redis');
const client = redis.createClient();
const cache = require('express-redis-cache')({expire: 20});

const router = express.Router();

router.route('/')
  .get(cache.route('slow-cache'),(req, res, next) => {
    return sleep(5000)
      .then(_ => res.render('api/index', (err, html) => {
        res.send(html);
      }));
  });

module.exports = router;
