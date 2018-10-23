// < !--HTML结构 -->
// 	<style>
// 		.highlight {
// 			color: #dd1144;
// 		background-color: #ffd351;
// 	}
// </style>

// 	<div id="test-highlight-css">
// 		<ul>
// 			<li class="py"><span>Python</span></li>
// 			<li class="js"><span>JavaScript</span></li>
// 			<li class="sw"><span>Swift</span></li>
// 			<li class="hk"><span>Haskell</span></li>
// 		</ul>
// 	</div>
'use strict';

var div = $('#test-highlight-css');
var js = $('#test-highlight-css>ul>li.js').css('color', '#dd1144').css('background-color', '#ffd351');
// var js = $('#test-highlight-css>ul>li.js').addClass('highlight');

// var div = $('#test-highlight-css');
// div.find('.js').addClass('highlight');
// div.find('.js').css('color', '#ff0000').css('backgroundColor', '#000000');