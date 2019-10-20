import React, { useState, useEffect } from 'react';

const Admin = props => {
  const [leaderState, setLeader] = useState([]);
  const [createLeader, setCreateLeader] = useState();

  const fetchLeader = () => {
    fetch(`http://localhost:5000/api/partyleader`)
      .then(result => result.json())
      .then(data => setLeader(data))
      .catch(error => console.log(error));
  };
  /*
    const postLeader = () => {
      fetch(`http://localhost:5000/api/partyleader?query=${createLeader}`, {
        method: 'post',
        body: JSON.stringify()
      })
        .then(response => response.json())
        .then(data => setLeader(data))
        .catch(error => console.log(error));
    };
  */
  useEffect(() => {
    fetchLeader()
  }, [createLeader]);

  const handleChange = (e) => {
    setCreateLeader(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className="admin">
      <h1>This is admin</h1>
      <form onSubmit={handleSubmit}>
        {leaderState.map((n, i) => (
          <>
            <input key={n + i} type="text" value={createLeader} onChange={handleChange} />
            <input key={n + i} type="text" value={createLeader} onChange={handleChange} />
            <input key={n + i} type="text" value={createLeader} onChange={handleChange} />
            <br />
          </>
        ))}
        <button>Post</button>
      </form>
    </div>
  )
};

export default Admin;

/*
      <label>Name: </label><input value={leaderState.profileLeader.name} />
      <label>Age: </label><input value={leaderState.profileLeader.age} />
      <label>Living: </label><input value={leaderState.profileLeader.living} />
            {leaderState.map((n, i) => (
        <h1 key={i}>{n.name}</h1>
      ))}
*/