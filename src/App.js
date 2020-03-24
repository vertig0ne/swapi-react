import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navi from './components/Navi';
import Home from './components/Home';
import People from './components/People';
import Films from './components/Films';
import Planets from './components/Planets';
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';

const App = () => {
  return (
    <Router>
      <Navi />

      <div class="container">
        <Switch>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/species">
            <Species />
          </Route>
          <Route path="/starships">
            <Starships />
          </Route>
          <Route path="/vehicles">
            <Vehicles />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
