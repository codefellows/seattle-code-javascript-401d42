# Class 31: Context API

## Announcements

* Feedback:
  * 10 minute break rooms ( no likey ).
  * Labs last week felt not as high as the previous quality.
    * a little more of this as half of this week is brand new to the curriculum.
  * Lightening Talks:
    * Tim: Vue JS (Tuesday 07/27)
    * Louis: Angular (Wednesday 07/28)
    * Keian: Gatsby 9(Thursday 07/29)

## Warm Up

* See class whiteboard

## React Review

* What is a Hook?
  * Dion: a way for React to use state variables in function components.
    * Sunny: a hook is a way for functional components to use lifecycle features.
  * Jacob: a hook a function, that "hooks" in a react features (React will re-render when certian things happen).
    * We want to get react to "react".
  * What do (most) hook return (if they return anything)?
    * Dion: the behavior of our hooks causes a re-render.
    * Cullen: Getter and a Setter.
      * Louis: getter state of the invocation / setter is function that can change the vaue of the getter.
  * Changing the document.title.
  * useState: a way for React to use state variables in function components.
  * useEffect: a trigger for a callback, before / after a render, once state variable changes.

```javascript
useEffect(() => {}, [stateInput]);
```

  * useReducer: another way of handling state, better for complex versions of state.
    * reducer function: handles the action type and payload, to systematicaly update the initial.
    * actions: Perfroms the functionality?  The thing that the component / other function passes into the reducer. contains the instructions for the reducer.
    * shape the state (initialState)

```javascript


const initialState = {
  title: 'my super sweet title'
}

const reducer(state, action) {
  switch(action.type) {

    case 'CHANGE_TITLE':
      return {title: action.payload};
    default:
      return state;
  }
}

const changeTitleAction(title) {
  return {
    type: 'CHANGE_TITLE',
    payload: title
  }
}

function Main() {

  const [state, dispatch] = useReducer(reducer, initialState);

  dispatch(changeTitleAction('Jacob'));

  return (
    <>
      <h1>{state.title}</h1>
    </>
  )
}


```

## Global State

State that is shared between up to, all of the components rendered in your application. This is the source of truth for values that your application NEEDs to run properly / provide a solution to your users.
  * Children opt-into global state access, instead of relying on direct props being passed from parent to child.

## Context API

* the React feature that let's use use global
  * Provider and Consumer components in React.
    * Provider define state, and pass that into a Prop.
    * Consumer just need to import the context object, and looks at it's state.
