# LAB - Component Based UI

**RESTy Phase 1:** Begin work on the RESTy API testing application

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

Create a UML diagram of the **RESTy** system on a whiteboard before you start

> Create a new repository for this project, called 'resty' and work in a branch called 'base'

## Business Requirements

Refer to the [RESTy System Overview](../../apps-and-libraries/resty/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 1 Requirements

Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect an easy to read and understand user interface so that I can use the application intuitively
- As a user, I want to enter the URL to a REST API and select the REST method to use to access it
- As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I've requested

And as developers, here are the high level development tasks that address the above end user requirements

- Create a visually appealing site with a Header, Footer, and a large content area
- Create a form that asks for a URL
- Create buttons that let the user choose from the REST methods (get, post, put, delete)
- When the form is filled out, and the button is clicked, display the URL and the method chosen

![Preview](preview.png)

## Technical Requirements / Notes

Create the RESTy application as follows:

- Begin with creating your application using `create-react-app`
- Write an `App` component that serves as the container for all sub-components of this application
  - The app should import an `.scss` file to serve as the base design for the site
  - Import and render `Header`, `Footer`, and `Form` components from other files using ES6 `import` syntax
- The `<Header>` component should use it's own `.scss` file for styling
- The `<Footer>` component should use it's own `.scss` file for styling
- The `<Form>` component should:
  - Use it's own `.scss` file for styling
  - Accept user input for a URL and store it in state
  - Allow the user to choose a method and store it in state
    - This can be done with radio buttons or clickable elements
  - Display the user's choices on screen in a separate `<div>` or `<section>` under the form

### Stretch Goals

- Don't show the user's choices until the form is submitted
  - How will you store/use state to achieve this goal?
- Stylize the method options so the user knows which one has been selected

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations

> NOTE: For this assignment, **testing is not required**
