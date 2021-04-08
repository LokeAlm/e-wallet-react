import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/home';
import Addcard from './Components/Addcard/addcard';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addcard">
              <Addcard/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
