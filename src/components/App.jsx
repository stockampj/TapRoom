import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import BioFeed from './BioFeed';
import './App.css';

function App(){
  return (
    <div>
      <NavBar />
      <div className="contentMain">
        <Switch>
          <Route exact path='/' component={BioFeed} />
          {/* <Route path='/hotpicks' component={} /> */}
        </Switch>

      </div>

      <div className="test"></div>
    </div>
  );
}

export default App;