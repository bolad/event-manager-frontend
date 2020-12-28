import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const  SignIn = () => {
  const [user, setUser] = useState(null)
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  })

  const { email, password, password_confirmation } = userCredentials;

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target
    setUserCredentials({...userCredentials, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("https://bld-events-api.herokuapp.com/api/sessions", {
      user: {
        email,
        password,
        password_confirmation
      }
    },
    { withCredentials: true }
    ).then(response => {
      console.log("signin response", response.data)
      const user = response.data
  
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )

      setUser(user)
      history.push("/");
      
    }).catch(error => {
      console.log("signin error", error)
    })
  }

  return (
    <div className="sign-in">
      <h1 className="text-heading">I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
        />
        <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
        </div>
      </form>
    </div>
  )
    
}

export default SignIn;