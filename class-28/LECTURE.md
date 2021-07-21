# Class 28: useEffect Hook, React Component Lifecycle

## Warm Up

* See whiteboard

## Code Review

* Code Challenge: Pseudocode, turning pseudo-code into syntactically correct code.

```javascript

// ALGORIHM Mergesort(arr)???

function Mergesort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = n/2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);

    Mergesort(left);
    Mergesort(right);
    Merge(left, right, arr);
  }
}

function Merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i ++;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }

    k = k + 1;
  }

  if (i = left.length) {
    // set right side to remaining entries
  } else {
    // set left side to remaining enries
  }
}

```

* Testing: TDD / BDD.
  * TDD vs BDD.
  * What does each component do for the User?
    * Does it display data that hey put into a form?
    * Maybe it just needs a clickable button.

* What are some tests that you wrote?
  * Assert that data is rendered on form submission

```javascript

describe('testing the App component', () => {
  test('App renders form data after submission', () => {
    // See a UI, needs a form
    render(<App />); // show the UI on the screen
    // UI should have a submission button
    let button = screen.getByTestId('form');
    // regardless of input, button is clicked and data is rendered.
    fireEvent.click(button);
    let output = screen.getByTestId('output');

    expect(output).toHaveTextContent('pokemon');
  });
});
// http requests will totally break our tests.
```

## Component LifeCycle

Each React Component goes through a specific set of events before it's rendered.

LifeCycle Events:

1. Component is about to mount (rendered on thte webpage).

* Maybe we want to fetch data.
* Is a User logged in.

2. A Component `state` value or `prop` value was updated.

* When an input changes, validate the input (valid email);
* when a parent component updates it's value.

3. When a Component unmounts (leaving the DOM).
  
* unsubscribe from event handlers.
* Cleanup actions, logout, send notifications, let users know someone is no longer online.

## `useEffect` Hook

* A function of React, that allows us to run code when certain `effects` (mutation) occur.
  * 2 parameters.
    * a function to run when the effect has occured.
    * an array of values, tto watch for changes in.
      * [items, input] => the first function willl run whenever `item` is mutated.
    * If you pass an empty array, you will only run the function right before component mounts.
    * If you supply no array at all, it will run whenever any small update occurs.
    * If you return a function (instead of just defining one) as the first parameter, the function will run only on unmount.

`useEffect(() => { return callAPI() });`
