// < !--HTML结构 -->
// <form id="test-form" action="test">
// 	<legend>请选择想要学习的编程语言：</legend>
// 	<fieldset>
// 		<p><label class="selectAll"><input type="checkbox"> <span class="selectAll">全选</span><span class="deselectAll">全不选</span></label> <a href="#0" class="invertSelect">反选</a></p>
// 		<p><label><input type="checkbox" name="lang" value="javascript"> JavaScript</label></p>
// 		<p><label><input type="checkbox" name="lang" value="python"> Python</label></p>
// 		<p><label><input type="checkbox" name="lang" value="ruby"> Ruby</label></p>
// 		<p><label><input type="checkbox" name="lang" value="haskell"> Haskell</label></p>
// 		<p><label><input type="checkbox" name="lang" value="scheme"> Scheme</label></p>
// 		<p><button type="submit">Submit</button></p>
// 	</fieldset>
// </form>

'use strict';

var
	form = $('#test-form'),
	langs = form.find('[name=lang]'),
	selectAll = form.find('label.selectAll :checkbox'),
	selectAllLabel = form.find('label.selectAll span.selectAll'),
	deselectAllLabel = form.find('label.selectAll span.deselectAll'),
	invertSelect = form.find('a.invertSelect');

// 重置初始化状态:
form.find('*').show().off();
form.find(':checkbox').prop('checked', false).off();
deselectAllLabel.hide();
// 拦截form提交事件:
form.off().submit(function (e) {
	e.preventDefault();
	alert(form.serialize());
});

selectAll.click(function() {
	if (selectAll.is(':checked')) {
		langs.prop('checked', true);
		selectAllLabel.hide();
		deselectAllLabel.show();
	} else {
		langs.prop('checked', false);
		selectAllLabel.show();
		deselectAllLabel.hide();
	}
});

function showAll() {
	if (langs.filter(':checked').length === langs.length) {
		selectAll.prop('checked', true);
		selectAllLabel.hide();
		deselectAllLabel.show();
	} else {
		selectAll.prop('checked', false);
		selectAllLabel.show();
		deselectAllLabel.hide();
	}
}

langs.click(showAll);

invertSelect.click(function() {
	langs.map(function() {
		$(this).prop('checked', !$(this).prop('checked'));
	});
	showAll();
});


// 测试:
console.log('请测试功能是否正常。');