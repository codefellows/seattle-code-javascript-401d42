# Warm Up - Navigation History

Many Browsers include the ability to navigate forwards and backwards to any URL that was visited by the user.  In order to implement this feature, many tools implement a `stack`.  We can imagine how this might work by using a Navigation class:

## Navigation Class

The following class is able to make a fake http request to any url that is fed to the `fetch` method. We can also implement the `backwards` and `forwards` methods that would allow the user to `fetch` from the last URL that was fetched from:

```javascript

class Navigation {
  constructor() {
    // the current url we might want to navigate to.
    this.url = null;
  }

  fetch(url) {
    return {
      url: url,
      response: {
        text: 'loading...',
        data: 'loading...', 
      },
    }
  }

  // heads to the last url that was fetched.
  backwards() {
    // 
  }

  // heads to the URL that was navigated to before navigating backwards.
  forwards() {

  }
}

```

If every URL we visit in the `request` method is stored in a `stack` we can effectively store the order of URLs that are visited.  This will allow us to `pop` URLs visited off the stack and use them in a `fetch` request.  If we create a second `stack` we can also add any URL that we navigated `backwards` with, this will allow the user to navigate `forwards` to the any URL nagivated `backwards`.

Using 2 stacks, implement the `backwards` and `forwards` methods so that we can navigate to any previous URLs used in the `fetch` method.
