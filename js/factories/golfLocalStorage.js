/*global todomvc */
'use strict';

golf.factory('golfLocalStorage', function () {
	return {
		get: function (id) {
          var obj = localStorage.getItem(id);
          if (obj){
          return JSON.parse(obj);
          }
          return undefined;
		},
		put: function (id, data) {
			localStorage.setItem(id, JSON.stringify(data));
		}
	};
});
