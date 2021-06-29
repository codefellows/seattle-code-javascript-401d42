# Class 12: Socket.io / WebSockets / TCP

## Warm Up

`$$` CSS selector function

```javascript

class DOMList {
  constructor(NodeList) {
    this.nodes = NodeList;
  }
}

// Keian / Sunny
function $$(items) {

  // typeof(items) - deal with 2 possible conditions: "string" / "object"
  
  let matches = document.querySelectorAll(items);

  return new DOMList(matches);
  // matches.forEach(item => {
  //   item.nodes;
  // });
}


// is 'items' a tag / class / id?
document.getElementsByTagName()


$$('button');

```

## Code Review

Pub / Sub Node events

* Using Node events module to program a set of modules.
  * Hub "server"
  * Driver
  * Vendor

## TCP / WebSockets

* TCP connection specifics:
  * HTTP was open and closed communication: open a request, connection is closed with a response.
  * TCP is opened and stays until a `closed` event occurs.
    * That connection is `full duplex`.
      * buffers of data can be sent both directions in real time.
* Client / Server relationship
  * Clients can talk to the server anytime they remain connected.
  * Servers can talk to any client (often multiple) as long as they are connected at the same time.

## Socket.io

* Library that creates Web Socket connections over TCP
  * Web Sockets contain a header to upgrade an HTTP connection into a sustained TCP connection.
  * Web Socket deal directly with buffered streams.
  * Socket.io will allow our TCP connection to act much like our Node Events.
    * Define / subscribe to our own event names.
    * We don't have deal with encoded buffers.
  * 2 libraries: client library, and a server library.
