# LAB - Component Composition

**RESTy Phase 3:** Add conditional rendering to RESTy

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Continue working in your 'resty' repository, in a branch called 'composition'

## Business Requirements

Refer to the [RESTy System Overview](../../apps-and-libraries/resty/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 3 Requirements

In this phase of the RESTy build, we will be adding some more fidelity to the application, including a menu, history, and an "in-progress" spinner.

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to be able to use all REST methods so that I can do more than just **get** data
- As a user, I want a simple list of all previous queries I've run so that I can easily see which queries I've run before
- As a user, I want to click on an old query and have my selections appear in the form for me, so I don't have to re-type them
- As a user, I want to see a "loading" indicator while RESTy is fetching data so that I know it's working on my request

## Technical Requirements / Note

Update the RESTy application as follows:

- Add support for **PUT**, **POST**, and **DELETE** in your remote calls
- Whenever a query is successful (results come back), store the query parameters in local storage
  - Store the URL, Method, and the Body (if any)
  - Store only unique, successful queries

Home Page

- Add a simple history list to the left side of the application
  - List all previous queries, showing the method and the URL
  - When a user clicks a previous query, populate the RESTy forms with the query information
- Completely hide the output area (Headers & Results) when there are none to display
- Display any fetch/load errors in place of the results area, if they occur
- Add a "Loading" indicator while fetching
  - When the user clicks the "Go!" button, show a loading icon on the page
  - When the fetching of results is complete, remove the loading icon and show the results

### Application Architecture Notes

- Alter the `<Results />` component as follows:
  - Add support for all REST methods
  - Use a conditional component such as `<If>` to hide/show the results pane when there are none
  - Use a conditional component such as `<If>` to hide/show a loading image during the fetch process
- Create a new `<History/>` inline component that will:
  - Show a simple history list on the main page
  - Allow a user to click and re-run any previous query

## Tests

For this lab, tests should assert the full functionality of the API calls. Use a mock to simulate the actual call, but wire your tests up to expect that the visual changes (wait state and results state) are there for your users.

- Install and setup a mock server into your test file using the `msw/node` library
- Assert that the spinner is rendered upon initial submit
- Assert that the spinner is replaced with results when they arrive

## Deployment

Deploy your application to either [Netlify](https://www.netlify.com/) or AWS Amplify

## Stretch Goal

Add support for **basic** and **bearer** authorization headers

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations
