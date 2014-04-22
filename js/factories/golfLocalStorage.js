/*global todomvc */
'use strict';

golf.factory('golfLocalStorage', function () {
	return {
		get: function (id) {
          return JSON.parse(localStorage.getItem(id) || {});
		},
		put: function (id, data) {
			localStorage.setItem(id, JSON.stringify(data));
		}
	};
});
