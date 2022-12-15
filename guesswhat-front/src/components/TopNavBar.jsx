import React from 'react'
import'../styles/top-nav-bar.scss'

import Hamburger from 'hamburger-react'
import { useState } from 'react'

export default function TopNavBar() {

  const [isOpen, setOpen] = useState(false)




  return (
    <div className='top--nav--bar'>
      <ul>
        <li><a href="#">LOGO</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><Hamburger toggled={isOpen} toggle={setOpen} /></li>
      </ul>
      

    </div>
  )
}
