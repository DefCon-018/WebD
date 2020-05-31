let str = "adjfja";         // 3 level from null
let num = 455;              // 3 level from null
let bool = true;           //3 level from null
let arr = [1, 2, 3];       // 3 level from null
let obj = {a: 10, b: 30};   //2 level from null
let f = function fun() {    // 3 level from null
    console.log('yay!');
}

console.log('type of String', typeof(String)); 
console.log('type of number', typeof Number);
console.log('type of Boolean', typeof Boolean);
console.log('type of Array', typeof Array);
console.log('type of object', typeof Object);
console.log('type of function', typeof Function)

console.log(str.__proto__.__proto__ == obj.__proto__);
console.log(num.__proto__.__proto__ == obj.__proto__);
console.log(bool.__proto__.__proto__ == obj.__proto__);
console.log(arr.__proto__.__proto__ == obj.__proto__);
console.log(f.__proto__.__proto__ == obj.__proto__);

// everything is indirectly inherited from the same thing that object is inherited from
console.log(str.__proto__ == String.prototype);
console.log(num.__proto__ == Number.prototype);
console.log(obj.__proto__ == Object.prototype);
console.log(arr.__proto__ == Array.prototype);
console.log(bool.__proto__ == Boolean.prototype);

let x = Object.create(Boolean.prototype);
typeof x;
console.log(x.__proto__ == bool.__proto__);
console.log(typeof bool)

String.prototype.charAt = function(){
    return 'x';
}
console.log(str.charAt(3))

Array.prototype.joinOriginal = Array.prototype.join;
Array.prototype.join = function(){
    console.log('array called on', this)
    return this.joinOriginal(...arguments);
}

arr.join(',');