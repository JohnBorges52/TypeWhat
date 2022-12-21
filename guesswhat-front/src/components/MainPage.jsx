import React from 'react'
import'../styles/mainpage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'






export default function MainPage() {
  return (






    <div className='mainpage--container'>

      <div className='top-bar-container'>

        <div className='title-container'>     
        
          <FontAwesomeIcon icon={faFeather} size="4x" className='fa-feather' />
          <div className='h1-title-container'>
            <h1 className='title-mainpage'>Type</h1>
            <h1 className='title-mainpage'>What</h1>
          </div>
        </div>
          <div className='title-mainpage-topnav'>
            <div className='title-mainpage-topnav-right'>
              <li><a href="#">Play</a></li>  
              <li><a href="#">Ranking</a></li>  
              <li><a href="#">About</a></li>  
              <li><a href="#">another</a></li>  

            </div>
          </div>

      </div>

      <div className='content-container'>
        <div className='content-container-left'>

          <div className='content-container-left-text'>
            <h4> Where</h4>
            <h2 > Typing Fast</h2>
            <h3 > is better </h3>
            </div>
          <div className='content-container-left-subtext'>
            <h5 > Test yor habilities to see how many words you can type in one minute and climb your way to the top of players. You will need to test your typing habilities as well as your vision in order to see the words moving.</h5>
          </div>
          <div className='content-container-left-subtext'>
            <a  className='a-link-login' href="/login"> LOGIN </a>
            <a  className='a-link-login' href="/register"> REGISTER </a>
          </div>
        
        </div>
      </div>





      



    </div>

    


  )
}
