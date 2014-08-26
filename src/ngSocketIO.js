(function (window, angular) {
	'use strict';

	angular
		.module('ngSocketIO', [])

		.value('version', '1.0.0')

		.factory('$io', ['$q', '$timeout', '$window', function($q, $timeout, $window){
			return function () {
				return $q.when($window.io);
			};
		}])

		.factory('$socket', ['$io', function ($io) {
			return function () {
				return $io().then(function (io) {
					var socket = io.connect();

					return socket;
				});
			};
		}]);
})(window, angular);