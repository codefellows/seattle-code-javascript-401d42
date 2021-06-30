# Class 13: Socket.io Messages

## Warm Up

Starting from yesterday's Warm up:

```javascript

class DOMList {
  constructor(NodeList) {
    this.nodes = NodeList;
  }

  // add methods here
  text(textContent) {
    // get or set the text property of our 'node / nodes'
    if (!textContent) {
      let results = [];
  
      this.nodes.forEach(element => {
        results.push(element.textContent);
      });
  
      return results;
    } else {
      //change the text content of each node / element:

      this.nodes.forEach(element => {  
        element.textContent = textContent;
      });
    }
  }

  html() {
    // get or set the HTML property of our 'node / nodes'
  }

  style() {
    // get or set the Style properties of our  `node / nodes `
  }
}

// Keian / Sunny
function $$(items) {

  let matches = document.querySelectorAll(items);

  return new DOMList(matches);
}

let paragraph = $$('p'); // DOMList { nodes: [Nodes] } => {innerHTML,  text, style}


// paragraph.text(); // should return the text display by our `paragraph` nodes.
console.log('Initial Text:', paragraph.text());
```

Create methods on the DOMList constructor that will allow us to `get` and `set` text and HTML of our DOM Nodes.

## Code Review

See typed-demo/caps

## Problem Solving for our CAPS Server

* What are some shortcomings of our App?
  * Messages sent over our socket server are NOT garaunteed to reach their intended client?
  * Let's build a class that can maintain a `queue` a messages that will be able to add / remove messages when we can confrm they are completed.
  * Server is able to "know" when a package was delivered, let's add this feature to our queue.
