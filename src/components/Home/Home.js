import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import './Home.css'

const Home = props => (
  <div>
    <Header headerText='Home' />
    <div className='link-container'>
      <Link
        className='link'
        to='/about' >
          Go to About
        </Link>
    </div>
  </div>
)

export default Home
