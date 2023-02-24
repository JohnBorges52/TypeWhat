import React, { useEffect } from 'react'
import '../styles/mainpage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import Hamburger from 'hamburger-react'
import Login from './Login'
import GamePage from './GamePage'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'
import TopNavBar from './TopNavBar'

export default function MainPage() {
  const [isOpen, setOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(true)
  const [isGame, setIsGame] = useState(false)

  const [user, loading] = useAuthState(auth)

  const addLoginClass = () => {
    let element = document.getElementById('blur-container')
    element.classList.add('blured-container')
    setLoginOpen(true)
  }
  const removeLoginClass = () => {
    let element = document.getElementById('blur-container')
    element.classList.remove('blured-container')
    setLoginOpen(false)
  }

  const addDisplayClass = () => {
    let element = document.getElementById('login-wrapper-display')
    element.classList.add('login-wrapper-display')
    setLoginOpen(true)
  }
  const removeDisplayClass = () => {
    let element = document.getElementById('login-wrapper-display')
    element.classList.remove('login-wrapper-display')
    setLoginOpen(false)
  }

  useEffect(() => {
    setLoginOpen(false)
  }, [])

  return (
    <>
      {/* <div className="bg-home-container"> */}
      <div className="mainpage--container" id="blur-container">
        <div className="top-bar-container">
          <div className="title-container">
            <FontAwesomeIcon icon={faFeather} className="fa-feather" />
            <div className="h1-title-container">
              <h1 className="title-mainpage">Type</h1>
              <h1 className="title-mainpage">What</h1>
            </div>
          </div>
          <TopNavBar
            loggedIn={user}
            play={() => {
              addLoginClass()
              setIsGame(true)
            }}
            login={() => {
              addLoginClass()
              removeDisplayClass()
            }}
          />
        </div>

        <div className="content-container">
          <div className="content-container-left">
            <div className="content-container-left-text">
              <h4> Where</h4>
              <span className="title-game-name"> Typing Fast</span>
              <h3> is better </h3>
            </div>
            <div className="content-container-left-subtext">
              <h5>
                Test yor habilities to see how many words you can type in one
                minute and climb your way to the top of players. You will need
                to test your typing habilities as well as your vision in order
                to see the words moving.
              </h5>
            </div>
            <div className="content-container-left-subtext-links">
              {!user && (
                <>
                  <span
                    className="a-link-login btn-login"
                    onClick={() => {
                      addLoginClass()
                      removeDisplayClass()
                    }}
                  >
                    Login now
                  </span>
                  <a className="a-link-login btn-register" href="/register">
                    Register here
                  </a>
                </>
              )}
              {user && (
                <>
                  <span
                    className="a-link-login btn-login"
                    href="#"
                    onClick={() => {
                      addLoginClass()
                      setIsGame(true)
                    }}
                  >
                    PLAY NOW
                  </span>
                  <span
                    className="a-link-login btn-register"
                    href="#"
                    onClick={() => {
                      auth.signOut()
                    }}
                  >
                    Sign Out
                  </span>
                </>
              )}
            </div>
          </div>

          <svg
            height="0"
            width="0"
            class="svg-clip"
            style={{ position: 'absolute' }}
          >
            <defs>
              <clipPath id="clip" clipPathUnits="objectBoundingBox">
                <path d="M1,.21 Q1,0 .81,.09L.187,.4 Q0,.5 .187,.59L.81,.90 Q1,1 1,.79Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="content-container-right">
            <div className="triangle"></div>
            <div className="triangle-behind"> </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* --------------LOGIN---------------------------- */}
      {/* {loginOpen && 
 <Login 
  onCloseLogin={()=> {
  removeLoginClass()
 }}
 />} */}

      <Login
        onCloseLogin={() => {
          addDisplayClass()
          removeLoginClass()
        }}
      />

      {isGame && (
        <GamePage
          onClose={() => {
            setIsGame(false)
            addDisplayClass()
            removeLoginClass()
          }}
        />
      )}
    </>
  )
}
