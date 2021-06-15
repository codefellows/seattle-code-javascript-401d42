'use strict';

let $$ = {}

$$.map = function(structure,  callback) {
  // arr === [1,2,3,4]
  // callback  === (val, idx) => {return val + val}
  // what happens here????

  const result = [];

  // arr.forEach()

  for (let i = 0; i < arr.length; i++) {
    // result.push(callback(arr[i], i));
    result[i] = callback(arr[i], i);
  }

  return result;
}

$$.map([1,2,3,4], (val,idx) => {

});
