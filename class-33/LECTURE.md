# Class 33: Auth Context and Login Components

[Class Whiteboard](https://projects.invisionapp.com/freehand/document/fuZzvOpkL)

## Lightening Talk

* Angular JS: Louis
  * Angular works with vanilla HTML, CSS, and JavaScript.
    * No virtual DOM, everything is able to run directly in the actual DOM.
  * Framework for MVC applications
  * 2 way data binding,
    * data can flow both ways to get more specific MVC behaviors
  * Better dependency managment.

## Code Review

* Context Global State
  * Theme
  * Settings
    * Number of Items to show: number
    * Show Completed Items: true / false
  * Form updates context:
    * Provider needs to be a `parent` component of the form.
    * Form calls out to the provider to update the value.
  * Provider needs to provide Setters to the consumer.
    * Behaviors allow values to update without giving direct access to setters.

## Auth Context

* A Context Provider that defines all the authentication and authorization features of our application.

## Auth / Auth Components

* Components that Consume the Auth Context, these actually perform the behaviors defined within our Context Provider.
  * `Login` contains a form that can execute Login, and Logout.
  * `Auth` contains conditionally rendering logic that will hide and show `children` based on `isAuthorized` and `isAuthenticated`.
