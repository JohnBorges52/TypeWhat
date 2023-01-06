import React from 'react'
import'../styles/login.scss'
import'../styles/register.scss'



export default function Login() {
  return (
    <div className='bg-login-container'>

    <div className="login-wrapper">

      


    <div className='login-container'>
    <div className='profile-gif'></div>
      
    <div className='input-label-container'>

    <input className='form--input' type="email" placeholder=" " name="email" required />
    <label className="form--label" >E-mail</label>

    </div>

    <div className='input-label-container'>

    <input className='form--input' type="password" placeholder=" " name="password" required />
    <label className="form--label" >Password</label>
    
    </div>

    <div className='login-btn-container'>
      
    <button  className='btn-link' href="/login"> LOGIN </button>
    </div>

    


    </div>

    </div>
    </div>
  )
}
