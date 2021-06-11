# LAB: Message Queues

**CAPS Phase 3:** Complete work on a multi-day build of our delivery tracking system, adding queued delivery

In this phase, we'll be adding a layer of complexity to our application. Rather than just "fire" events and hope that our vendors and drivers respond to them, we're going to implement a "queue" system so that nothing gets lost. Every event sent will be logged and held onto by the server until the intended recipient acknowledges that they received the message. At any time, a subscriber can get all of the messages they might have missed.

In this final phase, we'll be building out the queue itself, getting our vendors subscribed to it, and focusing on just one event - `delivered` to set the pattern for subscribing to, and working with queues.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'queue' and continue to work in your 'caps' repository.

## Business Requirements

Refer to the [CAPS System Overview](../../apps-and-libraries/caps/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 3 Requirements

Build a set of applications to manage deliveries made by CAPS Drivers. This will simulate a delivery driver delivering a package and scanning the package code. Retailers will be able to see in their dashboard or log, a list of all packages delivered in real time. Should a delivery driver deliver many packages while the retailer is not connected to the dashboard, the retailer should be able to "catch up" and see a list of all missed events before resuming real-time monitoring.

Here are the high level stories related to this new set of requirements

- As a vendor, I want to "subscribe" to "delivered" notifications so that I know when my packages are delivered
- As a vendor, I want to "catch up" on any "delivered" notifications that I might have missed so that I can see a complete log
- As a driver, I want to "subscribe" to "pickup" notifications so that I know what packages to deliver
- As a driver, I want to "catch up" on any "pickup" notifications I may have missed so that I can deliver everything
- As a driver, I want a way to "scan" a delivery so that the vendors know when a package has been delivered

And as developers, here are some of the development stories that are newly relevant to the above

- As a developer, I want to create a system of tracking who is subscribing to each event
- As a developer, I want to place all inbound messages into a "queue" so that my application knows what events are to be delivered
- As a developer, I want to create a system for communicating when events have been delivered and received by subscribers
- As a developer, I want to delete messages from the queue after they've been received by a subscriber, so that I don't re-send them
- As a developer, I want to create a system for allowing subscribers to retrieve all undelivered messages in their queue

## Technical Requirements / Notes

High level view of the basic data/workflow for this application. Here are the base components we will need to build

- A Queue Server Hub that
  - Keeps a log of the delivery, keyed by retailer and event type
  - Broadcasts "Delivery Confirmations" to retailers
- Client (Vendor) Applications that retailers would run, which subscribe to the Queue so that they can be alerted when a delivery was made
  - When a client receives a message, it will need to let the hub server know that it was received
    - The hub server should then delete the message
  - Client can ask for all undelivered messages from the server
    - Each of these would also need to be acknowledged upon receipt

### Message Queue Server

- Create a new node application called `queue-server`
- Using socket.io, listen on your chosen port, in the 'caps' namespace
- Create an **undelivered message queue** for storing queued messages
  - i.e. an object, keyed by retailer and then by event name, then by message id
  - This could also be as simple as an simple array or as complex a real database, etc.
- Add an event handler for `received`
  - When this event is heard on the server, assume it's the client telling you they got a message
  - The payload should include the client id, event name, and message id, so that you can **delete** it from the queue
- Add an event handler for `getAll`
  - The payload should include the client id and event name
  - When this event is heard on the server, find each of the messages in the queue for the client, for the event specified
  - Go through each of the entries for the client/event in the queue (if any) and broadcast them to the client
- Add an event handler for package delivery: `delivered`
  - This is our actual application logic (finally)
  - When this event is triggered:
  - Add the message immediately to the queue
  - Broadcast the same event, with the following payload to all subscribers

    ```javascript
    {
      messageID: "Unique-Message-ID,
      payload: ORIGINAL.PAYLOAD
    }
    ```

### Client / Subscriber Applications for Vendors

- Create a 2 applications that subscribe to the `delivered` event
  - `acme-widgets`
  - `1-206-flowers`
- On startup, your client applications should request all events from the server that are in your queue (events/messages you've not yet received)
- Upon handling any `delivered` event
  - Log a custom message to the console
  - Let the queue server know that your application handled this event (message id) so that it can de-queue it
    - Trigger the `received` event with the correct payload to the server

## CODE QUALITY / ENGINEERING GOALS

Once you have the application fully functional, consider ways to enhance your implementation by drying out your code, and making it easier to extend in the future.

Rather than simply putting all of the required logic in every file, create a Queue class library that you can include in each of the applications (api, clients) to uniformly communicate, subscribe, etc with the Queue server. Endeavor to make integrating new client applications easy.

For example, this would be the ideal code for a client subscriber application (above). Given this as your target, how would you write the `queue.js` file noted in the code below to handle the above requirements?

```javascript
const Queue = require('./lib/queue.js');
const companyID = 'flowers-r-us';
const queue = new Queue(companyID);

queue.subscribe('delivered' delivered);
queue.trigger('getall', 'delivered');

function delivered(payload) {
  console.log('Flowers Were Delivered', payload.code);
}
```

### Testing

- Start all 3 servers
  - Queue Server
  - Both Client Application Servers
- Stop one of your applications servers
  - Re-Send some requests to your queue
  - This should leave some undelivered messages
  - Re-Start the application server
    - It should do an immediate request of all queued messages and log them out normally

#### Web Server Visual Tests

- Open this [Web Application](https://javascript-401.netlify.app/)
- Setup Queue server URL in the settings tab
- This will POST to `/delivery` on <http://localhost:3000> and simulate a delivery
- If your lab is working, this app will show delivery notifications in the correct columns
  - If you leave the website and do manual deliveries as before from the CLI apps you've built and then re-visit the website later on...
    - The website will attempt to `getall` from your queue
    - It should report all deliveries that were made while you were not connected

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
