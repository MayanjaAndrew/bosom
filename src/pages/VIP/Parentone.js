import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Classhome from '../student/Classhome'
import './navigation.css'

function Parentone() {
  return (
    <>
    <Router>
    <Switch>
    <Route to="/" component={Classhome}/>
    </Switch>
    </Router>
    <Navbar/>
    </>
  )
}

export default Parentone
