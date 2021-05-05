import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Main from './pages/main/main.component';
import LandingPage from './pages/landing-page/landing-page.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignOut from './pages/sign-out/sign-out.component';

function App() {
  return (
    <div className="App">
      <Main />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/signout' component={SignOut} />
      </Switch>
      {/* <Route exact path='/profile' component={ProfilePage} /> */}
    </div>
  );
}

export default App;
