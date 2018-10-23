'use strict';

function normalize(arr) {
	return arr.map(function (s) {
		return s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase();
	});
}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
	console.log('测试通过!');
}
else {
	console.log('测试失败!');
}