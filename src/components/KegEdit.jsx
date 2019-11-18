import React from 'react';

function KegEdit(){
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
            placeholder='beer name'/><br/>
          <input
            type='text'
            id='brand'
            placeholder='beer brand'/><br/>
          <input
            type='text'
            id='price'
            placeholder='beer price'/><br/>
          <input
            type='number'
            id='price'
            placeholder='price'/><br/>
          <input
            type='number'
            id='alchoholContent'
            placeholder='alchohol content'/><br/>
          <input
            type='text'
            id='description'
            placeholder='beer description'/><br/>
          <input
            type='number'
            id='pintsRemaining'
            placeholder='pints remaining'/><br/>
          <input
            type='text'
            id='imgURL'
            placeholder='image url'/><br/>

          <button type='submit'>Create new keg</button>
        </form>
      </div>

    </div>
  );
}

export default KegEdit;