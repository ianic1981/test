golf.controller('registerCtrl', function registerCtrl($scope,registerService) { 
  $scope.register = registerService.register($scope);
});