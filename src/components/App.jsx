import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import BeerMenu from './BeerMenu';
import './App.css';

function App(){
  return (
    <div>
      <NavBar />
      <div className="contentMain">
        <Switch>
          <Route exact path='/' component={BeerMenu} />
          {/* <Route path='/hotpicks' component={} /> */}
        </Switch>

      </div>

      <div className="test"></div>
    </div>
  );
}

export default App;