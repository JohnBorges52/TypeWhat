import React from 'react'
import'../styles/mainpage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import Hamburger from 'hamburger-react'







export default function MainPage() {

  const [isOpen, setOpen] = useState(false)
  return (
    <div className='bg-home-container'>

    <div className='mainpage--container'>

      <div className='top-bar-container'>

        <div className='title-container'>     
        
          <FontAwesomeIcon icon={faFeather}  className='fa-feather' />
          <div className='h1-title-container'>
            <h1 className='title-mainpage'>Type</h1>
            <h1 className='title-mainpage'>What</h1>
          </div>
        </div>
          <div className='title-mainpage-topnav'>
            <div className='title-mainpage-topnav-right'>
              <li className='hamburguer'><Hamburger toggled={isOpen}  color="#c1fdfa" toggle={setOpen} /></li>
             
             {isOpen &&
             <>
              <li className='small-Li'><a href="#">Play</a></li>  
              <li className='small-Li'><a href="#">Ranking</a></li>  
              <li className='small-Li'><a href="#">About</a></li>  
              <li className='small-Li'><a href="#">another</a></li>     
             </> 
            }         
              






              <li className='normal-Li'><a href="#">Play</a></li>  
              <li className='normal-Li'><a href="#">Ranking</a></li>  
              <li className='normal-Li'><a href="#">About</a></li>  
              <li className='normal-Li'><a href="#">another</a></li>

            </div>
          </div>

      </div>

      <div className='content-container'>
        <div className='content-container-left'>

          <div className='content-container-left-text'>
            <h4> Where</h4>
            <span > Typing Fast</span>
            <h3 > is better </h3>
            </div>
          <div className='content-container-left-subtext'>
            <h5> Test yor habilities to see how many words you can type in one minute and climb your way to the top of players. You will need to test your typing habilities as well as your vision in order to see the words moving.</h5>
          </div>
          <div className='content-container-left-subtext-links'>
            <a  className='a-link-login btn-login' href="/login"> Login now</a>
            <a  className='a-link-login btn-register' href="/register"> Register here </a>
          </div>
        
        </div>
        
        <svg height="0" width="0" class="svg-clip" style={{position:"absolute"}}>
    <defs>
         <clipPath id="clip" clipPathUnits="objectBoundingBox">
           
           <path d="M1,.21 Q1,0 .81,.09L.187,.4 Q0,.5 .187,.59L.81,.90 Q1,1 1,.79Z" />
        </clipPath>
    </defs>
</svg>
        
        <div className='content-container-right'>
          <div className='triangle'>
            
          </div>
          <div className='triangle-behind'> </div>



        </div>

      </div>






      



    </div>

    


            </div>
  )
}
