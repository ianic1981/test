golf.service('configService', ['golfLocalStorage',function(golfLocalStorage) {
  
  var id = "config";
  var config = {};

  return {
    login : function(user ,pwd) {      
      var user = { name:"ian" ,hadicap:"15", course:"alsager"};
      config.user = user;
      golfLocalStorage.put(id,config);                  
      return user;
    },
     getUser : function() {
      var config = golfLocalStorage.get(id);
       return config.user;
	},
    logout : function(){
      golfLocalStorage.put(id,{});
      return undefined;
    }
  }

}]);