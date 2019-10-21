import React, { useState, useEffect } from 'react';
import { createLeader } from './apiAdmin';

const Admin = () => {
  const [values, setValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setError('')
    setName(e.target.name)
    setAge(e.target.age)
    setLiving(e.target.living)
  }

  const clickSubmit = e => {
    e.preventDefault();
    setError('')
    setSuccess(false)
    createLeader({ name, age, living }).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setError('');
        setSuccess(true);
      }
    });
  };

  const showSuccess = () => {
    if (success) {
      return <h3 className="success">Partiledare skapad</h3>
    }
  }


  const showError = () => {
    if (error) {
      return <h3 className="danger">Partiledare ska vara uniq</h3>
    }
  }

  return (
    <form onSubmit={clickSubmit}>
      {showSuccess}
      {showError}
      <input type="text" onChange={handleChange} value={name} autoFocus />
      <input type="text" onChange={handleChange} value={age} autoFocus />
      <input type="text" onChange={handleChange} value={living} autoFocus />
      <button>Skicka</button>
    </form>
  )
}

export default Admin;