import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import './About.css'

const About = props => {
  return (
    <div>
      <Header headerText='About' />
      <div className='link-container'>
        <Link
          className='link'
          to='/' >
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default About
