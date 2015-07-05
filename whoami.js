(function(){
	'use strict';
	var cp = require('child_process');

	module.exports = function() {
		var username = cp.execSync('whoami', { encoding: 'utf-8' });
		return String(username).trim();
	};
})();
