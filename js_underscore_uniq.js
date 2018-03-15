'use strict';

var arr = ['Apple', 'orange', 'banana', 'ORANGE', 'apple', 'PEAR'];

var result = _.uniq(arr, (x) => x.toLowerCase());
console.log(result)

// 测试
if (result.toString() === ["Apple", "orange", "banana", "PEAR"].toString()) {
	console.log('测试成功!');
} else {
	console.log('测试失败!');
}