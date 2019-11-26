import React from 'react';
import PropTypes from 'prop-types';
import Keg from '../assets/img/keg.png';
import beerLight from '../assets/img/beer-light.png';
import beerMedium from '../assets/img/beer-medium.png';
import beerRed from '../assets/img/beer-red.png';
import beerDark from '../assets/img/beer-dark.png';


function NewKegForm(props){
  let _name = null;         
  let _brand = null;         
  let _price = null;         
  let _alcoholContent = null;         
  let _description = null;
  let _imgURL = null;
  let _pintsRemaining = 124;
  
  function handleNewKegSubmit(event){
    event.preventDefault();
    
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: parseFloat(_price.value), alcoholContent: parseFloat(_alcoholContent.value), description: _description.value, imgURL: _imgURL.value, pintsRemainingCount: parseInt(_pintsRemaining)});
    _name = null;         
    _brand = null;         
    _price = null;         
    _alcoholContent = null;         
    _description = null;
    _imgURL = null;
    _pintsRemaining = null;
    location.href = '#/';
  }

  return(
    <div>
      <style jsx>{`
      
      .flex-container {
          position: absolute;          
          top: 140px;
          width: 100%;  
          display: flex;
          justify-content: center;
          align-content: center;
          flex-wrap: wrap;
          background: rgb(13,2,2);
          background-image: url(${Keg});
          background-position: center;
          background-repeat: no-repeat;
          background-size: 280px;
        }
        
        .form-holder {
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: column;
          height: 420px;
          width: 320px;
          margin: 10px;
          border: solid thin rgba(255,255,255,.2);
          padding

        }

        input {
          background-color: rgba(155,155,155,0);
          border: solid thin rgba(255,255,255,.6);
          color: rgba(255,255,255,.6);
          padding:3px;
          border-radius: 5px;
          height: 40px;
          width: 200px;
          font-size: 1.2em;
          margin: 5px;
          margin-left: 50px;
        }
        
        select{
          background-color: rgba(155,155,155,0);
          border: solid thin rgba(255,255,255,.6);
          color: rgba(255,255,255,.6);
          padding:3px;
          border-radius: 5px;
          height: 40px;
          width: 200px;
          font-size: 1.2em;
          margin: 5px;
          margin-left: 50px;
        }
        .select-option{
          background: rgb(13,2,2);
          border: none;
          color: rgba(255,255,255,.6);
          height: 40px;
          width: 200px;
          margin: 5px;
          margin-left: 50px;
        }

        .btn-submit {
          background: rgb(158,137,73);
          background: linear-gradient(126deg, rgba(158,137,73,.7) 0%, rgba(244,230,187,.7) 65%);
          color: rgba(40, 40, 40, .9);
          font-weight: 600;
          border: solid 1px rgba(255, 255, 255, 0.2);
          -webkit-box-shadow: 1px 1px 2px 0px #000000; 
          box-shadow: 1px 1px 2px 0px #000000;
          border-radius: 0px;
          display: block;
          width: 320px;
          padding: 10px;
          position: absolute;
          bottom: 10px;
        }
        @keyframes fadeInLeft {
          0% {
              opacity: 0;
              transform: translateX(600px);
          }
          50% {
              opacity: 1;
          }
          100% {
              opacity: 1;
              transform: translateX(0);
          }
        }

        h1 {
          text-align: center;
          font-weight: 800;
          color:  rgba(244,230,187,.8);
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
          font-size: 70px;
          margin: 5px;
          font-family: 'UnifrakturCook', cursive;
          animation-name: fadeInLeft;
          animation-duration: 3s;
        }

        `}</style>
      <div>
        <h1>New Keg</h1>
      </div>
      <div className="flex-container">

        <div className="form-holder">
          <form onSubmit={handleNewKegSubmit}>
            <input
              type='text'
              id='name'
              placeholder='beer name'
              required
              ref={(input) => {_name = input;}}  />
            <br/>
            <input
              type='text'
              id='brand'
              placeholder='beer brand'
              required
              ref={(input) => {_brand = input;}}  />
            <br/>
            <input
              type='float'
              id='price'
              placeholder='beer price'
              required
              ref={(input) => {_price = input;}}  />
            <br/>
            <input
              type='float'
              id='alcoholContent'
              placeholder='alcohol content'
              required
              ref={(input) => {_alcoholContent = input;}}  />
            <br/>
            <input
              type='text'
              id='description'
              placeholder='beer description'
              ref={(input) => {_description = input;}}  />
            <br/>

            <select 
              className="input-select"
              type='text'
              id='imgURL'
              placeholder='image url'
              ref={(select) => {_imgURL = select;}}>
              <option className="select-option" value={beerLight}>light</option>
              <option className="select-option" value={beerMedium}>medium</option>
              <option className="select-option" value={beerRed}>red</option>
              <option className="select-option" value={beerDark}>dark</option>
            </select>

            <button className="btn-submit" type='submit'>Create new keg</button>
          </form>
        </div>
      </div>

    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;

   