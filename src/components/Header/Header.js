import React from 'react'
import logo from './logo.svg'
import './Header.css'

const Header = props => {
  return (
    <div className='header'>
      <img src={logo} className='logo' alt='logo' />
      <h2>{props.headerText}</h2>
    </div>
  )
}

export default Header
