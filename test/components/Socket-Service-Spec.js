(function () {
	'use strict';

	var MODULE_NAME = 'ngSocketIO/Service/Socket',
	MODULE_DEPENDENCIES = [
		'ngSocketIO/Service/Io'
	],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [];

	describe(MODULE_NAME + ' module', function () {
		var $socket;

		beforeEach(module(MODULE_NAME));
		MODULE_DEPENDENCIES.forEach(function (dependency) {
			beforeEach(module(dependency));
		});

		beforeEach(inject(function ($injector) {
			$socket = $injector.get('$socket');
		}));

		it('should return socket promise', function () {
			expect($socket().then instanceof Function).toBe(true);
			expect($socket().catch instanceof Function).toBe(true);
		});
	});
})();