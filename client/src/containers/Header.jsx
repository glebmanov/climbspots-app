import React from 'react'

import logo from '../static/img/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo d-flex align-items-center'>
        <img src={logo} alt='logo' />
        <p>
          <span>Climb</span>spots
        </p>
      </div>
    </div>
  )
}

export default Header
