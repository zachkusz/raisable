var express = require('express');
var router = express.Router();
var Campaign = require('../models/campaign');
var Donor = require('../models/donortierschema');
var path = require('path');

router.get('/all', function (req, res) {
  Campaign.find({}, function (err, campaigns) {

    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(campaigns);
  });
});

router.get('/landing/:id', function (req,res) {
  var id = req.params.id;
  Campaign.find({campaignId: id}, function (err, campaign) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(campaign);
  });
});

router.get('/:id', function (req, res) {

  res.sendFile(path.join(__dirname, '../public/views/landing.html'));

});

//adding / PUT new sponsor into database
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var newSponsor = req.body;
  console.log(newSponsor);

  //first, find correct campaign in order to add a sponsor
  Campaign.findById(id, function (err, campaign) {
    console.log('FOUND CORRECT CAMPAIGN', campaign);
    if (err) {
      res.json({message: "cannot find correct campaign"});
      return;
    }
    //adjust campaign raised amount by adding new sponsor amount to total
    campaign.raised += newSponsor.donation;

    //adjust the donor count
    campaign.donorCount += 1;

    var donorTiers = campaign.donorLevels;
    var donation = newSponsor.donation;
    var target = [];
    
    //looping through each object/sponsor tier in donorLevels to compare donation amount to that tier's low/high values
    //to determine which tier to add the new sponsor to.
    //Once found, sponsor object is pushed into sponsors array
    donorTiers.forEach(function (tier, index) {
      if (donation >= tier.low && donation <= tier.high) {
        campaign.donorLevels[index].sponsors.push(newSponsor);
      }
    });

    campaign.save(function (err) {
        if (err) {
          console.log('err', err);
          res.send(err);
          return;
        }
        res.sendStatus(204);

    });

  });
});

module.exports = router;
