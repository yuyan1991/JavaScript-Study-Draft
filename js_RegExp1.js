'use strict';

var re = /^(\w+\.)*\w+@(\w+\.)+\w+$/;

// 测试:
var
	i,
	success = true,
	should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com', 'abc@ifshk.com.hk'],
	should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org', '.abc@gmail.com'];
for (i = 0; i < should_pass.length; i++) {
	if (!re.test(should_pass[i])) {
		console.log('测试失败: ' + should_pass[i]);
		success = false;
		break;
	}
}
for (i = 0; i < should_fail.length; i++) {
	if (re.test(should_fail[i])) {
		console.log('测试失败: ' + should_fail[i]);
		success = false;
		break;
	}
}
if (success) {
	console.log('测试通过!');
}