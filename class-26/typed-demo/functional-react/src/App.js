import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import Header from './Header.js';

// let state = {} => react is not aware of this variable being importantt to a component.

// The only difference from a syntax point of view is that a class needs tobe instantiated, a function just needs to be executed
class AppClass extends React.Component {

  // this.setState() to update state, and re-render component updates, we need to use this.
  constructor(props) {
    super(props); // this function, passes values to any class extension we are using. We need to run the `super` function before we define properties on 'this'.
    this.state = {} // define our state as some value
  }

  // defining function has a specific syntax, or else we lose 'this'
  handleForm = (e) => {
    this.setState({ input: e.target.value });
  }

  // all our logic lives on 'this'
  render() {
    return (  
      // Here is where our JSX goes
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


// One function that returns JSX
function AppFunction() {

  // we have no 'this' so we have to change our syntax a bit.
  // In order to trigger re-render and React events, React has given us Hooks
      // hooks "hook" into the React API, and allow the library to re-render and perfrom any maintaince tasks.
      // hooks are just functions that we can define and run when DOM events.

  let [state, setState] = useState({}); // this returns a 'getter' and a 'setter', argument for `useState` is used as initial state value.
  // setState('jacob'); //  state === 'jacob'
  // let [input, setInput] = useState('');
  // let [image, setImage] = useState('');
  // let [text, setText] = useState('');

  const changeTitle = (title) => {
    document.title = title;
  }

  return (
    // Here is where our JSX goes
    <div className="App">
      <Header greeting={'Jacob'} changeTitle={changeTitle}/>
    </div>
  );
}

export default AppFunction;
