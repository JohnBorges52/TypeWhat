import React from 'react'
import'../styles/login.scss'



export default function Login() {
  return (
    <div className='login-container'>
      

    <label className="login--label" >E-mail</label>
    <input className='login--input' type="email" placeholder="youremail@email.com" name="email" required />

    <label className="login--label" >Password</label>
    <input className='login--input' type="email" placeholder="youremail@email.com" name="email" required />

    <div className='login-btn-container'>
      
    <button className='login-btn'>Login</button>
    </div>

    



    </div>
  )
}
