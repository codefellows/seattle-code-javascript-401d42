import {useState} from 'react';
import './App.css';

import Counter from './components/Counter.js';
import Person from './components/Person.js';

function App() {

  // anytime setClicks is called, react re-renders our App component.
  const [clicks, setClicks] = useState(0);

  return (
    <div className="App">
      <Counter
        number={clicks}
        handleClick={setClicks}
      />
      <Person
        age={20}
      />
    </div>
  );
}

export default App;
