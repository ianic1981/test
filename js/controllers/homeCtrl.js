/*global todomvc, angular */
'use strict';

golf.controller('homeCtrl', function homeCtrl($scope, $location, $route, $routeParams, configService, filterFilter) {
	$scope.user = configService.getUser();

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
    configService.login($scope.userName,$scope.password);
    //reload();
  }
  
  $scope.logout = function(){
  	configService.logout();
    //reload();
  }
	/*$scope.$watch('location.path()', function (path) {
		$scope.statusFilter = (path === '/active') ?
			{ completed: false } : (path === '/completed') ?
			{ completed: true } : null;
	});*/

});
