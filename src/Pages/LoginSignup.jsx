import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Nmae'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Countinue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsigup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Countinuing,I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup