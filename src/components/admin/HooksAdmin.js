import React, { useState, useEffect } from 'react';
import './Admin.scss';

const Admin = props => {
  const [leaderState, setLeader] = useState([]);
  const [createLeader, setCreateLeader] = useState();

  const fetchLeader = () => {
    fetch(`http://localhost:5000/api/partyleader`)
      .then(result => result.json())
      .then(data => setLeader(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchLeader();
    console.log('running')
  }, [leaderState]);

  const handleChange = (e) => {
    setLeader(e.target.value);
  }

  return (
    <div className="admin, container">
      <h1>Partiledare</h1>
      <form>
        {leaderState.map((n, i) => (
          <ul key={i}>
            <h2>{i + 1}.</h2>
            <li><input type="text" value={n.name} onChange={handleChange} /></li>
            <li><input type="text" value={n.age} onChange={handleChange} /></li>
            <li><input type="text" value={n.living} onChange={handleChange} /></li>
          </ul>
        ))}
        <button>Post</button>
      </form>
    </div>
  )
};

export default Admin;
