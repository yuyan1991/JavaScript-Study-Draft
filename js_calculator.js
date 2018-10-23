'use strict';

// 定义数字0:
var zero = function (f) {
	return function () {
		return;
	}
};

// 定义数字1:
var one = function (f) {
	return function () {
		return f();
	}
};

// 定义加法:
function add(n, m) {
	return function (f) {
		return function () {
			return m(f)(n(f)());
		}
	}
}

// 计算数字2 = 1 + 1:
var two = add(one, one);

// 计算数字3 = 1 + 2:
var three = add(one, two);

// 计算数字5 = 2 + 3:
var five = add(two, three);

// 你说它是3就是3，你说它是5就是5，你怎么证明？

// 呵呵，看这里:

// 给3传一个函数,会打印3次:
(three(function () {
	console.log('print 3 times');
}))();

// 给5传一个函数,会打印5次:
(five(function () {
	console.log('print 5 times');
}))();

// 继续接着玩一会...
