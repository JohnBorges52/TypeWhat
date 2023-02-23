import React, { useEffect, useState } from 'react'
import '../styles/login.scss'
import '../styles/register.scss'
import '../styles/mainpage.scss'

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../utils/firebase'

export default function Login(props) {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [validation, setValidation] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    if (!userInfo) {
      localStorage.setItem('userInfo', JSON.stringify({}))
    }
  }, [])

  //Login with Email

  const emailLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      window.location.reload()
    } catch (error) {
      setErrorMessage(true)
      switch (error.code) {
        case 'auth/invalid-email':
        case 'auth/wrong-password':
        case 'auth/user-not-found': {
          setValidation('Wrong email address or password.')
          break
        }
      }
    }
  }

  //Sign in with Google
  const googleProvider = new GoogleAuthProvider()
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      localStorage.setItem(
        'userInfo',
        JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          score: 0
        })
      )
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
        {errorMessage && (
          <span className="password-message-span">{validation}</span>
        )}

        <div className="input-label-container">
          <input
            className="form--input"
            type="email"
            placeholder=" "
            name="email"
            required
            onChange={e => {
              setErrorMessage(false)
              setLoginEmail(e.target.value)
            }}
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
            onChange={e => {
              setErrorMessage(false)
              setLoginPassword(e.target.value)
            }}
          />
          <label className="form--label">Password</label>
          <a className="forgotPsw" href="#">
            Forgot Password?
          </a>
        </div>

        <div className="login-btn-container">
          <button
            className="btn-login-registration"
            onClick={() => {
              emailLogin()
            }}
          >
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
        </div>
      </div>
    </div>
  )
}
