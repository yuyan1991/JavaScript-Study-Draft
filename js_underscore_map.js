'use strict';

var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};

var upper = _.map(obj, function (value, key) {
    return key.toUpperCase() + " = " + value.toUpperCase();
});

var upper2 = _.mapObject(obj, function (value, key) {
    return value.toUpperCase();
});
console.log(JSON.stringify(upper2));
console.log(JSON.stringify(upper));