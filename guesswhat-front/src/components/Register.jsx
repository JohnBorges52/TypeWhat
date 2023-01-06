import React from 'react'
import { useRef, useState } from 'react'
import'../styles/register.scss'
import axios from 'axios'

export default function Register() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()

  const [errorMessage, setErrorMessage] = useState("")
  

  let onSubmit= (e) => {
    e.preventDefault();
    let email = emailRef.current.value
    let password = passwordRef.current.value
    let passwordConfirmation = passwordConfirmationRef.current.value

    if(password === passwordConfirmation) {
      
    axios.get("/users/registeruser", {params: {email, password}})
      .then((res)=> {
        // if(res){}
        
        console.log(res)
      })
    
      } else{
      setErrorMessage("Password does not match")
      console.log("Password does not match!")
    }
    

  }




  return (
    <div className='bg-register-container'> 


    <div className="register-wrapper">
    <div className='pic-register-page'>
      <h1 className='register-h1'>REGISTER</h1>
    </div>
    
    <div className='register-container'>
      
    <div className='registration-profile-gif'></div>
    <span className='register-title'>Sign-Up</span>

     <div className='input-label-container'>

    <input className='form--input' type="email" placeholder=" " name="email" required ref={emailRef} />
    <label className="form--label" >E-mail</label>
     </div>

     <div className='input-label-container'>

    <input className='form--input' type="password" placeholder=" " name="password" required  ref={passwordRef} />
    <label className="form--label" >Password</label>
    </div>

    <div className='input-label-container'>

    <input className='form--input' type="password" placeholder=" " name="password" required ref={passwordConfirmationRef} />
    <label className="form--label" >Confirmation</label>
    </div>

    <div className='register-btn-container'>
      
    <button className='btn-link' href="/register" onClick={(e)=>{onSubmit(e)}}><i></i> REGISTER </button>
    </div>

    </div>
    



    </div>
    </div>
  )
}
