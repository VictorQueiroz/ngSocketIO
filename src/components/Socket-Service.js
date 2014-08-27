(function () {
	'use strict';

	angular
		.module('ngSocketIO/Service/Socket', [])

		.factory('$socket', ['$io', function ($io) {
			return function () {
				return $io().then(function (io) {
					var socket = io.connect();

					return socket;
				});
			};
		}]);
})();