// < !--HTML结构 -->
// <ol id="test-list">
// 	<li class="lang">Scheme</li>
// 	<li class="lang">JavaScript</li>
// 	<li class="lang">Python</li>
// 	<li class="lang">Ruby</li>
// 	<li class="lang">Haskell</li>
// </ol>

'use strict';

// sort list:
var a = document.getElementById('test-list').children;
for (let i=0;i<a.length;i++)
	for (let j=i+1;j<a.length;j++)
		if (a[i].innerText>a[j].innerText) {
			var text = a[i].innerText;
			a[i].innerText = a[j].innerText;
			a[j].innerText = text;
		}
// 测试:
; (function () {
	var
		arr, i,
		t = document.getElementById('test-list');
	if (t && t.children && t.children.length === 5) {
		arr = [];
		for (i = 0; i < t.children.length; i++) {
			arr.push(t.children[i].innerText);
		}
		if (arr.toString() === ['Haskell', 'JavaScript', 'Python', 'Ruby', 'Scheme'].toString()) {
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