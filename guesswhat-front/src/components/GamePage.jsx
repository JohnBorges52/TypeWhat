import React from 'react'
import '../styles/gamepage.scss'
import axios from 'axios'
import { useState, useRef } from 'react'
import { useEffect } from 'react'
import $ from 'jquery'
import PopUp from './PopUp'

export default function GamePage(props) {
  const [currentWord, setCurrentWord] = useState('')
  const [userWord, setUserWord] = useState('')
  const [playing, setPlaying] = useState(false)
  const [counter, setCounter] = useState(0)

  const [isPopUp, setIsPopUp] = useState(false)

  const [currentState, setCurrentState] = useState('StartBtn')

  const [mileSecond, setMileSecond] = useState(0)
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)

  const [runningTimer, setRunningTimer] = useState(false)

  useEffect(() => {
    animateDiv()
  }, [])

  const makeNewPosition = () => {
    let wordHeight = $('.currentWord').height()
    let wordWidth = $('.currentWord').width()

    let boxWidth = $('.randomwords-container').width() - wordWidth

    let min = $('.randomwords-container').offset().top

    let max = $('.bottom-limit').offset().top - (wordHeight + wordHeight / 2)

    let maxHeigh = Math.floor(Math.random() * (max - min))
    let maxWidth = Math.floor(Math.random() * boxWidth)

    return [maxHeigh, maxWidth]
  }

  function animateDiv() {
    let newq = makeNewPosition()
    let oldq = $('.currentWord').offset()
    let speed = calcSpeed([oldq.top, oldq.left], newq)
    $('.currentWord').animate(
      { top: newq[0], left: newq[1] },
      speed,
      function () {
        animateDiv()
      }
    )
  }

  function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1])
    var y = Math.abs(prev[0] - next[0])

    var greatest = x > y ? x : y

    var speedModifier = 0.5

    var speed = Math.ceil(greatest / speedModifier)

    return speed
  }

  useEffect(() => {
    const userWordInput = document.getElementById('input-word')

    if (currentWord !== '' && userWord !== '' && currentWord === userWord) {
      userWordInput.value = ''
      console.log('ACERTOU')
      setCounter(counter + 1)
      animateCounter()
      inputRef.current.focus()
      generateRandomWord()
    }
  }, [userWord])

  const inputRef = useRef(null)

  const generateRandomWord = () => {
    const url = 'https://api.api-ninjas.com/v1/randomword'
    axios
      .get(url, {
        headers: { 'X-Api-Key': 'Z32yDdS8nvmr8jzg+ypYTQ==zfzLwMaoKnftCKOB' }
      })
      .then(res => {
        setCurrentWord(res.data.word)
        inputRef.current.focus()
      })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (playing) {
        setSecond(second - 1)
        console.log(second)
      }
      if (playing && minute > 0 && second === 0) {
        setMinute(minute - 1)
        setSecond(59)
      }
      if (playing && minute === 0 && second === 0) {
        setSecond(0)
        setMileSecond(0)
        setMinute(0)
        setPlaying(false)
      }
    }, 1000)

    // return () => {
    //   clearTimeout(timer)
    // }
  }, [second])

  const formatTime = time => {
    return String(time).padStart(2, '0')
  }

  const animateCounter = () => {
    const counterElement = document.getElementById('counter-id')
    counterElement.classList.add('counter-animation')

    const pictureElement = document.getElementById('animated-pic-id')
    pictureElement.classList.add('points-span-animated')

    setTimeout(() => {
      counterElement.classList.remove('counter-animation')
      pictureElement.classList.remove('points-span-animated')
    }, 1000)
  }

  const hideElement = () => {
    const element = document.getElementById('futureHiddenElement')
  }

  const startGame = () => {
    const element = document.getElementById('future-transparent')
    element.classList.add('transparency-100')

    setTimeout(() => {
      setPlaying(true)
      setRunningTimer(true)
      setSecond(59)
      setMinute(1)
      setCounter(0)
      setCurrentState('Playing')
      element.classList.remove('transparency-100')
    }, 8000)
  }

  return (
    <div className="gamepage-container">
      {isPopUp && (
        <PopUp
          message={'Do you really want to cancel?'}
          onConfirm={() => {
            setIsPopUp(false)
            setCurrentState('StartBtn')
            setCurrentWord('')
          }}
          onCancel={() => {
            setIsPopUp(false)
          }}
        />
      )}
      <div className="close-btn-container">
        <span onClick={props.onClose}>×</span>
      </div>

      <div className="randomwords-container">
        <div className="start-btn-container">
          {currentState === 'StartBtn' ? (
            <button
              className="start-btn"
              onClick={() => {
                generateRandomWord()
                startGame()
                setCurrentState('Loading')
              }}
            >
              START
            </button>
          ) : (
            <></>
          )}

          {currentState === 'Loading' ? (
            <div className="countdown">
              <div className="countdown-circle">
                <span className="countdown-span">3</span>
                <span className="countdown-span">2</span>
                <span className="countdown-span">1</span>
                <span className="countdown-span">GO!</span>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="currentWord" id="future-transparent">
          {currentWord}
        </div>
      </div>
      <div className="bottom-limit"></div>

      <div className="game-information">
        <div className="timer-container">
          <div className="clock-pic-span"></div>
          <span className="timer">
            {formatTime(minute)} : {formatTime(second)}
          </span>
        </div>
        <div className="game-information-points">
          <span className="points-span" id="animated-pic-id"></span>

          <span className="counter" id="counter-id">
            {counter}
          </span>
          <div className="option-btn-div">
            <div
              className="option-btn-container"
              onClick={() => {
                inputRef.current.focus()
                generateRandomWord()
              }}
            >
              <span className="jump-pic-span"></span>
              <span className="option-btn-text">JUMP</span>
            </div>

            <div
              className="option-btn-container stop-bg"
              onClick={() => setIsPopUp(true)}
            >
              <span className="stop-pic-span"></span>
              <span className="option-btn-text"> STOP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="typewords-container">
        <input
          className="input-words"
          id="input-word"
          ref={inputRef}
          type="text"
          onChange={e => {
            setUserWord(e.target.value)
          }}
        />
      </div>
    </div>
  )
}
