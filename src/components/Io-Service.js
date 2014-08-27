(function () {
	'use strict';

	angular
		.module('ngSocketIO/Service/Io', [])

		.factory('$io', ['$q', '$window', function($q, $window){
			return function () {
				return $q.when($window.io);
			};
		}]);		
})();