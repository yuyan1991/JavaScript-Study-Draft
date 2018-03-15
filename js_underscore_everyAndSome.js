'use strict';
var obj = {
	name: 'bob',
	school: 'No.1 middle school',
	address: 'xueyuan road'
};
// 判断key和value是否全部是小写：

var r1 = _.every(obj, function (value, key) {
	return value.toLowerCase()===value && key.toLowerCase()===key;
});
var r2 = _.some(obj, function (value, key) {
	return value.toLowerCase()===value && key.toLowerCase()===key;
});

console.log('every key-value are lowercase: ' + r1 + '\nsome key-value are lowercase: ' + r2);