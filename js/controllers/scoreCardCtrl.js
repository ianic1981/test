golf.controller('scoreCardCtrl', function scoreCardCtrl($scope, $location, golfLocalStorage, scoreCardService) { 
  
  $scope.name = "scoreCardCtrl";
  
  $scope.round = scoreCardService.getCurrentRound();
  
  $scope.hole = 1;
  
  $scope.nextHole = function(){ 
     $scope.hole = scoreCardService.getNextHole($scope.round);
  }
  
  $scope.finish = function(){ 
    scoreCardService.finish($scope.round);
    $location.path("/");
   }
  
  $scope.addShot = function(shot , hole){
    scoreCardService.addShot(shot,hole);
  }
});