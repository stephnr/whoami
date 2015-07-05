(function(){
	'use strict';

	module.exports = function() {
		var username = require('child_process').execSync('whoami', { encoding: 'utf-8' });
		return String(username).trim();
	};
})();
