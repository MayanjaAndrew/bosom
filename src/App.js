import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./pages/VIP/Login";

function App() {
  return (
  <>
  <Router>
  <Switch>
  <Route path="/" exact component={Login}/>
  </Switch>
  </Router>

  </>
  );
}

export default App;
