import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Background from './Background';
import BeerMenu from './BeerMenu';
import LowKegList from './LowKegList';
import NewKegForm from './NewKegForm';

function App(){
  return (
    <div className="contentMain">
      <Background />
      <NavBar />
      <div>
        <Switch>
          <Route exact path='/' component={BeerMenu} />
          <Route path='/lowkeglist' component={LowKegList} />
          <Route path='/newkegform' component={NewKegForm} />
        </Switch>

      </div>

      <div className="test"></div>
    </div>
  );
}

export default App;