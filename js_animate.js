'use strict';

function deleteFirstTR() {
	var tr = $('#test-table>tbody>tr:visible').first();
	tr.fadeOut(1000, function() {
		tr.remove();
	});
}

deleteFirstTR();