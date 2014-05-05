golf.service('configService', ['golfLocalStorage',function(golfLocalStorage) {
  
  var id = "config";
  var config = {};
  
  var currentUser = undefined;

  return {
    login : function(user ,pwd) {      
      currentUser = { name:"ian" ,hadicap:"15", course:"alsager"};
      config = {'user':currentUser};
      golfLocalStorage.put(id,config);                  
      return currentUser;
    },
     getUser : function() {
      var config = golfLocalStorage.get(id);
       if (config != undefined) {
       	return config.user;
       }
       return undefined;
	},
    logout : function(){
      golfLocalStorage.put(id,{});
      return undefined;
    }
  }

}]);