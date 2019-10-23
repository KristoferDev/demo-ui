import React, { useState } from 'react';
import { createLeader } from './apiAdmin';

const Admin = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setError('')
    setName(e.target.value)
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    setError('')
    setSuccess(false)
    createLeader(e).then(data => {
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
      <button>Skicka</button>
    </form>
  )
}

export default Admin;
