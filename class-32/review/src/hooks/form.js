import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({}); // useState is used here, just to track values and return those as `setters`

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
