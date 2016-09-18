'use strict';

angular.module('mattfrizApp.controllers.outburst', [])
  .controller('OutburstCtrl', 
    function ($rootScope, $scope, $location, $anchorScroll, $timeout, $routeParams) {


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

      $scope.outbursts = [
        {
       	  entry: 'recruiter-email',
      	  pubDate: 'October 2, 2015',
      	  title: 'The Tenacity of Tech Recruiters',
      	  url: 'views/outbursts/recruiter-email.html'
      	},
        {
          entry: 'tech-interview-torture-chamber',
          pubDate: 'February 22, 2016',
          title: 'Tech Interview Torture Chamber',
          url: 'views/outbursts/perfect-technical-hiring-process.html'
        },
        {
          entry: 'startup-equity-handbook',
          pubDate: 'September 12, 2016',
          title: 'Startup Equity Handbook',
          url: 'views/outbursts/startup-equity-handbook.html'
        },
        {
          entry: 'open-source-rehash',
          pubDate: 'September 13, 2016',
          title: 'Startup Engineer Unwittingly Implements Crappier Version of Open Source Project',
          url: 'views/outbursts/open-source-rehash.html'
        }


        //,
       //  {
       // 	  entry: 'why-so-serious',
      	//   pubDate: 'September 27, 2015',
      	//   title: 'Somebody Make a Fart Noise or Something',
      	//   url: 'views/outbursts/why-so-serious.html'
      	// }
      ];

      // initialization
      for(var i=0; i<$scope.outbursts.length; ++i) {
      	if($scope.outbursts[i].entry == $routeParams.entry) {
      	  $scope.currentOutburst = $scope.outbursts[i];
      	}
      }

      if($scope.currentOutburst) {
      	var prefix = $scope.currentOutburst.title
      } else {
      	var prefix = "Outburst"
      }
      $rootScope.pageTitle = prefix + ' | mattfriz.com';

      // $scope.currentOutburstUrl = function() {
      // 	if($scope.currentOutburst) {
      // 	  return $sce.trustAsHtml($scope.currentOutburst.url);
      // 	}
      // }
  	}
  );
