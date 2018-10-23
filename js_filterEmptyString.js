var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
	return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
console.log(r);