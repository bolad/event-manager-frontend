import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import axios from 'axios'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss'

const SignUp = () => {
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

    axios.post("https://bld-events-api.herokuapp.com/api/registrations", {
      user: {
        email,
        password,
        password_confirmation
      }
    },
    { withCredentials: true }
    ).then(response => {
      console.log("registration response", response)
      const user = response.data
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )

      setUser(user)
      history.push("/");
      
    }).catch(error => {
      console.log("registration error", error)
    })
    
  }

  return (
    <div className="sign-up">
      <h1 className="text-heading">I don't have an account</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
          <FormInput
              name='email'
              type='email'
              onChange={handleChange}
              value={email}
              label='email'
              required
          />
          <FormInput
              name='password'
              type='password'
              value={password}
              onChange={handleChange}
              label='password'
              required
          />
          <FormInput
              name='password_confirmation'
              type='password'
              value={password_confirmation}
              onChange={handleChange}
              label='confirm password'
              required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
    </div>
  )
}
export default SignUp;
