import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./pages/VIP/Login";
import Parent from './pages/VIP/Parent';

function App() {
  return (
  <>
  <Router>
  <Switch>
  <Route path="/" exact component={Parent}/>
  </Switch>
  </Router>

  </>
  );
}

export default App;
