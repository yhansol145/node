// underscore -> '_' 로 사용 가능
var _ = require('underscore');
var arr = [3,6,9,1,12];

console.log(arr[0]);
console.log(_.first(arr)); // 첫번째 원소 가져옴

console.log(arr[arr.length-1]);
console.log(_.last(arr)); // 마지막 원소 가져옴