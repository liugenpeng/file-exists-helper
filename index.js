var fs = require('fs');
/**
 * async method
 */
module.exports.check = function (file, cb) {

	// return new Promise(function(resolve){
		fs.access(file, function (err, fd) {
			cb(!err);
		})
	// });
}
/**
 * sync method
 */
module.exports.checkSync = function (file) {
	
	var flag = true;
	
	try {

		fs.accessSync(file);
	
	} catch (err) {
	
		flag = false;
	
	}

	return flag;
}