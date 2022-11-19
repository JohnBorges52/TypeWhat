import React from 'react'
import'../styles/register.scss'

export default function Register() {
  return (
    <div className='register-container'>
      

    <label className="register--label" >E-mail</label>
    <input className='register--input' type="email" placeholder="youremail@email.com" name="email" required />

    <label className="register--label" >Password</label>
    <input className='register--input' type="email" placeholder="youremail@email.com" name="email" required />
    
    <label className="register--label" >Password Confirmation</label>
    <input className='register--input' type="email" placeholder="youremail@email.com" name="email" required />

    <div className='register-btn-container'>
      
    <button className='register-btn'>Register</button>
    </div>

    



    </div>
  )
}
