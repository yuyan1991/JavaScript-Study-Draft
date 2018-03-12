// < !--HTML结构 -->

// <div class="test-selector">
// 	<ul class="test-lang">
// 		<li class="lang-javascript">JavaScript</li>
// 		<li class="lang-python">Python</li>
// 		<li class="lang-lua">Lua</li>
// 	</ul>
// 	<ol class="test-lang">
// 		<li class="lang-swift">Swift</li>
// 		<li class="lang-java">Java</li>
// 		<li class="lang-c">C</li>
// 	</ol>
// </div>

'use strict';
var selected = null;

// 分别选择所有语言，所有动态语言，所有静态语言，JavaScript，Lua，C等:
selected = $('div.test-selector li');
// selected = $('ul.test-lang>li');
// selected = $('ol.test-lang>li');
// selected = $('ul li.lang-javascript');

// 高亮结果:
if (!(selected instanceof jQuery)) {
	return console.log('不是有效的jQuery对象!');
}
$('#test-jquery').find('*').css('background-color', '');
selected.css('background-color', '#ffd351');