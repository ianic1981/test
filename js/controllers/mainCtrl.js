/*global todomvc, angular */
'use strict';

golf.controller('mainCtrl', function mainCtrl($scope, $location, $route, $routeParams, configService, filterFilter) {
	$scope.user = configService.getUser();
  	$scope.userName = "";
  	$scope.password = "";

	/*$scope.$watch('todos', function (newValue, oldValue) {
		$scope.remainingCount = filterFilter(todos, { completed: false }).length;
		$scope.completedCount = todos.length - $scope.remainingCount;
		$scope.allChecked = !$scope.remainingCount;
		if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
			todoStorage.put(todos);
		}
	}, true);*/

	if ($location.path() === '') {
		$location.path('/');
	}

	$scope.location = $location;
  	$scope.$route = $route;
    $scope.$routeParams = $routeParams;
  
  $scope.login = function() {
    $scope.user = configService.login($scope.userName,$scope.password);
    
  }
  
  $scope.logout = function(){
  	$scope.user = configService.logout();
  }
	/*$scope.$watch('location.path()', function (path) {
		$scope.statusFilter = (path === '/active') ?
			{ completed: false } : (path === '/completed') ?
			{ completed: true } : null;
	});*/

});
