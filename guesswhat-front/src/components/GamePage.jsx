import React from 'react'
import'../styles/gamepage.scss'
import axios from 'axios'




export default function GamePage() {

  



  const randomWord = (e) => {
    e.preventDefault(); 
    const url = "https://api.api-ninjas.com/v1/randomword"
    axios.get(url, {
      headers: { 'X-Api-Key': 'Z32yDdS8nvmr8jzg+ypYTQ==zfzLwMaoKnftCKOB'}
      
    })
    .then((res)=>{
      console.log(res.data.word)
    })
  }



  return (
    <div className='gamepage-container'>

    <div className='randomwords-container'>
      <button onClick={(e)=>{randomWord(e)}}>TEST</button>

      here is gonna be random words
    </div>

    <div className='typewords-container'> 

        <input className='input-words' type="text" />
        
    </div>







    </div>
  )
}
