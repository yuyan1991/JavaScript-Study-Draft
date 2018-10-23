'use strict';

var count = 0;

var oldParseInt = parseInt;
parseInt = function() {
	count+=1;
	var ans1 = oldParseInt.apply(null, arguments);
	var ans2 = oldParseInt(arguments[0]);
	console.log(ans1 + ' : ' + ans2);
	return ans1;
};

parseInt('10');
parseInt('20');
parseInt('30');

console.log(count);