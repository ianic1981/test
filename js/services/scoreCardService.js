golf.service('scoreCardService', ['golfLocalStorage',function(golfLocalStorage) {
  
  var id = "scoreCard";
  
  var currentHole = 1;

    	 addToHistory = function(round){
           history = golfLocalStorage.get("history");
           if (!history){
             history = [];
			}
           /*var d = new Date();
           var time = d.getTime();*/
           history[history.length] = round;
    	 	golfLocalStorage.put("history", history);
         }
         
         calculateFrontNine =function(round,user){
           
			return (
         			round.hole1.shots.split(",").length
                    + round.hole2.shots.split(",").length
                    + round.hole3.shots.split(",").length
                    + round.hole4.shots.split(",").length
                    + round.hole5.shots.split(",").length
                    + round.hole6.shots.split(",").length
                    + round.hole7.shots.split(",").length
                    + round.hole8.shots.split(",").length
                    + round.hole9.shots.split(",").length);
         }
  
  		calculateBackNine = function(round,user){
			return (
         			round.hole10.shots.split(",").length
                    + round.hole11.shots.split(",").length
                    + round.hole12.shots.split(",").length
                    + round.hole13.shots.split(",").length
                    + round.hole14.shots.split(",").length
                    + round.hole15.shots.split(",").length
                    + round.hole16.shots.split(",").length
                    + round.hole17.shots.split(",").length
                    + round.hole18.shots.split(",").length);
         }
         
         calculateScore = function(round,user){
         	return (calculateFrontNine(round,user)+ calculateBackNine(round,user))
          }
  			
         
  
  return {
    	finish : function(round) {  
          
			round.score = calculateScore(round);      		
     		 addToHistory(round); 
          golfLocalStorage.put(id,{});
          
   		 },
   		 getDistanceToFlag : function(){
    		return 330;
         }, 
    	getNextHole : function(round){
          	golfLocalStorage.put(id,round);
    		return currentHole++;
         },
    	 addShot : function(shot,hole){
         	console.log(shot +" " +hole );
         },
    	 getCurrentRound : function(){
           round = golfLocalStorage.get(id);
           if(round=== undefined){
          	/*round.hole1= [];
             round.hole2= [];
            round.hole3= [];
             round.hole4= [];
             round.hole5= [];
             round.hole6= [];
             round.hole7= [];
             round.hole8= [];
             round.hole9= [];
             round.hole10= [];
             round.hole11= [];
             round.hole12= [];
             round.hole13= [];
             round.hole14= [];
             round.hole15= [];
             round.hole16= [];
             round.hole17= [];
             round.hole18= [];*/
           }
  			return round;
         }
  };
}]);