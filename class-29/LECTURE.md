# Class 29: useReducer

## Warm Up

* Searching an object for a nested property / key name.
* Return the value of the propery / key or undefined if it doesn't exist.

```javascript

let person = {
  age: 50,
  hair: false,
  pet: {
    name: 'rocky'
  }
}

let spouse = $$.get(person, 'spouse.name'); // undefined
let pet = $$.get(person, 'pet.name'); // rocky

```

## Code Review

* Testing the API call.
  * MSW for mocking the API call.
* useEffect should make the call when a state value is changed.
* Clicking on spans / inputs.

## Reducers

A function, that sysmatically / standardized updates state (some object / compound data structure)
3 pieces to using a reducer:

* reducer function, that when given the appropriate data / values, is responsiblle for updating the state.
* initial State, this is the original shape of our state, think property names / keys, and their values.
* lastly are actions, these are functions that are run by components to update the state managed by the reducer.
  * functions that return objects with 2 parts
    * type: tells the reducer what event has occured.
    * payload: any data associated with the event.
* The reason we use reducers, is to keep our state a specific shape.
