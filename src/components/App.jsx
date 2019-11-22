import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import BeerMenu from './BeerMenu';
import Background from './Background';
import LowKegList from './LowKegList';
import NewKegForm from './NewKegForm';
import KegEdit from './KegEdit';
import BeerList from './beerList';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterBeerList: BeerList
    };
  }
  
  render(){
    return (
      <div className="contentMain">
        <Background />
        <NavBar />
        <div>
          <Switch>
            <Route exact path='/' render={()=><BeerMenu masterBeerList={this.state.masterBeerList} /> } />
            <Route path='/lowkeglist' component={LowKegList} />
            <Route path='/newkegform' component={NewKegForm} />
            <Route path='/kegedit' component={KegEdit} />
          </Switch>
  
        </div>
  
        <div className="test"></div>
      </div>
    );
  }
}

export default App;

