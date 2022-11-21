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
    <div className='register-container'>
      
     <div className='input-label-container'>

    <input className='register--input' type="email" placeholder=" " name="email" required ref={emailRef} />
    <label className="register--label" >E-mail</label>
     </div>

     <div className='input-label-container'>

    <input className='register--input' type="email" placeholder=" " name="email" required  ref={passwordRef} />
    <label className="register--label" >Password</label>
    </div>

    <div className='input-label-container'>

    <input className='register--input' type="email" placeholder=" " name="email" required ref={passwordConfirmationRef} />
    <label className="register--label" >Confirmation</label>
    </div>

    <div className='register-btn-container'>
      
    <button className='btn-link' href="/register" onClick={(e)=>{onSubmit(e)}}> REGISTER </button>
    </div>

    



    </div>
  )
}
