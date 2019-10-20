import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Question from './components/question/Question';
import Profile from './components/profile/Profile';
import Nav from './components/nav/nav';

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="content">
        <Switch>
          <Route path="/question" component={Question} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
