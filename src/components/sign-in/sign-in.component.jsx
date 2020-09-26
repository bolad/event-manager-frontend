import React, {useState} from 'react';
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

    const handleChange = (event) => {
      const { name, value } = event.target
      setUserCredentials({...userCredentials, [name]: value})
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      axios.post("http://localhost:3001/api/sessions", {
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
        setUserCredentials({
          email: "",
          password: "",
          password_confirmation: ""
        })
      }).catch(error => {
        console.log("signin error", error)
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