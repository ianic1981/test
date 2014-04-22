/*global angular */
/*jshint unused:false */
'use strict';

var golf = angular.module('golf', ['ngRoute']);

golf.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/scoreCard', {
        templateUrl: '/partials/scoreCard.html',
        controller: 'scoreCardCtrl'
      }).
      when('/register', {
        templateUrl: '/partials/register.html',
        controller: 'registerCtrl'
      }).
      otherwise({
        redirectTo: '/golf'
      });
  }]);
