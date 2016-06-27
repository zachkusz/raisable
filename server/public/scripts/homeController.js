clientApp.controller('HomeController', ['$scope', function($scope) {
  console.log('Home Controller!');

  $scope.campaign = {
    "url": "raisable.com/slp-booster-club/ad98398dad",
    "shortUrl": "raisable.com/CekJ3Cd",
    "featured": true,
    "title": "New Uniforms for the Spartans",
    "creatorName": "Spring Lake Park Football Booster Club",
    "creatorId": "507f191e810c19729de860ea",
    "zipCode": 55432,
    "categories": [
      "sports",
      "high school",
      "football"
    ],
    "imageLink": "http://student-fundraising-mockup.s3-website-us-west-2.amazonaws.com/team.jpg",
    "videoLink": "http://student-fundraising-mockup.s3-website-us-west-2.amazonaws.com/team.mp4",
    "about": "Help the Spartans raise money for senior uniforms. Each year the Spartan football team aims to provide all seniors with new uniforms that they can take with them to commemorate their time with the team",

    "items": [{
      "name": "Jersey",
      "price": 8000,
      "quantity": 34
    },
    {
      "name": "Helmet",
      "price": 7000,
      "quantity": 34
    }],

    "goal": 510000,
    "raised": 231200,
    "donorCount": 12,
    "launchDate": "2016-06-21T16:00:00Z",
    "deadlineDate": "2016-07-21T16:00:00Z",

    "faqs": [{
      "question": "When will the seniors recieve their uniforms?",
      "email": "curiousbacker1@gmail.com",
      "approved": true,
      "response": "If we reach our goal, we can have our uniforms delievered to the students in about 2 weeks."
    },
    {
      "question": "When will the seniors recieve their uniforms?",
      "email": "curiousbacker2@gmail.com",
      "approved": true,
      "response": "If we reach our goal, we can have our uniforms delievered to the students in about 2 weeks."
    }],

    "promoters": [{
      "name": "Andy M.",
      "refferalUrl": "andym",
      "clicks": [{
        "time": "2016-05-18T16:00:00Z",
        "ipAddress": "134.29.208.43",
        "donation": true
      }],
      "backerCount": 4,
      "donationAmmount": 3000
      },
      {
      "name": "Billy",
      "refferalUrl": "billy",
      "clicks": [{
        "time": "2016-05-18T16:00:00Z",
        "ipAddress": "134.29.208.43",
        "donation": true
      }],
      "backerCount": 4,
      "donationAmmount": 3000
      },
      {
      "name": "Jeb",
      "refferalUrl": "jeb",
      "clicks": [{
        "time": "2016-05-18T16:00:00Z",
        "ipAddress": "134.29.208.43",
        "donation": true
      }],
      "backerCount": 4,
      "donationAmmount": 3000
    }],

    "donorLevels": [{
      "name": "Sponsor Reward",
      "low": 50000,
      "high": 1000000,
      "hasReward": true,
      "rewardTitle": "Sponsor Package",
      "rewardDescription": "Image and link on campaign landing page. Loudspeaker thank you at each home football game.",
      "rewardImageLink": "http://student-fundraising-mockup.s3-website-us-west-2.amazonaws.com/logo.jpg",
    },
    {
      "name": "All Star Reward",
      "low": 20000,
      "high": 49999,
      "hasReward": true,
      "rewardTitle": "Be PM",
      "rewardDescription": "We will make you the new prime minister of England.",
      "rewardImageLink": ""
    },
    {
      "name": "Gold Reward",
      "low": 10000,
      "high": 19999,
      "hasReward": true,
      "rewardTitle": "Season Tickets",
      "rewardDescription": "Two regular season tickets.",
      "rewardImageLink": ""
    },
    {
      "name": "Silver Reward",
      "low": 5000,
      "high": 9999,
      "hasReward": true,
      "rewardTitle": "Tickets to the homecoming game",
      "rewardDescription": "Two tickets to the season opener.",
      "rewardImageLink": ""
    },
    {
      "name": "Team Reward",
      "low": 1000,
      "high": 4999,
      "hasReward": true,
      "rewardTitle": "Snack Voucher",
      "rewardDescription": "Get a voucher for a free snack at the next game.",
      "rewardImageLink": ""
    }],

    "sponsors": [{
      "donation": 50000,
      "publicThankYou": true,
      "emailThankYou": true,
      "acceptedReward": true,
      "rewardAccepted": "Sponser Reward",
      "firstName": "Dunn Bros Coffee",
      "lastName": "",
      "zipCode": 55432,
      "email": "bob@dunnbrothers.com",
      "imageLink": "http://student-fundraising-mockup.s3-website-us-west-2.amazonaws.com/logo.jpg",
      "websiteLink": "dunnbrothers.com/promotion/3029fjd3",
      "promotorLinkUsed":"none"
    },
    {
      "donation": 10000,
      "publicThankYou": false,
      "emailThankYou": false,
      "acceptedReward": false,
      "rewardAccepted": "No Reward",
      "firstName": "",
      "lastName": "",
      "zipCode": 55005,
      "email": "abbieh@gmail.com",
      "imageLink": "",
      "websiteLink": "",
      "promotorLinkUsed":"andym"
    },
    {
      "donation": 2000,
      "publicThankYou": true,
      "emailThankYou": true,
      "acceptedReward": true,
      "rewardAccepted": "Team Reward",
      "firstName": "Mo",
      "lastName": "Ford",
      "zipCode": 55112,
      "email": "mmmmmM@gmail.com",
      "imageLink": "",
      "websiteLink": "",
      "promotorLinkUsed":"jeb"
    }],

    "twitterImageLink": "http://student-fundraising-mockup.s3-website-us-west-2.amazonaws.com/team.jpg",
    "twitterShareText": "help the slp spartans get new uniforms raisable.com/lksdfj3c",
    "facebookPostTitle": "help the slp spartans get new uniforms raisable.com/lksdfj3c",
    "facebookImageLink": "http://student-fundraising-mockup.s3-website-us-west-2.amazonaws.com/team.jpg",
    "facebookPostContent": "help the slp spartans get new uniforms raisable.com/lksdfj3c",
    "instagramImageLink": "http://student-fundraising-mockup.s3-website-us-west-2.amazonaws.com/team.jpg",
    "instagramShareText": "help the slp spartans get new uniforms raisable.com/lksdfj3c",
    "pinterestImageLink": "http://student-fundraising-mockup.s3-website-us-west-2.amazonaws.com/team.jpg",
    "pinterestShareText": "help the slp spartans get new uniforms raisable.com/lksdfj3c",
  }; //end of object


  //--- Home Page Campaign Search --- //
      $scope.items = ["Category","Keyword", "Zipcode"];
      $scope.selectedItem;
      $scope.getSelectedText = function() {
        if ($scope.selectedItem !== undefined) {
          return $scope.selectedItem;
        } else {
          return " Select ";
        }
      };

  //--- Home Page Carousel --- //
      $scope.dataArray = [
        {
          src: 'http://fireflymagic.com/press/firefly_magic_yard.jpg'
        },
        {
          src: 'http://www.oshkoshcorporation.com/news/mediacenter/defense/M-ATV_SpecialForcesVhcl_1_.jpg'
        },
        {
          src: 'http://community.thefoundry.co.uk/modo_601_support_files/version_20120227/style/image/modo_richard_yot_frog_3D_paint_hires.jpg'
        }
      ];

  //--- Campaign Grid Tiles --- //



      this.tiles = buildGridModel({
        icon : "avatar:svg-",
        title: "Svg-",
        background: ""
      });

      function buildGridModel(tileTmpl){
        var it, results = [ ];
        for (var j=0; j<12; j++) {
          it = angular.extend({},tileTmpl);
          it.icon  = it.icon + (j+1);
          it.title = it.title + (j+1);
          it.span  = { row : 1, col : 1 };
          // switch(j+1) {
          //   case 1:
          //     it.background = "red";
          //     it.span.row = it.span.col = 1;
          //     break;
          //   case 2: it.background = "green";         break;
          //   case 3: it.background = "darkBlue";      break;
          //   case 4:
          //     it.background = "blue";
          //     it.span.col = 1;
          //     break;
          //   case 5:
          //     it.background = "yellow";
          //     it.span.row = it.span.col = 1;
          //     break;
          //   case 6: it.background = "pink";          break;
          //   case 7: it.background = "darkBlue";      break;
          //   case 8: it.background = "purple";        break;
          //   case 9: it.background = "deepBlue";      break;
          //   case 10: it.background = "lightPurple";  break;
          //   case 11: it.background = "yellow";       break;
          // }
          results.push(it);
        }
        return results;
      }

    // .config( function( $mdIconProvider ){
    //   $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
    // });




  }]);
