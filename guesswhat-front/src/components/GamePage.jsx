import React from 'react'
import'../styles/gamepage.scss'
import axios from 'axios'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
import $ from 'jquery';




export default function GamePage() {

    const[currentWord, setCurrentWord] = useState("");
    const[userWord, setUserWord] = useState("");


    function makeNewPosition(){
    
      // Get viewport dimensions (remove the dimension of the div)
      var h = $('.container').height() - 50;
      var w = $('.container').width() - 50;
      
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      
      return [nh,nw];    
      
  }
  
  function animateDiv(myclass){
      var newq = makeNewPosition();
      $(myclass).animate({ top: newq[0], left: newq[1] }, 700,   function(){
        animateDiv(myclass);        
      });
      
  };


    useEffect(()=> {

      const userWordInput = document.getElementById('input-word');

      if(currentWord !== "" && userWord !== "" && currentWord === userWord){
        userWordInput.value = "";
        console.log("ACERTOU");
        inputRef.current.focus();
        generateRandomWord();
      }

    },[userWord])

    const inputRef = useRef(null)


    const generateRandomWord = () => {

    const url = "https://api.api-ninjas.com/v1/randomword"
    axios.get(url, {
      headers: { 'X-Api-Key': 'Z32yDdS8nvmr8jzg+ypYTQ==zfzLwMaoKnftCKOB'}
    })
    .then((res)=>{
      setCurrentWord(res.data.word)
     
    })
  }



  return (
    <div className='gamepage-container'>

    <div className='randomwords-container'>
      
      <div className='currentWord'> {currentWord}</div>
      
    </div>
    <button className='startgame-btn' onClick={()=>{generateRandomWord() }}> START </button>
    

    <div className='typewords-container'> 

      <input className='input-words' id="input-word" ref={inputRef} type="text" onChange={(e)=>{setUserWord(e.target.value)}}  />

        
    </div>







    </div>
  )
}
