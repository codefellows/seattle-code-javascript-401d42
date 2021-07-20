# Class 27: `useState` Hook and Testing

## Warm Up

* See whiteboard: https://projects.invisionapp.com/freehand/document/9AXMJoPlW
  * How would you perform a Post Order Traversal on a Binary Tree.

## Code Review

* What went well?
  * How was the refactor?
* Was there anything you struggled with?
  * Tim: Creating a react app from scratch.
    * For projects that have starter code, you should be able to `npm install` at the root of the stater code folder to make things work.
    * STEP 1: Create a repo on github.
    * STEP 2: Clone that repo to your local machine. (an empty repo a this point).
    * STEP 3: If you have starter code: copy all the contents from starter code into your repo, and `npm install`.
    * STEP 3.1: If you have to initialize a new React APP. use `create-react-app` at the root of the repo:
      * make sure you can `cd` into the newly created directory and `npm start`.
    * STEP 3.2: Move you nested project files to the root of your github repo directory, remove the `app-name` folder.
      * If you can't npm start, delete and `-lock` and your node_modules and re-install.
  * Deploying on Netlify.
  * Sunny: Handling Browser Events.
    * Tek: e.preventDefault() - TypeError: e.preventDefault is not a function.
      * SCSS linting errors, from React.
        * need 'node-sass' in dependencies.

## `useState` and functional component state

* See typed demo.

## Testing Components

### RTL (React testing Library).

* BDD (behavior driven testing) ask yourself how your app should behave.
  * What should the user see.
  * What should the user be able to interact with.
  * What should happend after the uer interacts with something.
* Do your components fullfill the feature they are build for.
