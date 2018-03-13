// < !--HTML结构 -->
// <div id="test-div">
// 	<ul>
// 		<li><span>JavaScript</span></li>
// 		<li><span>Python</span></li>
// 		<li><span>Swift</span></li>
// 	</ul>
// </div>

'use strict';

var js = $('#test-div>ul>li:first-child');
var lua = document.createElement('li');
lua.innerHTML = '<span>Lua</span>';
var pascal = document.createElement('li');
pascal.innerHTML = '<span>Pascal</span>';
var ruby = document.createElement('li');
ruby.innerHTML  = '<span>Ruby</span>';
js.after(lua);
lua.after(pascal);
$('#test-div>ul>li:last-child').before(ruby);

// 测试:
; (function () {
	var s = $('#test-div>ul>li').map(function () {
		return $(this).text();
	}).get().join(',');
	if (s === 'JavaScript,Lua,Pascal,Python,Ruby,Swift') {
		console.log('测试通过!');
	} else {
		console.log('测试失败: ' + s);
	}
})();