import React from 'react'
import'../styles/gamepage.scss'
import axios from 'axios'
import { useState, useRef } from 'react'
import { useEffect } from 'react';
import $ from 'jquery';





export default function GamePage() {

    const[currentWord, setCurrentWord] = useState("");
    const[userWord, setUserWord] = useState("");
    const [playing, setPlaying] = useState(false)
    const [counter, setCounter] = useState(0)

    const [mileSecond, setMileSecond] = useState(999)
    const [second, setSecond] = useState(9)
    const [minute, setMinute] = useState(1)

    const [runningTimer, setRunningTimer] = useState(false)


    useEffect(()=>{
      animateDiv()
    },[])


   const makeNewPosition = () => {

    let wordHeight = $(".currentWord").height();
    let wordWidth = $(".currentWord").width();
      
    let boxWidth = $(".randomwords-container").width() - wordWidth;
     
    let min = $(".randomwords-container").offset().top
    
    
    let max = $(".bottom-limit").offset().top - (wordHeight +(wordHeight/2) );

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
        setCounter(counter+1);
        animateCounter();
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
      setCurrentWord(res.data.word);
      inputRef.current.focus();
     
    })
  }

    if(runningTimer) {

      setTimeout(()=>{
        if(playing && mileSecond > 100){
          setMileSecond(mileSecond-1)
        }
        if(playing && mileSecond === 100){
          setMileSecond(1000)
        }
        
      }, 0.9)
      
      setTimeout(()=>{
        if(playing && mileSecond > 0) {
          setSecond(second-1)
        }
        if(playing && minute > 0 && second === 0){
          setMinute(minute-1)
          setSecond(5)
          
        }
        if(playing && minute === 0 && second === 0 ){
          setSecond(0)
          setMileSecond(0)
          setMinute(0)
          setPlaying(false)
          
        }
      },2000)
    }

    const formatTime = (time) => {
      return String(time).padStart(2, '0')
    }

    const animateCounter = () => {
      const counterElement = document.getElementById('counter-id');
      counterElement.classList.add("counter-animation");

      const pictureElement = document.getElementById('animated-pic-id');
      pictureElement.classList.add("points-span-animated");
      
      setTimeout(()=>{
      counterElement.classList.remove("counter-animation");
      pictureElement.classList.remove("points-span-animated");

      },1000)

    }


  return (
    <div className='gamepage-container'>

    <div className='randomwords-container'>
      
      <div className='currentWord'> {currentWord} </div>
      
    </div>
    <div className='bottom-limit'></div>

    {!playing ? 
    <button className='startgame-btn' onClick={()=>{generateRandomWord(); setPlaying(true); setRunningTimer(true); setMileSecond(999); setSecond(888); setMinute(1); setCounter(0) }}> START </button>
    :
    <div className='game-information'>
      <span className='timer'>{formatTime(minute)} : {formatTime(second)} : {mileSecond}</span>
      <div className='game-information-points'>


        <span className='points-span' id='animated-pic-id'></span>


        <span className='counter' id='counter-id'> {counter}</span>
      </div>
    </div>
    
    }

    <div className='typewords-container'> 

      <input className='input-words' id="input-word" ref={inputRef} type="text" onChange={(e)=>{setUserWord(e.target.value)}}  />

        
    </div>

    </div>
  )
}
