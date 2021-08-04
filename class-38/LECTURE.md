# Class 38: Redux Thunk

## Redux middleware

* Redux will let you define a function ( or multiple functions ) that will run BEFORE an action hits the reducer.

* Our middleware needs to tell redux, we have a promise thats running, let;s wait until it's finished and then the reducer will recieve an action.

* In order to apply middleware, we need to reconfigure our store (store/index.js);
  * We'll use a functino from redux called `applymiddleware`

## Thunk

* Wait until something is finished, and inject a subroutine.
* When we pass an async async into redux, we will tell redux:
  * if the thing I passed is a function, pass di

## LAB Notes:

 origin: `https://api-js401.herokuapp.com`
  products: `https://api-js401.herokuapp.com/api/v1/products`
  categories: `https://api-js401.herokuapp.com/api/v1/categories`
    * these should be able to proces `GET` `PUT` POST` and `DELETE`.
    * PUT and will need and `id` as parameter.
      * `categories/:categoryId`
