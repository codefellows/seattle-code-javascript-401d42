import { useState } from 'react';


function Form(props) {

  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRequest({url, method});
  }

  return(
    <form onSubmit={handleSubmit}>
      <input data-testid="url" type='text' onChange={(e) => setUrl(e.target.value)} />
      <button data-testid="get" value="GET" onClick={(e) => setMethod(e.target.value)}>GET</button>
      <button value="POST" onClick={(e) => setMethod(e.target.value)}>POST</button>  
      <button value="PUT" onClick={(e) => setMethod(e.target.value)}>PUT</button>
      <button value="DELETE" onClick={(e) => setMethod(e.target.value)}>DELETE</button>
    </form>
  )
}

export default Form;
