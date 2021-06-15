# Class 02: Express

## Warm Up

* Shredder library
  * Create a .map method that takes an `array` / `object` and a `callback`, returns a new structure with the results of the callback.

* lorenzo: what does map mean??
```js


// define the function that is being used below
let $$ = {};

$$.map = function (arr, callback) {
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

//  .map being used
$$.map([1,2,3,4], (val, idx) => {

  return val + val;

});

```

## Week Overview

Creating a scalable, testable, REST API that perfroms CRUD on a Postgres SQL Database.

* What do you mean by scalable
  * Code will be modular
    * Change code without things breaking.
    * Add features easily without changing too much of the existing code base.
  * Why test?
    * Tests ensure quality for everything that we provide a test for.
  * Postgres
    * Data layer.
    * Class based interface / service that you might see out in the wild.

## Express

### Routing

How does express know which callback / function to use when a request is made

### Middlewares

* a function that runs between other functions.

The function parameters, and operations that express can use.
