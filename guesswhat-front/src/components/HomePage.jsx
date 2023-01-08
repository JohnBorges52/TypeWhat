import React from 'react'
import'../styles/homepage.scss'

export default function HomePage() {
  return (
    <div className='homepage-container'>


      <div className='homepage-menu-container'> 

          <h1 className='play-tittle'>
           LET'S PLAY
          </h1>
        <div className='play-btns-div'>

         <button className='general-btn play-btn'> START GAME </button>
         {/* <button className='general-btn leaderboard-btn'> LEADERBOARD </button> */}
        </div>
        
      </div>

    </div>

  )
}
