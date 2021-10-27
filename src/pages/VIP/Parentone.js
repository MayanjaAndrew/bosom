import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Classhome from '../student/Classhome'
import Classtopics from '../student/Classtopics'
import './navigation.css'


function Parentone() {
  return (
    <>
    <Router>
    <Switch>
    <Route to="/" component={Classhome}/>
    <Route to="/classtopics" component={Classtopics}/>
    </Switch>
    </Router>
    <Navbar/>
    </>
  )
}

export default Parentone
