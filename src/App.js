import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Register from './pages/others/Register';
import Parent from './pages/VIP/Parent';

function App() {
  return (
  <>
  <Router>
  <Switch>
  <Route path="/" exact component={Parent}/>
  <Route path="/Register" component={Register}/>
  </Switch>
  </Router>

  </>
  );
}

export default App;
