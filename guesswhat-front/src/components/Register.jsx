import React from 'react'
import { useRef } from 'react'
import'../styles/register.scss'
import axios from 'axios'

export default function Register() {

  const emailRef = useRef()
  const passwordRef = useRef()


  let onSubmit= (e) => {
    e.preventDefault();
    let email = emailRef.current.value
    let password = passwordRef.current.value

  }




  return (
    <div className='register-container'>
      

    <label className="register--label" >E-mail</label>
    <input className='register--input' type="email" placeholder="youremail@email.com" name="email" required ref={emailRef} />

    <label className="register--label" >Password</label>
    <input className='register--input' type="email" placeholder="youremail@email.com" name="email" required  ref={passwordRef} />
    
    <label className="register--label" >Password Confirmation</label>
    <input className='register--input' type="email" placeholder="youremail@email.com" name="email" required />

    <div className='register-btn-container'>
      
    <button  className='btn-link' href="/register"> REGISTER </button>
    </div>

    



    </div>
  )
}
