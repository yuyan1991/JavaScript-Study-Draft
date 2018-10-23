{/* <form id="test-form" action="#0" onsubmit="return false;">
	<p><label>Name: <input name="name"></label></p>
		<p><label>Email: <input name="email"></label></p>
			<p><label>Password: <input name="password" type="password"></label></p>
				<p>Gender: <label><input name="gender" type="radio" value="m" checked> Male</label> <label><input name="gender" type="radio" value="f"> Female</label></p>
					<p><label>City: <select name="city">
						<option value="BJ" selected>Beijing</option>
						<option value="SH">Shanghai</option>
						<option value="CD">Chengdu</option>
						<option value="XM">Xiamen</option>
					</select></label></p>
					<p><button type="submit">Submit</button></p>
</form> */}

'use strict';
var json = null;

var name = $('#test-form input[name=name]').val();
var email = $('#test-form input[name=email]').val();
var password = $('#test-form input[name=password]').val();
var gender = $('#test-form input[name=gender]').val();
var city = $('#test-form input[name=city]').val();

json = JSON.stringify({"name": name, "email": email, "password": password, "gender": gender, "city": city});

/*
var obj = {};
$('#test-form input,select').each(function () {
	if (this.type === "radio") {
		return this.checked ? (obj[this.name] = this.value) : "";
	} else return obj[this.name] = this.value;
}
);
json = JSON.stringify(obj);
*/

// 显示结果:
if (typeof (json) === 'string') {
	console.log(json);
}
else {
	console.log('json变量不是string!');
}