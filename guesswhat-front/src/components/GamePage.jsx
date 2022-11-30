import React from 'react'
import'../styles/gamepage.scss'
import axios from 'axios'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
import $ from 'jquery';




export default function GamePage() {

    const[currentWord, setCurrentWord] = useState("");
    const[userWord, setUserWord] = useState("");

    useEffect(()=>{
      animateDiv()
    },[])


   const makeNewPosition = () => {

    let wordHeight = $(".currentWord").height();
    let wordWidth = $(".currentWord").width();
      
    let boxWidth = $(".randomwords-container").width() - wordWidth;
     
    let min = $(".randomwords-container").offset().top
    
    
    let max = $(".startgame-btn").offset().top - (wordHeight +(wordHeight/2) );

    let maxHeigh = Math.floor(Math.random() * (max-min));
    let maxWidth = Math.floor(Math.random() * boxWidth);

    return [maxHeigh,maxWidth]
   }
   
   
   function animateDiv(){
    let newq = makeNewPosition();
    let oldq = $('.currentWord').offset();
    let speed = calcSpeed([oldq.top, oldq.left], newq);
    $('.currentWord').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
   };

   function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.5;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
  }
   




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
    <button className='startgame-btn' onClick={()=>{makeNewPosition() }}> test </button>
    

    <div className='typewords-container'> 

      <input className='input-words' id="input-word" ref={inputRef} type="text" onChange={(e)=>{setUserWord(e.target.value)}}  />

        
    </div>







    </div>
  )
}
