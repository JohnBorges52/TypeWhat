import React from 'react'
import { useState } from 'react'
import '../styles/register.scss'

import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../utils/firebase'
import PopUp from './PopUp'

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const [isPopUpSuccess, setIsPopUpSuccess] = useState(false)
  const [validation, setValidation] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      if (user) {
        setTimeout(() => {
          setIsPopUpSuccess(false)
        }, 2500)
        setIsPopUpSuccess(true)
      }
    } catch (error) {
      setErrorMessage(true)

      if (error.code == 'auth/email-already-in-use') {
        setValidation('The email address is already in use')
      } else if (error.code == 'auth/invalid-email') {
        setValidation('The email address is not valid.')
      } else if (error.code == 'auth/operation-not-allowed') {
        setValidation('Operation not allowed.')
      } else if (error.code == 'auth/weak-password') {
        setValidation('The password is too weak.')
      }
    }
  }

  return (
    <div className="bg-register-container">
      {isPopUpSuccess && (
        <PopUp message={'You successfully created an account.'} />
      )}
      <div className="register-wrapper">
        <div className="pic-register-page">
          <h1 className="register-h1">REGISTER</h1>
        </div>

        <div className="register-container">
          <div className="registration-profile-gif"></div>
          <span className="span-title">Sign-Up</span>
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
                setRegisterEmail(e.target.value)
                setErrorMessage(false)
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
                setRegisterPassword(e.target.value)
              }}
            />
            <label className="form--label">Password</label>
          </div>
          <div className="register-btn-container">
            <button
              className="btn-login-registration"
              onClick={() => {
                register()
              }}
            >
              REGISTER
            </button>
          </div>
          <span className="or-span">OR</span>
          <div className="social-btns">
            <button type="button" class="login-with-google-btn">
              Login in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
