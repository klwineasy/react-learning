import React, { useState } from 'react'

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    job: ''
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  const changeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({...formValues, [name]: value});
  }
  
  return (
    <div>
    <form onSubmit={submitForm}>
      <label htmlFor='name'>Name: </label>
      <input type='text' name='name' value={formValues.name} onChange={changeForm} required />
      <label htmlFor='name'>Job: </label>
      <input type='text' name='job' value={formValues.job} onChange={changeForm} required />
      <button type='submit'>Submit Form</button>
    </form>
    <p>Name:{formValues.name}</p>
    <p>Job:{formValues.job}</p>
    </div>
  )
}

export default Form