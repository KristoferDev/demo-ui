import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link className="nav-link" to="/question">Questions</Link>
        <Link className="nav-link" to="/profile">Profile</Link>
        <Link className="nav-link" to="/admin">Admin</Link>
      </li>
    </ul>
  </div>
)

export default withRouter(Nav);
