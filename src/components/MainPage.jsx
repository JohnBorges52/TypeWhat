import React, { useEffect, useState } from 'react'
import '../styles/mainpage.scss'

import Login from './Login'
import GamePage from './GamePage'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'
import TopNavBar from './TopNavBar'

export default function MainPage() {
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

  //set the login pop up to false everytime the page is reloaded
  useEffect(() => {
    setLoginOpen(false)
  }, [])

  return (
    <>
      <div className="mainpage--container" id="blur-container">
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
                  <a className="a-link-login btn-register" href="register">
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
            <div className="image-container"></div>
            <div className="triangle-behind"> </div>
          </div>
        </div>
      </div>

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
