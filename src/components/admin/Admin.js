import React, { useState } from 'react';
import './Admin.scss';
import { createLeader } from './apiAdmin';

const AddAdmin = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [leader, setLeader] = useState("");

  const handleChange = (e) => {
    setError('')
    setName(e.target.value)
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    setError('')
    setSuccess(false)
    createLeader({name}).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setError('');
        setSuccess(true);
        setLeader(name);
        //console.log('Data', data);
        //console.log('name', name);
      }
    });
  };

  const showSuccess = () => {
    if (success) {
      return <h3 className="success">Partiledare {leader} skapad</h3>
    }
  }

  const showError = () => {
    if (error) {
      return <h3 className="danger">Partiledare ska vara unik</h3>
    }
  }
/*
  const showName = () => {
    if (leader) {
      return <h3>{leader}</h3>
    }
  }
*/
  const createAdminForm = () => (
    <form onSubmit={clickSubmit}>
    <input type="text" onChange={handleChange} value={name} autoFocus />
    <button>Skicka</button>
  </form>
  )

  return (
    <div>
      {showSuccess()}
      {showError()}
      {createAdminForm()}
    </div>
  )
}

export default AddAdmin;
