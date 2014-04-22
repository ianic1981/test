golf.controller('scoreCardCtrl', function TodoCtrl($scope, $location, golfLocalStorage, scoreCardService, filterFilter) { 
  
  $scope.name = "scoreCardCtrl";
  
  $scope.finish = function(){ scoreCardService.finish(
    $scope.hole1,
    $scope.hole2,
    $scope.hole3,
    $scope.hole4,
    $scope.hole5,
    $scope.hole6,
    $scope.hole7,
    $scope.hole8,
    $scope.hole9,
    $scope.hole10,
    $scope.hole11,
    $scope.hole12,
    $scope.hole13,
    $scope.hole14,
    $scope.hole15,
    $scope.hole16,
    $scope.hole17,
    $scope.hole18);
   }
});