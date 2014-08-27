(function () {
	'use strict';

	angular
		.module('ngSocketIO', [
			'ngSocketIO/Service/Io',
			'ngSocketIO/Service/Socket'
		])

		.value('version', '1.0.1');
})();