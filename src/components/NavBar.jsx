import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className="">
      <div className='row top-nav-row'>
        <ul>
          <li><Link className='btn home-button' to='/'><i className="fas fa-beer"><span className="btn-text"> Tap Room</span></i></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;