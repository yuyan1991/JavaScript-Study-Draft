'use strict';

function p(x, y) {
	return x*y;
}

function product(arr) {
	// return arr.reduce(function (x,y) {
	// 	return x*y;
	// });
	return arr.reduce(p);
}

// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
	console.log('测试通过!');
}
else {
	console.log('测试失败!');
}