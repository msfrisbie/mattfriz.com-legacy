'use strict';

angular.module('mattfrizApp.directives.nameplate', [])
.directive('nameplate', function($timeout, $location) {
  return {
    restrict: 'E',
    templateUrl: '/views/partials/nameplate.html',
    link: function(scope, el, attrs) {

      var setData = function() {
        scope.showname = true;
      };

      scope.name = 'Matt Frisbie';

      if ($location.path() != '/' && $location.path() != '') {
        setData();
      } else {
        scope.showname = false;
        $timeout(setData, 300); // 500
      }
    }
  };
})