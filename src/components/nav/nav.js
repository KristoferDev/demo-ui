import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './nav.scss';

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#ff9900' }
  } else {
    return { color: "#ffffff" }
  }
}

const Nav = ({ history }) => (
  <div className="nav">
    <ul>
      <li>
        <Link style={isActive(history, "/question")} className="nav-link" to="/question">Frågor</Link>
      </li>
      <li>
        <Link style={isActive(history, '/profile')} className="nav-link" to="/profile">Profil</Link>
      </li>
      <li>
        <Link style={isActive(history, '/admin')} className="nav-link" to="/admin">Admin</Link>
      </li>
    </ul>
  </div >
)

export default withRouter(Nav);
