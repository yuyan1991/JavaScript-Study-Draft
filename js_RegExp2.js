'use strict';

var re = /^<([\w\s]*)>\s+(\w+@\w+\.\w+)$/;

// 测试:
var r = re.exec('<Tom Paris> tom@voyager.org');
if (r === null || r.toString() !== ['<Tom Paris> tom@voyager.org', 'Tom Paris', 'tom@voyager.org'].toString()) {
	console.log('测试失败!');
}
else {
	console.log('测试成功!');
}