import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import EventsPage from './pages/events/events-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-sign-up/sign-in-and-sign-up.component';

import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  // get user details from local storage
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const currentUser = JSON.parse(loggedUserJSON)
      setCurrentUser(currentUser)
    }
  }, [])

  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/events' component={EventsPage} />
      <Route 
        exact 
        path='/signin' 
        render={() =>
          currentUser ? (
            <Redirect to='/' />
          ) : (
            <SignInAndSignUpPage />
          )
        }
        />
    </Switch>
  </div>
  );
  
}

export default App;
