(function(){
	'use strict';

	module.exports = function() {
		var username = require('child_process').execSync('whoami', { encoding: 'utf-8' });
		if(process.platform === 'win32') {
			username = username.split(path.sep)[1];
		}
		return String(username).trim();
	};
})();
