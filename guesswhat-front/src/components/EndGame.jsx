import React, { useEffect, useState } from 'react'

import '../styles/endgame.scss'

export default function EndGame(props) {
  const [score, setScore] = useState()

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      setScore(JSON.parse(userInfo).score)
    }
  }, [])

  return (
    <div className="endgame-container">
      <div className="score-container">
        <span className="title-span"> The game is over</span>
        <span className="points-span-box">
          You scored <span>{props.points}</span> points
        </span>
        <span className="playagain-span" onClick={props.play}>
          Play Again
        </span>

        <h2>
          Your highest score is <span> {score} </span>
        </h2>
      </div>
    </div>
  )
}
