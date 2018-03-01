// <!-- HTML结构 -->
// <form id="test-register" action="#" target="_blank" onsubmit="return checkRegisterForm()">
//     <p id="test-error" style="color:red"></p>
//     <p>
//         用户名: <input type="text" id="username" name="username">
//     </p>
//     <p>
//         口令: <input type="password" id="password" name="password">
//     </p>
//     <p>
//         重复口令: <input type="password" id="password-2">
//     </p>
//     <p>
//         <button type="submit">提交</button> <button type="reset">重置</button>
//     </p>
// </form>

'use strict';
var checkRegisterForm = function () {
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var reptPass = document.getElementById('password-2');
	var userRegExp = /^\w{3,10}$/;
	if (!userRegExp.test(username.value)) {
		alert('Failed! Illegal username(' + username.value + ')');
		return false;
	}
	var passRegExp = /^.{6,20}$/;
	if (password.value != reptPass.value || !passRegExp.test(password.value)) {
		alert('Failed! Illegal password!');
		return false;
	}
	alert('Success!');
	return true;
}

	// 测试:
	; (function () {
		window.testFormHandler = checkRegisterForm;
		var form = document.getElementById('test-register');
		if (form.dispatchEvent) {
			var event = new Event('submit', {
				bubbles: true,
				cancelable: true
			});
			form.dispatchEvent(event);
		} else {
			form.fireEvent('onsubmit');
		}
	})();