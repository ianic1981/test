golf.controller('scoreCardCtrl', function scoreCardCtrl($scope, $location, golfLocalStorage, scoreCardService) { 
  
  $scope.name = "scoreCardCtrl";
  
  $scope.round = round = scoreCardService.getCurrentRound();
  
  $scope.hole = scoreCardService.getCurrentHole();
  
  $scope.nextHole = function(){ 
     $scope.hole = scoreCardService.getNextHole(round);
  }
  
  $scope.finish = function(){ 
    scoreCardService.finish(round);
    $location.path("/");
   }
  
  $scope.addShot = function(shot , hole){
    $scope.round = round = scoreCardService.addShot(round,shot,hole);
  }
});