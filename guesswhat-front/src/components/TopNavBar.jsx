import React from 'react'
import '../styles/top-nav-bar.scss'

import Hamburger from 'hamburger-react'
import { useState } from 'react'

export default function TopNavBar(props) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="title-mainpage-topnav">
      <div className="title-mainpage-topnav-right">
        <li className="hamburguer">
          <Hamburger toggled={isOpen} color="#c1fdfa" toggle={setOpen} />
        </li>

        {isOpen && (
          <>
            <li className="small-Li">
              <a href="#" onClick={props.play}>
                Play
              </a>
            </li>
            <li className="small-Li">
              <a href="#">Ranking</a>
            </li>
            <li className="small-Li">
              <a href="#">About</a>
            </li>
            <li className="small-Li">
              <a href="#">another</a>
            </li>
          </>
        )}

        <li className="normal-Li">
          <a href="#" onClick={props.loggedIn ? props.play : props.login}>
            Play
          </a>
        </li>
        <li className="normal-Li">
          <a href="#">Ranking</a>
        </li>
        <li className="normal-Li">
          <a href="#">About</a>
        </li>
        <li className="normal-Li">
          <a href="#">another</a>
        </li>
      </div>
    </div>
  )
}
