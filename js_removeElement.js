// < !--HTML结构 -->
// <ul id="test-list">
// 	<li>JavaScript</li>
// 	<li>Swift</li>
// 	<li>HTML</li>
// 	<li>ANSI C</li>
// 	<li>CSS</li>
// 	<li>DirectX</li>
// </ul>

'use strict';

var p = document.getElementById('test-list');
p.removeChild(p.children[1]);
p.removeChild(p.children[2]);
p.removeChild(p.lastElementChild);

// 测试:
; (function () {
	var
		arr, i,
		t = document.getElementById('test-list');
	if (t && t.children && t.children.length === 3) {
		arr = [];
		for (i = 0; i < t.children.length; i++) {
			arr.push(t.children[i].innerText);
		}
		if (arr.toString() === ['JavaScript', 'HTML', 'CSS'].toString()) {
			console.log('测试通过!');
		}
		else {
			console.log('测试失败: ' + arr.toString());
		}
	}
	else {
		console.log('测试失败!');
	}
})();