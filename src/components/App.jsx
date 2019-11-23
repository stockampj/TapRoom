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
import v4 from 'uuid';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // masterBeerList: BeerList
      masterBeerList: {},
    };
    this.handleNewKegCreation = this.handleNewKegCreation.bind(this);
  }

  handleNewKegCreation(newKeg){
    // var newBeerList = this.state.masterBeerList.slice();
    // newBeerList.push(newKeg);
    // this.setState({masterBeerList: newBeerList});
    var newKegId = v4();
    var newBeerList = Object.assign(
      {}, this.state.masterBeerList, {[newKegId]: newKeg}
    );
    this.setState({masterBeerList: newBeerList})
  }

  handleNewPintPour(){

  }
  
  render(){
    return (
      <div className="contentMain">
        <Background />
        <NavBar />
        <div>
          <Switch>
            <Route exact path='/' render={()=><BeerMenu masterBeerList={this.state.masterBeerList} /> } />
            <Route path='/lowkeglist' render={()=><LowKegList masterBeerList={this.state.masterBeerList} /> } />
            <Route path='/newkegform' render={()=><NewKegForm onNewKegCreation={this.handleNewKegCreation} />} />
            <Route path='/kegedit' component={KegEdit} />
          </Switch>
  
        </div>
  
        <div className="test"></div>
      </div>
    );
  }
}

export default App;

