# Class 36: Redux!!

## Announcements

* Lightening Talks resume tomorrow: Tek with React Suspense.
* Whiteboard finals starting next week.
  * Jacob will schedule the final for you with another instructor.
  * If there is any time concerns let me know.
  * Between 35 minutes to an hour (depending on the instructor).
  * If you do not do well you get chances to retake, if you are putting in effort we will always give you chance to retake, should get feedback on your performance.
  * No other exam.
  * "Cracking the Coding Interview".
  * Focus on the following areas
    * Object oriented design
      * classes and constructor functions
      * abstract problem solving rather than solutions that require a lot of javascript methods.
    * focus on design patterns like
      * callbacks.
      * iteration using for loops.
      * using contextual this.
    * Make sure you are comfortable with Linked Lists, Trees, Stack, Queues, and Hash Maps.
* Second round of instructor are happening.
* I'm going out of town at the of the week.
  * Brian will be covering Thursday.

## Warm Up

* How do you traverse a Linked List?
* How do you traverse a Binary Tree?
* How do you traverse a Graph?

## Redux Overview

* Global Application state management.
  * Context, being used for a `slice` of global application, but not something that is designed to be consumed by all components.
    * Short coming here is managing changes at scale, ( lots of components makeing lots of changes to contextual state ).
  * uses `actions`, `reducers`, `initial state`: use the same behavior as useReducer.
    * Multiple reducers for each slice of state.
  * Consumer Components read data and perfrom behaviors specified by a Provider component.
* Use Case: tons of components (thinking atomically) with specific jobs.
  * Redux provides a single source of truth for application state.

## Redux Providers and Consumers

* The same relationship is required when Consumer components are reading from a Redux store.
  * A redux `Provider` needs to exist at the parent level of any `Consumers`
  * The `Provider` needs a prop that has a configured redux store.
  * Each Consumer needs to map behaviors to the component functions either using `hooks` or the `connect` function from `react-redux`.
