import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
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
    axios.post("http://localhost:3001/api/registrations", {
      user: {
        email,
        full_name,
        password,
        password_confirmation
      }
    },
    { withCredentials: true }
    ).then(response => {
      console.log("registration response", response)
    }).catch(error => {
      console.log("registration error", error)
    })
    event.preventDefault();
  }

  return (
    <div className="sign-up">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <input
                name='email'
                type='email'
                onChange={handleChange}
                value={email}
                label='email'
                required
            />
            <input
                name='password'
                type='password'
                value={password}
                onChange={handleChange}
                label='password'
                required
            />
            <input
                name='password_confirmation'
                type='password'
                value={password_confirmation}
                onChange={handleChange}
                label='confirm password'
                required
            />
            <div className="buttons">
                <button type="submit">Sign Up</button>
            </div>
        </form>
    </div>
  )
}
export default SignUp;
