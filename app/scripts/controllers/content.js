'use strict';

angular.module('mattfrizApp.controllers.content', [])
  .controller('ContentCtrl', 
    function ($rootScope, $scope, $location, $anchorScroll, $timeout) {

      switch($location.path()) {
        case '/about':
          $rootScope.pageTitle = 'About Me | mattfriz.com';
          break;
        case '/publications':
          $rootScope.pageTitle = 'Publications | mattfriz.com';
          break;
        case '/expeditions':
          $rootScope.pageTitle = 'Expeditions | mattfriz.com';
          break;
        default:
          $rootScope.pageTitle = 'mattfriz.com';
      }

      var garble = 'moc.liamg@eibsirfsm';

      // $scope.showbox = false;
      $scope.garbleStr = 'email';

      $scope.showIt = function() {
        // $scope.showbox = true;
        $timeout(function() {
          $scope.garbleStr = garble.split('').reverse().join('');
          $scope.mailto = 'mailto:'+$scope.garbleStr;
        }, 0)
      }

      $scope.viewState = {
        contentVisible: true
      };

      // $location.hash('content');
      // $anchorScroll();
      var speed = 1000
        , delay = 500;

      $timeout(function() {
        var targetOffset = $('#content').offset().top
          , currOffset = $(document).scrollTop();

        // if (currOffset > 50) {
        //   speed = 200;
        //   delay = 0;
        // }

        // if (currOffset > targetOffset) {
        //   speed = 0;
        //   delay = 0;
        // }
        if (currOffset < targetOffset) {
          $("html, body").animate({ scrollTop: targetOffset }, speed);
        }
      }, delay);

      $scope.viewData = {
        sillyDescriptors: [
          {display: false, text: 'engineer'},
          {display: false, text: 'pioneer'}, 
          {display: false, text: 'volunteer'}, 
          {display: false, text: 'racketeer'},
          {display: false, text: 'hacker'}, 
          {display: false, text: 'bushwhacker'}, 
          {display: false, text: 'attacker'}, 
          {display: false, text: 'outside linebacker'}, 
          {display: false, text: 'tinkerer'}, 
          {display: false, text: 'thinker'}, 
          {display: false, text: 'blinker'}, 
          {display: false, text: 'stinker'}, 
          {display: false, text: 'creator'}, 
          {display: false, text: 'debater'}, 
          {display: false, text: 'curator'}, 
          {display: false, text: 'instigator'}, 
          {display: false, text: 'designer'}, 
          {display: false, text: 'refiner'}, 
          {display: false, text: 'fine diner'}, 
          {display: false, text: 'coal miner'}, 
          {display: false, text: 'entrepreneur'}, 
          {display: false, text: 'restauranteur'}, 
          {display: false, text: 'connoisseur'}, 
          {display: false, text: 'saboteur'}, 
          {display: false, text: 'psychologist'}, 
          {display: false, text: 'anthropologist'}, 
          {display: false, text: 'ornithologist'}, 
          {display: false, text: 'optometrist'}, 
          {display: false, text: 'hiker'}, 
          {display: false, text: 'biker'}, 
          {display: false, text: 'piker'}, 
          {display: false, text: 'striker'}, 
          {display: false, text: 'politician'}, 
          {display: false, text: 'statistician'}, 
          {display: false, text: 'rhetorician'}, 
          {display: false, text: 'dietician'}, 
          {display: false, text: 'visionary'}, 
          {display: false, text: 'emissary'}, 
          {display: false, text: 'missionary'}, 
          {display: false, text: 'secretary'}, 
          {display: false, text: 'ponderer'}, 
          {display: false, text: 'wanderer'},
          {display: false, text: 'conjuror'},
          {display: false, text: 'squanderer'},
          {display: false, text: 'baller'},
          {display: false, text: 'shot caller'},
          {display: false, text: 'scholar'},
          {display: false, text: 'brawler'}
        ]
      };
    }
  );
