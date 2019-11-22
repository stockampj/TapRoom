import React from 'react';

function NewKegForm(){
  return(
    <div>
      <style jsx>{`
        
      .flex-container {
          position: absolute;          
          top: 60px;
          height: 80%;
          width: 100%;
          padding-bottom: 60px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        `}</style>
      <div className="flex-container">
        <form>
          <input
            type='text'
            id='name'
            placeholder='beer name'
            ref={(input) => {_name = input}}  />
            <br/>
          <input
            type='text'
            id='brand'
            placeholder='beer brand'
            ref={(input) => {_name = input}}  />
            <br/>
          <input
            type='text'
            id='price'
            placeholder='beer price'
            ref={(input) => {_name = input}}  />
            <br/>
          <input
            type='number'
            id='price'
            placeholder='price'
            ref={(input) => {_name = input}}  />
            <br/>
          <input
            type='number'
            id='alchoholContent'
            placeholder='alchohol content'
            ref={(input) => {_name = input}}  />
            <br/>
          <input
            type='text'
            id='description'
            placeholder='beer description'
            ref={(input) => {_name = input}}  />
            <br/>
          <input
            type='number'
            id='pintsRemaining'
            placeholder='pints remaining'
            ref={(input) => {_name = input}}  />
            <br/>
          <input
            type='text'
            id='imgURL'
            placeholder='image url'
            ref={(input) => {_name = input}}  />
            <br/>

          <button type='submit'>Create new keg</button>
        </form>
      </div>

    </div>
  );
}

export default NewKegForm;