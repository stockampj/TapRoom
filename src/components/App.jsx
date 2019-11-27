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
      masterBeerList: BeerList,
      lowKegFilter: 'off'
    };
    this.handleNewKegCreation = this.handleNewKegCreation.bind(this);
    this.handlePintPour = this.handlePintPour.bind(this);
  }

  handleNewKegCreation(newKeg){
    var newKegId = v4();
    var newBeerList = Object.assign(
      {}, this.state.masterBeerList, {[newKegId]: newKeg}
    );
    this.setState({masterBeerList: newBeerList});
  }

  handlePintPour(kegId){
    var updatedMenu = Object.assign({}, this.state.masterBeerList);
    if (updatedMenu[kegId].pintsRemainingCount>0){
      updatedMenu[kegId].pintsRemainingCount--;
      this.setState({masterBeerList: updatedMenu});
    } else {
      console.log("Keg is empty");
    }
  }
  
  render(){
    return (
      <div className="contentMain">
        <Background />
        <NavBar />
        <div>
          <Switch>
            <Route exact path='/' render={()=><BeerMenu masterBeerList={this.state.masterBeerList} onPintPour={this.handlePintPour}/> } />
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

