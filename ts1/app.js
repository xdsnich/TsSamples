var num = 10;
var isTrue = true;
var letter; //UNION TYPE
letter = null;
var value = undefined;
var single = 'str';
single = 13;
var people = [];
people.push('max');
var value1 = 122;
var nums = [1, 3, 32]; //GENERIC ARRAYS
var user = ['admin', 'admin123']; //TUPLES
var user1 = {
    name: 'xdxd',
    age: 11
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Downd"] = 1] = "Downd";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;
var core = 12;
console.log(core);
//SOME TYPESOF FUNCTIONS
function getReady(isReady) {
    console.log(isReady);
}
;
var logError = function (isLogged, message) {
    throw new Error(message);
};
function add(x, y) {
    return undefined;
}
var multiply = function (x, y) {
    return x * y;
};
