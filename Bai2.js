let digits = [1,2,3];
let res = (+digits.join("") + 1).toString().split('');
console.log(res.map(value => parseInt(value)));