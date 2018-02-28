// < !--HTML结构 -->
// <div id="test-div">
// 	<p id="test-js">javascript</p>
// 	<p>Java</p>
// </div>

'use strict';

// 获取<p>javascript</p>节点:
var js = document.getElementById('test-js');

// 修改文本为JavaScript:
js.innerText = 'JavaScript'

// 修改CSS为: color: #ff0000, font-weight: bold
js.style.color = '#ff0000'
js.style.fontWeight = 'bold'

// 测试:
if (js && js.parentNode && js.parentNode.id === 'test-div' && js.id === 'test-js') {
	if (js.innerText === 'JavaScript') {
		if (js.style && js.style.fontWeight === 'bold' && (js.style.color === 'red' || js.style.color === '#ff0000' || js.style.color === '#f00' || js.style.color === 'rgb(255, 0, 0)')) {
			console.log('测试通过!');
		} else {
			console.log('CSS样式测试失败!');
		}
	} else {
		console.log('文本测试失败!');
	}
} else {
	console.log('节点测试失败!');
}
