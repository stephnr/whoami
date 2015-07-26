jest.dontMock('../whoami.js');

describe('whoami', function() {
	var whoami = require('../whoami');

	it('should exist', function() {
		expect(whoami).toBeDefined();
	});

	it('should return some value', function() {
		expect(whoami()).toBeDefined();
	});
});