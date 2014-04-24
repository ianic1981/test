golf.service('scoreCardService', ['golfLocalStorage',function(golfLocalStorage) {
  
  var id = "scoreCard";
  
  var currentHole = 1;

  return {
    	finish : function(hole1,hole2,hole3,hole4,hole5,hole6,hole7,hole8,hole9,hole10,hole11,hole12,hole13,hole14,hole15,hole16,hole17,hole18) {      
      		var round = {'course':"alsager",  
                   'hole_1':"sh,sh,pt,pt" ,
                   'hole_2':"sh,sh,pt,pt", 
                   'hole_3':"sh,sh,pt,pt",
                   'hole_4':"sh,sh,pt,pt",
                   'hole_5':"sh,sh,pt,pt",
                   'hole_6':"sh,sh,pt,pt",
                   'hole_7':"sh,sh,pt,pt",
                   'hole_8':"sh,sh,pt,pt",
                   'hole_9':"sh,sh,pt,pt",
                   'hole_10':"sh,sh,pt,pt",
                   'hole_11':"sh,sh,pt,pt",
                   'hole_12':"sh,sh,pt,pt",
                   'hole_13':"sh,sh,pt,pt",
                   'hole_14':"sh,sh,pt,pt",
                   'hole_15':"sh,sh,pt,pt",
                   'hole_16':"sh,sh,pt,pt",
                   'hole_17':"sh,sh,pt,pt",
                   'hole_18':"sh,sh,pt,pt" 
                   };
     	 golfLocalStorage.put(id,round);                  
     		 return round;
   		 },
   		 getDistanceToFlag : function(){
    		return 330;
  		 }
  		};
}]);