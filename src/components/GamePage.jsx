import React from 'react'
import '../styles/gamepage.scss'
import { useState, useRef } from 'react'
import { useEffect } from 'react'
import $ from 'jquery'
import PopUp from './PopUp'
import Countdown from './Countdown'
import EndGame from './EndGame'

export default function GamePage(props) {
  var randomWords = require('random-words')

  const [currentWord, setCurrentWord] = useState('')
  const [userWord, setUserWord] = useState('')
  const [playing, setPlaying] = useState(false)
  const [counter, setCounter] = useState(0)

  const [isPopUp, setIsPopUp] = useState(false)

  const [currentState, setCurrentState] = useState('StartBtn')

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

    var speedModifier = 0.7

    var speed = Math.ceil(greatest / speedModifier)

    return speed
  }
  const inputRef = useRef(null)

  useEffect(() => {
    const userWordInput = document.getElementById('input-word')

    if (currentWord !== '' && userWord !== '' && currentWord === userWord) {
      userWordInput.value = ''
      setCounter(counter + 1)
      inputRef.current.focus()
      generateRandomWord()
    }
  }, [userWord])

  const generateRandomWord = () => {
    setCurrentWord(randomWords())
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (playing && minute === 1 && second === 0) {
        setMinute(minute - 1)
        setSecond(59)
      }
      if (playing && minute === 0) {
        setSecond(second - 1)
      }

      if (playing && minute === 0 && second === 0) {
        setSecond(0)
        setMinute(0)
        setPlaying(false)
        setCurrentWord('')
        let data = localStorage.getItem('userInfo')
        data = JSON.parse(data)
        data['score'] = data['score'] > counter ? data['score'] : counter
        localStorage.setItem('userInfo', JSON.stringify(data))
        setCurrentState('GameEnded')
      }
    }, 1000)
  }, [second, minute])

  const formatTime = time => {
    return String(time).padStart(2, '0')
  }

  const startGame = () => {
    const element = document.getElementById('future-transparent')
    element.classList.add('transparency-100')
    setSecond(0)
    setMinute(0)
    setCounter(0)

    setCurrentState('Playing')
    setTimeout(() => {
      setPlaying(true)
      setRunningTimer(true)
      setSecond(30)
      setMinute(0)
      setCounter(0)
      element.classList.remove('transparency-100')
    }, 8000)
  }

  return (
    <>
      <div className="gamepage-container">
        <div className="mobile-block">
          This game only works on desktop mode.
          <div className="block-icon"></div>
        </div>
        {isPopUp && (
          <PopUp
            options={true}
            message={'Do you really want to cancel?'}
            onConfirm={() => {
              setIsPopUp(false)
              setCurrentState('GameEnded')
              setCurrentWord('')
              setPlaying(false)
              document.getElementById('whiteborder').style.border = 'none'
            }}
            onCancel={() => {
              setIsPopUp(false)
            }}
            confirmMessage={'Yes'}
            confirmCancel={'Cancel'}
          />
        )}

        <span className="close-btn-span" onClick={props.onClose}>
          ×
        </span>

        <div className="randomwords-container" id="whiteborder">
          <div className="start-btn-container">
            {currentState === 'StartBtn' && (
              <button
                className="start-btn"
                onClick={() => {
                  generateRandomWord()
                  startGame()
                  setCurrentState('Loading')
                  document.getElementById('whiteborder').style.border =
                    '1px solid #ffffff'
                  setTimeout(() => {
                    inputRef.current.focus()
                  }, 10)
                }}
              >
                START
              </button>
            )}

            {currentState === 'Loading' && <Countdown />}

            {currentState === 'GameEnded' && (
              <EndGame
                points={counter}
                play={() => {
                  generateRandomWord()
                  startGame()
                  setCurrentState('Loading')
                  document.getElementById('whiteborder').style.border =
                    '1px solid #ffffff'
                  setTimeout(() => {
                    inputRef.current.focus()
                  }, 10)
                }}
              />
            )}
          </div>

          <div className="currentWord" id="future-transparent">
            {currentWord}
          </div>
        </div>
        <div className="bottom-limit"></div>

        {(currentState === 'Loading' || currentState === 'Playing') && (
          <>
            <div className="game-information">
              <div className="timer-container">
                <div className="clock-pic-span"></div>
                <span className="timer">
                  {formatTime(minute)} : {formatTime(second)}
                </span>
              </div>
              <div className="game-information-points">
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
                placeholder="Type here"
                onChange={e => {
                  setUserWord(e.target.value)
                }}
              />
            </div>
          </>
        )}
      </div>
    </>
  )
}
