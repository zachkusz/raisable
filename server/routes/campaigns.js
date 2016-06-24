var express = require('express');
var router = express.Router();
var Campaign = require('../models/campaign');

//returns all the campaigns in the DB
router.get('/', function (req, res) {
  Campaign.find({}, function (err, campaigns) {

    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(campaigns);
  });
});

module.exports = router;
