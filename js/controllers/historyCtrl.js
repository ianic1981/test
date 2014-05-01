golf.controller('historyCtrl', function historyCtrl($scope, $location, golfLocalStorage) { 
  
  $scope.name = "historyCtrl";
  id= "history";
  
  $scope.history = golfLocalStorage.get(id);
  
});