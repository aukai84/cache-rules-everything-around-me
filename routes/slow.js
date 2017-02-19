
const express = require('express');

const sleep = require('../services/sleep');

const redis = require('redis');
const client = redis.createClient();

const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    return sleep(5000)
      .then(_ => res.render('api/index', (err, html) => {
        res.send(html);
      }));
  });

module.exports = router;
