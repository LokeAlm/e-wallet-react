import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/home';
import Addcard from './Components/Addcard/addcard';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
