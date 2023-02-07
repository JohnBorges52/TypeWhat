import React from 'react'
import '../styles/login.scss'
import '../styles/register.scss'
import '../styles/mainpage.scss'

export default function Login(props) {
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
          <button type="button" class="login-with-google-btn">
            Log in with Google
          </button>
          <button class="loginBtn loginBtn--facebook">
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  )
}
