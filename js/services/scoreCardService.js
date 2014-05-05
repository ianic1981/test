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
         			round.hole[1].shots.split(",").length
                    + round.hole[2].shots.split(",").length
                    + round.hole[3].shots.split(",").length
                    + round.hole[4].shots.split(",").length
                    + round.hole[5].shots.split(",").length
                    + round.hole[6].shots.split(",").length
                    + round.hole[7].shots.split(",").length
                    + round.hole[8].shots.split(",").length
                    + round.hole[9].shots.split(",").length);
         }
  
  		calculateBackNine = function(round,user){
			return (
         			round.hole[10].shots.split(",").length
                    + round.hole[11].shots.split(",").length
                    + round.hole[12].shots.split(",").length
                    + round.hole[13].shots.split(",").length
                    + round.hole[14].shots.split(",").length
                    + round.hole[15].shots.split(",").length
                    + round.hole[16].shots.split(",").length
                    + round.hole[17].shots.split(",").length
                    + round.hole[18].shots.split(",").length);
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
   		 setHole : function(hole){
    		currentHole = hole;
           return currentHole;
         },
    	 addShot : function(round,currentShot,currentHole){
           	//console.log(round.get('hole'+hole));
           console.log(round);
           if(round.hole[currentHole] == undefined){
             round.hole[currentHole] = {'shots':currentShot};	
           }
           else{
             var _shots = round.hole[currentHole].shots +","+currentShot;
           	round.hole[currentHole].shots = _shots;
           }
           return round;
         },
    	getCurrentHole : function(){
  			return currentHole;
  		},
    	 getCurrentRound : function(){
           round = golfLocalStorage.get(id);
           if(round === undefined){
             round = { hole: [] };
           }
  			return round;
         }
  };
}]);