# LAB - Context API

**To Do List Manager Phase 3:** Add some configuration settings to the application

In this phase, we'll be adding some top-level settings for the application, so that the user can make some display choices that the app will use by default.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'context' and continue to work in your 'todo' repository.

## Business Requirements

Refer to the [To Do System Overview](../../apps-and-libraries/todo/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 3 Requirements

In Phase 3, we'd like to extend the functionality of the application by potentially allowing users to set a few configuration options to change how the application behaves. The user stories from **Phases 1 and 2** remain unchanged. For this phase, we are now adding the following new user stories.

- As a user, I would like to see my To Do List Items a few at a time so that I don't have to wade through them all
- As a user, I would like my default view to only be "Incomplete" Items so that I can quickly determine what I have to do.
- As a user, I would like my list sorted by difficulty so that I can more easily prioritize
- As a user, I would like the option to change my default preferences with regards to how many Items I see per page, which items are filtered, and how they are sorted

![To Do with Pagination](todo.png)

## Technical Requirements / Notes

Technical requirements for the core application are unchanged from the prior phases, with the following additions and notes:

Based on global configuration

- Show a maximum of a certain number of items per screen
- Hide or show completed items in the list
- Sort the items based on any of the keys (i.e. difficulty)

Implement this using `context`

- Create a `context` for managing application settings and provide this at the application level
- Display or Hide completed items (boolean)
- Number of items to display per screen (number)
- Default sort field (string)
- You may manually set (hard code) those state settings in the context provider during development

Pagination Notes:

- Only display the first `n` items in the list, where `n` is the number to display per screen in your context.
  - If you have more than `n` items in the list, add a button labeled `Next` that will replace the list with the next `n` items in the list.
  - If you are past the first `n` items (i.e. on page 2 or higher), add a button labeled `Previous` that will replace the list with the previous `n` items in the list.

### Stretch Goals

- Provide a "Settings" page for your users (Use Routing!)
- Allow the user to change any of the settings you are supporting in a form
  - Note: Your context will need to expose methods in state...
- Save their settings in local storage
- Read local storage at application start to set the settings rather than hard-coding them

### Testing

- Tests should assert all behavioral functionality
- Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.
  - Can they see context?
  - Can they interact via published functions?

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations
