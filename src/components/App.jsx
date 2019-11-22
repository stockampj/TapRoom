import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import BeerMenu from './BeerMenu';
import Background from './Background';
import LowKegList from './LowKegList';
import NewKegForm from './NewKegForm';
import KegEdit from './KegEdit';

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
          <Route path='/kegedit' component={KegEdit} />
        </Switch>

      </div>

      <div className="test"></div>
    </div>
  );
}

export default App;