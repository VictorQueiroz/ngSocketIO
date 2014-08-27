(function () {
	'use strict';

	var MODULE_NAME = 'ngSocketIO/Service/Io',
	MODULE_DEPENDENCIES = [],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [];

	describe(MODULE_NAME + ' module', function () {
		var $io;

		beforeEach(module(MODULE_NAME));

		beforeEach(inject(function ($injector) {
			$io = $injector.get('$io');
		}));

		it('should return io promise', function () {
			expect($io().then instanceof Function).toBe(true);
			expect($io().catch instanceof Function).toBe(true);
		});
	});
})();