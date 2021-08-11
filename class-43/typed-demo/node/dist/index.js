"use strict";
// typescript would really prefer that we declare a type for "person" and a return value.
function greeting(person) {
    return "hello " + person.name; // if we try to use a property that is not defined on the interface, typescript will let us know.
}
var jacob = {
    name: 'Jacob',
    id: 1,
};

var phrase = greeting(jacob);
console.log(phrase);
