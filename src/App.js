import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Register from './pages/others/Register';
import Classhome from './pages/student/Classhome';
import Classintro from './pages/student/Classintro';
import Classtopics from './pages/student/Classtopics';
import Parent from './pages/VIP/Parent';
import Parentone from './pages/VIP/Parentone';

function App() {
  return (
  <>
  <Router>
  <Switch>
  <Route path="/" exact component={Parent}/>
  <Route path="/Register" component={Register}/>
  <Route path="/classintro" component={Classintro}/>
  <Route path="/classtopic" component={Classtopics}/>
  <Route path="/parentone" component={Parentone}/>
  </Switch>
  </Router>

  </>
  );
}

export default App;
