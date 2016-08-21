const checkHelper = require('../');

checkHelper.check('./hello.txt', function(flag){
	console.log(flag);
})


var flag2 = checkHelper.checkSync('./hello.txt');
console.log("sync method= "+flag2);