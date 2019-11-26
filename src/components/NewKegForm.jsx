import React from 'react';
import PropTypes from 'prop-types';
import Keg from '../assets/img/keg.png';


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
    console.log(parseInt(_pintsRemaining));
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: parseFloat(_price.value), alcoholContent: parseFloat(_alcoholContent.value), description: _description.value, imgURL: _imgURL.value, pintsRemainingCount: parseInt(_pintsRemaining)});
    _name = null;         
    _brand = null;         
    _price = null;         
    _alcoholContent = null;         
    _description = null;
    _imgURL = null;
    _pintsRemaining = null;
  }

  return(
    <div className="flex-container">
      <style jsx>{`
        
      .flex-container {
          position: absolute;          
          top: 60px;
          height: 80%;
          width: 100%;
          padding-bottom: 60px;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-wrap: wrap;
          background-image: url(${Keg});
          background-position: center;
          background-repeat: no-repeat;
          background-size: 300px;
        }

        input {
          background-color: rgba(1,1,1,0);
          border: none;
          color: black;
        }

        `}</style>
      <div>
        <form onSubmit={handleNewKegSubmit}>
          <input
            type='text'
            id='name'
            placeholder='beer name'
            ref={(input) => {_name = input;}}  />
          <br/>
          <input
            type='text'
            id='brand'
            placeholder='beer brand'
            ref={(input) => {_brand = input;}}  />
          <br/>
          <input
            type='float'
            id='price'
            placeholder='beer price'
            ref={(input) => {_price = input;}}  />
          <br/>
          <input
            type='float'
            id='alcoholContent'
            placeholder='alcohol content'
            ref={(input) => {_alcoholContent = input;}}  />
          <br/>
          <input
            type='text'
            id='description'
            placeholder='beer description'
            ref={(input) => {_description = input;}}  />
          <br/>
          <input
            type='text'
            id='imgURL'
            placeholder='image url'
            ref={(input) => {_imgURL = input;}}  />
          <br/>

          <button type='submit'>Create new keg</button>
        </form>
      </div>

    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;

   