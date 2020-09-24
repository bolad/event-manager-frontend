import React, {useState} from 'react';
import axios from 'axios'

import FormInput from '../form-input/form-input.component'

import './sign-in.styles.scss';

const  SignIn = () => {
    
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    full_name: "",
    password: "",
    password_confirmation: "",
  })

    const { email, full_name, password, password_confirmation } = userCredentials;

    const handleChange = (event) => {
      const { name, value } = event.target
      setUserCredentials({...userCredentials, [name]: value})
    }

    const handleSubmit = (event) => {
      axios.post("http://localhost:3001/api/sessions", {
        user: {
          email,
          full_name,
          password,
          password_confirmation
        }
      },
      { withCredentials: true }
      ).then(response => {
        console.log("signin response", response)
      }).catch(error => {
        console.log("signin error", error)
      })
      event.preventDefault();
      setUserCredentials({
        email: "",
        full_name: "",
        password: "",
        password_confirmation: ""
      })
    }

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
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
              name='full name'
              type='text'
              handleChange={handleChange}
              value={full_name}
              label='full name'
              
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
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    )
    
}

export default SignIn;