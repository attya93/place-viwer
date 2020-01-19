import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace.jsx'
import MainHeader from './shared/components/Navigation/MainHeader'


const App = () => {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/" exact={true}>
          <Users />
        </Route>
        <Route path='/place/new' exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
