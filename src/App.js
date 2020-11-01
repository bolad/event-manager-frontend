import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import axios from 'axios';

import HomePage from './pages/homepage/homepage.component';
import EventsPage from './pages/events/events-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-sign-up/sign-in-and-sign-up.component';
import Footer from './components/footer/footer.component';
import EventForm from './pages/event-form/event-form.component';

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

  const checkLoginStatus = () => {
    axios.get("http://localhost:3001/api/logged_in", { withCredentials: true })
      .then(response => {
        console.log('logge in?', response)
      })
      .catch(error => {
        console.log("check logged in error", error)
      })
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
    setCurrentUser(null)
  }

  useEffect(() => {
    checkLoginStatus();
  }, [])

  return (
    <div>
    <Header 
      currentUser={currentUser}  
      handleLogout={handleLogout}
    />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/events' component={EventsPage} />
      <Route path='/event-form' component={EventForm} />
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
    {/* <Footer /> */}
  </div>
  );
  
}

export default App;
