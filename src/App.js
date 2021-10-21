import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Register from './pages/others/Register';
import Classintro from './pages/student/Classintro';
import Parent from './pages/VIP/Parent';

function App() {
  return (
  <>
  <Router>
  <Switch>
  <Route path="/" exact component={Parent}/>
  <Route path="/Register" component={Register}/>
  <Route path="/classintro" component={Classintro}/>
  </Switch>
  </Router>

  </>
  );
}

export default App;
