'use strict';

angular.module('mattfrizApp.controllers.content', [])
  .controller('ContentCtrl', 
    function ($scope, $location, $anchorScroll) {
      $scope.viewState = {
        contentVisible: true
      };

      $location.hash('content');
      $anchorScroll();

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
          {display: false, text: 'statictician'}, 
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
