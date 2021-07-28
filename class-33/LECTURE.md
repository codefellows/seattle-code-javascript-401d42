# Class 33: Auth Context and Login Components

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

## Auth / Auth Components
