# Class 06: Basic Authentication

## Week 1 Feedback

* Lab Documentation and Parts of Curriculum confusing
  * It's not incredibly clear the lab outcomes.
  * Point out places where lab language and demos match up.
    * I'm going to come up with an Example of what the outcome of the lab should look like.
* Workload is a lot
  * Career coaching assignments mixed in with technical.
    * Point out where changes are happening in the workload.
* Jump from concept to concept.
  * This is work in progress, Im going attempt to make large context switches a litle more graceful.
    * I'll call these out if they are occuring.

## Warm Up

Creating "Card" UI elements, that displays "content" associated with a "data" set.

What did we come up with!

* Tek, Tim, Alex:
  * Seperated into `divs` for Card
    * <img> with id for image
    * <div> for text

## Conceptual Review

* See Class whiteboard!
  * Route: a method and and endpoint, that points to a function (or set of functions) in express.
  * Middleware: a function that sits in between the request and response, calls the next function to move to another middleware or route handler.

## Authentication VS Authorization

* Authentication: Who is making a request (Auth0 => Token "Bearer")
  * Basic Authentication: using 2 string (username / email, and password).
    * Authorization header: contais encoded string hat includes username / email and password.
    * Authorization middleware: checks the header for an authorization object
      * verirfy the presence of a user by the given username / email.
      * validate authenticity of their password, using encryption library methods.
* Authenthorization: Are you allowed to do what you are requested.

## Auth Middleware / Routes
