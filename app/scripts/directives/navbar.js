'use strict';

angular.module('mattfrizApp.directives.navbar', [])
.directive('navbar', function($timeout, $location) {
  return {
    restrict: 'E',
    templateUrl: '/views/partials/navbar.html',
    link: function(scope, el, attrs) {

      scope.scrollNav = function(remote) {
        if (remote) {
          return;
        }
        if ($location.path() != '/' && $location.path() != '') {
          return;
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
            link: '#/about'
          },
          {
            str: 'Publications',
            link: '#/publications'
          },
          {
            str: 'Expeditions',
            link: '#/expeditions'
          },
          {
            str: 'Outbursts',
            link: '#/outbursts'
          },
          // {
          //   str: 'Running',
          //   link: '/running'
          // },
          {
            str: 'Résumé',
            link: '/files/matt-frisbie-resume.pdf',
            remote: true
          }
        ];
      };

      if ($location.path() != '/' && $location.path() != '') {
        setData();
      } else {
       scope.hideNav = true;
       $timeout(setData, 1400); // 2500
      }
    }
  };
});
