import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace.jsx'
import UserPlaces from '../src/places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNaigation';
import UpdatePlace from './places/pages/UpdatePlace';


const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>
          <Route path='/:userId/places' exact>
            <UserPlaces />
          </Route>
          <Route path='/place/new' exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
