import React from 'react'
import'../styles/mainpage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






export default function MainPage() {
  return (






    <div className='mainpage--container'>

      <div className='title-container'> 

      
      <h1 className='title-mainpage'>Welcome to TypeWhat!</h1>
      <FontAwesomeIcon icon="fa-solid fa-typewriter" />
      <h2 className='subtitle-mainpage'>Where you play and test how fast you type.</h2>

      </div>

      <a  className='btn-link' href="/login"> LOGIN </a>
      <a  className='btn-link' href="/register"> REGISTER </a>


      



    </div>

    


  )
}
