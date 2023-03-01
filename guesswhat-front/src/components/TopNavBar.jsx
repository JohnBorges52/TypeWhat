import React from 'react'
import '../styles/top-nav-bar.scss'

import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'

export default function TopNavBar(props) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="top-bar-container">
      <div className="title-container">
        <FontAwesomeIcon icon={faFeather} className="fa-feather" />
        <div className="h1-title-container">
          <h1 className="title-mainpage">Type</h1>
          <h1 className="title-mainpage">What</h1>
        </div>
      </div>
      <div className="title-mainpage-topnav">
        <div className="title-mainpage-topnav-right">
          <li className="hamburguer">
            <Hamburger toggled={isOpen} color="#2364af" toggle={setOpen} />
          </li>

          {isOpen && (
            <div className="small-li-container">
              <li className="small-Li">
                <a href="#" onClick={props.play}>
                  Play
                </a>
              </li>
              <li className="small-Li">
                <a
                  href="#"
                  onClick={() => {
                    alert('This feature will be implemented soon!')
                  }}
                >
                  Ranking
                </a>
              </li>
              <li className="small-Li">
                <a
                  href="https://github.com/JohnBorges52/GuessWhat/tree/master/guesswhat-front"
                  target="_blank"
                >
                  About
                </a>
              </li>
            </div>
          )}

          <li className="normal-Li">
            <a href="#" onClick={props.loggedIn ? props.play : props.login}>
              Play
            </a>
          </li>
          <li className="normal-Li">
            <a
              href="#"
              onClick={() => {
                alert('This feature will be implemented soon!')
              }}
            >
              Ranking
            </a>
          </li>
          <li className="normal-Li">
            <a
              href="https://github.com/JohnBorges52/GuessWhat/tree/master/guesswhat-front"
              target="_blank"
            >
              About
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}
