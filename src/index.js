import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import {HashRouter as Router, Route} from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </div>
  </Router>,
  document.getElementById('root')
)
