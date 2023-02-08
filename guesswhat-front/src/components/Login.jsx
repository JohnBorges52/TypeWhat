import React from 'react'
import '../styles/login.scss'
import '../styles/register.scss'
import '../styles/mainpage.scss'

import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../utils/firebase'

export default function Login(props) {
  //Sign in with Google
  const googleProvider = new GoogleAuthProvider()
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  //Sign in with Facebook
  const fbProvider = new FacebookAuthProvider()
  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider)
      console.log(result)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className="login-wrapper login-wrapper-display"
      id="login-wrapper-display"
    >
      <div className="login-container">
        <span className="close-login-btn" onClick={props.onCloseLogin}>
          ×
        </span>
        <div className="profile-gif"></div>
        <span className="span-title">Login</span>

        <div className="input-label-container">
          <input
            className="form--input"
            type="email"
            placeholder=" "
            name="email"
            required
          />
          <label className="form--label">E-mail</label>
        </div>

        <div className="input-label-container">
          <input
            className="form--input"
            type="password"
            placeholder=" "
            name="password"
            required
          />
          <label className="form--label">Password</label>
          <a className="forgotPsw" href="#">
            Forgot Password?
          </a>
        </div>

        <div className="login-btn-container">
          <button className="btn-login-registration" href="/login">
            LOGIN
          </button>
        </div>
        <div className="social-btns">
          <button
            onClick={googleLogin}
            type="button"
            class="login-with-google-btn"
          >
            Log in with Google
          </button>
          {/* <button onClick={facebookLogin} class="loginBtn loginBtn--facebook">
            Login with Facebook
          </button> */}
        </div>
      </div>
    </div>
  )
}
