import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace.jsx'
import UserPlaces from '../src/places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNaigation';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from '../src/shared/context/auth-context'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
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
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact={true}>
          <Users />
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces />
        </Route>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }


  return (
    <AuthContext.Provider value={
      {
        isLoggedIn: isLoggedIn,
        logIn: logIn,
        logOut: logOut
      }
    }>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            {routes}
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
