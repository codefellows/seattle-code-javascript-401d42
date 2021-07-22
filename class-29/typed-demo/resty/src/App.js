import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Form from './components/Form.js';
import Results from './components/Results.js';

function App() {

  let [request, setRequest] = useState({});
  let [response, setResponse] = useState({});

  useEffect(() => {
    // API call
    if (Object.keys(request).length) axios(request).then(res => {
      setResponse(res);
    });
  }, [request]);

  return (
    <div className="App">
      <Form handleRequest={setRequest}/>
      <Results response={response}/>
    </div>
  );
}

export default App;
