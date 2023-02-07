import React from 'react'

import '../styles/endgame.scss'

export default function EndGame(props) {
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
          You can see your ranking <span> here </span>
        </h2>
      </div>
    </div>
  )
}
