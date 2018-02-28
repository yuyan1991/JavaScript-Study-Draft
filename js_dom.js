// < !--HTML结构 -->
// <div id="test-div">
// 	<div class="c-red">
// 		<p id="test-p">JavaScript</p>
// 		<p>Java</p>
// 	</div>
// 	<div class="c-red c-green">
// 		<p>Python</p>
// 		<p>Ruby</p>
// 		<p>Swift</p>
// 	</div>
// 	<div class="c-green">
// 		<p>Scheme</p>
// 		<p>Haskell</p>
// 	</div>
// </div>

'use strict';

// 选择<p>JavaScript</p>:
var js = document.getElementById('test-p');

// 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
var arr = document.getElementsByClassName('c-red')[1].children;
// var arr = document.getElementsByClassName('c-red c-green')[0].children;  //这样写也行
// 选择<p>Haskell</p>:
var haskell = document.getElementsByClassName('c-green')[1].lastElementChild;

// 测试:
if (!js || js.innerText !== 'JavaScript') {
  console.log('选择JavaScript失败!');
} else if (!arr || arr.length !== 3 || !arr[0] || !arr[1] || !arr[2] || arr[0].innerText !== 'Python' || arr[1].innerText !== 'Ruby' || arr[2].innerText !== 'Swift') {
  console.log('选择Python,Ruby,Swift失败!');
} else if (!haskell || haskell.innerText !== 'Haskell') {
  console.log('选择Haskell失败!');
} else {
  console.log('测试通过!');
}