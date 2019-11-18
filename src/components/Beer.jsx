import React from 'react';
import PropTypes from 'prop-types';
import woodTexture from '../assets/img/woodTexture.jpg';
import {Link} from 'react-router-dom';

function Beer(props) {
  return (
    <div>
      <style jsx>{`
        .beer-card {
          width: 285px;
          height: 350px;
          margin: 40px;
          margin-bottom: 0px;
          padding: 20px;
          border: solid 1px rgba(255,255,255,.4);
          border-radius: 0px;
          box-shadow: 4px 5px 5px -3px #000000;
          overflow: hidden;
          background-image: url(${woodTexture});
          background-size: 200%;
          background-position: bottom, center;
          background: rgb(30,50,68);
          background: linear-gradient(126deg, rgba(30,50,68,.9) -10%, rgba(54,84,112,.9) 54%, rgba(30,50,68,.9) 110%);

        }

        .beer-card:hover {                                                                                               
          -webkit-box-shadow: 0px 0px 13px 1px #000000; 
          box-shadow: 0px 0px 13px 1px #000000;
          background: rgb(30,50,68);
          background: linear-gradient(126deg, rgba(30,50,68,1) 10%, rgba(54,84,112,1) 54%, rgba(30,50,68,1) 90%);
        }

        .title-div {
          font-size: 22px;
          text-align: left;
          color: rgba(255, 255, 255, .8);
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
          height: 60px;
          font-weight: 800;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;     
        }

        .beer-info-parent {
          display: flex;
          align-items: stretch;
          border-radius: 10px;
          border: solid 1px rgba(255, 255, 255, 0.2);
          margin-top: 5px;
          -webkit-box-shadow: 0px 0px 12px -4px #000000; 
          box-shadow: 0px 0px 12px -4px #000000;
          background: rgb(158,137,73);
          background: linear-gradient(126deg, rgba(158,137,73,.7) 0%, rgba(244,230,187,.7) 65%, rgba(158,137,73,.7) 160%);

        }

        .card-img-beer {
          height: 72px;
          flex-basis: 20px;
          margin: 10px;
        }

        .beer-info {
          display: flex;
          flex-wrap: wrap;
          flex-grow: 3;
          justify-content: space-between;
          padding: 10px;
          color: rgba(255, 255, 255, .8);
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
        }

        .beer-info h6{
          margin-left: 10px;
        }

        .brand {
          flex-basis: 400px;
          color: rgba(40, 40, 40, .9);
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
          font-size: 1.2em;
          font-weight: 700;
        }

        .card-description {
          margin-top: 5px;
          height: 100px;
          color: rgba(255, 255, 255, .8);
        }

        .button-div {
          width: 100%;
          position: absolute;
          bottom: 10px;
        }

        .btn-beer {
          background: rgb(158,137,73);
          background: linear-gradient(126deg, rgba(158,137,73,.7) 0%, rgba(244,230,187,.7) 65%);
          color: rgba(40, 40, 40, .9);
          font-weight: 600;
          border: solid 1px rgba(255, 255, 255, 0.2);
          -webkit-box-shadow: 1px 1px 2px 0px #000000; 
          box-shadow: 1px 1px 2px 0px #000000;
          border-radius: 0px;
          position: absolute;
          left: 0px;
          bottom: 0px;
        }
        .btn-beer:hover {
          background: rgb(158,137,73);
          background: linear-gradient(126deg, rgba(158,137,73,.9) 0%, rgba(244,230,187,.9) 65%);          color: rgba(255, 255, 255, .8);
          color: rgba(40, 40, 40, .9);          
          border: solid 1px rgba(255, 255, 255, 0.2);
          -webkit-box-shadow: 1px 1px 2px 0px #000000; 
          box-shadow: 1px 1px 2px 1px #000000;
          border-radius: 0px;

        }
        
        .beer-count {
          position: absolute;
          right: 0px;
          bottom: 0px;
          margin-right: 30px;
          color: rgba(255, 255, 255, .8);
        }
        .fa-edit {
          position: absolute;
          top: 5px;
          right: 5px;
          color: rgba(255, 255, 255, .8);
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
          font-size: 1em;
        }

      `}</style>

      <div className='card beer-card'>
        <div className="edit-keg">
          <Link to="/kegedit"><i className="fas fa-edit"></i></Link>
        </div>
        <div className="title-div">
          <p className='card-title'>{props.name}</p>
        </div>
        <div className='beer-info-parent'>
          <img className='card-img-beer' src={props.imgURL} />
          <div className="beer-info">
            <h6 className='card-text'><span>{props.alchoholContent.toFixed(1)}% ABV</span></h6>     
            <h6 className='card-text'><span>${props.price.toFixed(2)}</span></h6>
            <h6 className="brand">{props.brand}</h6>
          </div>
        </div>
        <div className='card-description'>
          <p className='card-text'>{props.description}</p>
        </div>
        <div className='button-div'>
          <a href="#" className="btn btn-beer">Pour Pint</a>
          <h6 className='beer-count'>Pints Left: {props.pintRemainingCount}</h6>
        </div>
      </div>

    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  imgURL: PropTypes.string,
  alchoholContent: PropTypes.number,
  price: PropTypes.number,
  brand: PropTypes.string,
  description: PropTypes.string,
  pintRemainingCount: PropTypes.number
};

export default Beer;