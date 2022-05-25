import React, { useState, useRef } from 'react';

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    job: '',
  });

  const nameRef = useRef('');
  const jobRef = useRef('');

  const submitForm = (e) => {
    e.preventDefault();
  };

  const changeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          ref={nameRef}
          value={formValues.name}
          onChange={changeForm}
          required
        />
        <label htmlFor='name'>Job: </label>
        <input
          type='text'
          name='job'
          ref={jobRef}
          value={formValues.job}
          onChange={changeForm}
          required
        />
        <button type='submit'>Submit Form</button>
      </form>
      <p>Name:{formValues.name}</p>
      <p>Nameref:{nameRef.current.value}</p>
      <p>Job:{formValues.job}</p>
      <p>Jobref:{jobRef.current.value}</p>
    </div>
  );
};

export default Form;
