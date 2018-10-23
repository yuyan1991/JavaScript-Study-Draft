'use strict';

// 输出log到页面:
function log(s) {
	console.log(s);
}

new Promise(function (resolve, reject) {
	log('start new Promise...');
	var timeOut = Math.random() * 2;
	log('set timeout to: ' + timeOut + ' seconds.');
	setTimeout(function () {
		if (timeOut < 1) {
			log('call resolve()...');
			resolve('200 OK');
		}
		else {
			log('call reject()...');
			reject('timeout in ' + timeOut + ' seconds.');
		}
	}, timeOut * 1000);
}).then(function (r) {
	log('Done: ' + r);
}).catch(function (reason) {
	log('Failed: ' + reason);
});