import React, { useState, useEffect } from 'react';

const Admin = props => {
  const [leaderState, setLeader] = useState([]);

  const fetchLeader = () => {
    fetch('http://localhost:5000/api/partyleader')
      .then(result => result.json())
      .then(data => setLeader(data))
      .catch(error => console.log(error));
  };
  useEffect(() => {
    fetchLeader()
  });

  return (
    <div className="admin">
      <h1>This is admin</h1>
      {leaderState.map((n, i) => (
        <h1 key={i}>{n.name}</h1>
      ))}
    </div>
  )
};

export default Admin;

/*
      <label>Name: </label><input value={leaderState.profileLeader.name} />
      <label>Age: </label><input value={leaderState.profileLeader.age} />
      <label>Living: </label><input value={leaderState.profileLeader.living} />
*/