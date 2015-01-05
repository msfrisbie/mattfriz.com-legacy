'use strict';

angular.module('mattfrizApp.directives.navbar', [])
.directive('navbar', function($timeout, $location) {
  return {
    restrict: 'E',
    templateUrl: '/views/partials/navbar.html',
    link: function(scope, el, attrs) {

      scope.scrollNav = function(path) {
        if ($location.path() != '/' && $location.path() != '') {
          var targetOffset = $('#content').offset().top
            , currOffset = $(document).scrollTop();

          // if (currOffset > targetOffset) {
          // $.scrollTo(targetOffset)
          // if (currOffset > 50) {
          $('html, body').animate({ scrollTop: targetOffset}, 0);
          // }
        }
        // $location.path(path);
        // console.log(path)
      }

      var setData = function() {
        scope.hideNav = false;
        scope.navElements = [
          {
            str: 'About Me',
            link: '/about'
          },
          {
            str: 'Publications',
            link: '/publications'
          },
          {
            str: 'Expeditions',
            link: '/expeditions'
          },
          // {
          //   str: 'Running',
          //   link: '/running'
          // },
          {
            str: 'Résumé',
            link: '/files/matt_frisbie_resume.pdf'
          }
        ];
      };

      if ($location.path() != '/' && $location.path() != '') {
        setData();
      } else {
        scope.hideNav = true;
        $timeout(setData, 2500);
      }
    }
  };
});
