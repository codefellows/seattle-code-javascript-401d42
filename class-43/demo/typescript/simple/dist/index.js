"use strict";
var word = 'Jacob';
function hello(arg) {
    return "Hello " + arg;
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.id = 1;
    }
    return User;
}());
var Jacob = new User('Jacob');
var greeting = hello(Jacob.name);
console.log(greeting);
