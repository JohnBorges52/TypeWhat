import React from 'react'
import'../styles/gamepage.scss'
import axios from 'axios'
import { useState } from 'react'




export default function GamePage() {

    const[currentWord, setCurrentWord] = useState("");
    const[userWord, setUserWord] = useState("");


    const randomWord = () => {

     


    // e.preventDefault(); 
    const url = "https://api.api-ninjas.com/v1/randomword"
    axios.get(url, {
      headers: { 'X-Api-Key': 'Z32yDdS8nvmr8jzg+ypYTQ==zfzLwMaoKnftCKOB'}
      
    })
    .then((res)=>{
      console.log(res.data.word)
      setCurrentWord(res.data.word)
    })
  }

  const randomWordTime = () => {
    
    setTimeout(()=>{
      randomWord();

    }, 5000)
  }





  return (
    <div className='gamepage-container'>

    <div className='randomwords-container'>
      

        <span>{currentWord}</span>
      
    </div>

    <div className='typewords-container'> 

        <input className='input-words' type="text" onChange={(e)=>{setUserWord(e.target.value); console.log(e.target.value)}}  />

        
    </div>







    </div>
  )
}
