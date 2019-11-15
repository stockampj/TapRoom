import React from 'react';

function Beer(props) {
  return(
    <div>
      <style jsx>{`
        .beer-card {
          width: 275px;
          height: 440px;
          margin: 20px;
          border-radius: 0px;
          border: solid 1px rgba(255, 255, 255, 0.2);
          background-color: rgba(54, 54, 54, .2);
          -webkit-box-shadow: 4px 5px 5px -3px #000000; 
          box-shadow: 4px 5px 5px -3px #000000;
          overflow: hidden;
        }

        .beer-card:hover {                                                                                               
          -webkit-box-shadow: 0px 0px 13px 1px #000000; 
          box-shadow: 0px 0px 13px 1px #000000;
          background-color: rgba(54, 54, 54, .1);
        }

        /* .img-holder{
          position: absolute;
          top: 5px;
          left: 5px;
          height: 200px;
          min-height: 200px;
          overflow: hidden; 
          border: solid 1px rgba(255, 255, 255, 0.2);
          border-radius: 100px;
          -webkit-box-shadow: 0px 0px 6px -2px #000000; 
          box-shadow: 0px 0px 6px -2px #000000;
        }
        h5 {
          position: absolute;
          top: 140px;
          right: 5px;
          font-size: 50px;
          color: white;
        }
        p {
          position: absolute;
          top: 220px;
          left: 5px;
        } */

        .img-holder{
          margin: 5%;
          height: 200px;
          min-height: 200px;
          overflow: hidden; 
          border: solid 1px rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          -webkit-box-shadow: 0px 0px 6px -2px #000000; 
          box-shadow: 0px 0px 6px -2px #000000;
        }

        h5 {
          font-size: 30px;
          margin-top: -10%;
          text-align: center;
          color:  rgba(255, 255, 255, 0.6);
        }

        img {
          height: 250px;
          margin-top: -25px;
        } 

      `}</style>

      <div className='card beer-card'>
      <div className="img-holder">
        <img className='card-img-top' src={props.imgURL} />
      </div>      
        <div className='card-body'>
          <h5 className='card-title'>{props.name}<span className="brand">{props.brand}</span></h5>
          <h6 className='card-text'>{props.price}</h6>
          <h6 className='card-text'>{props.alchoholContent}</h6>
          <p className='card-text'>{props.description}</p>
        </div>
      </div>

    </div>
  );
}

export default Beer;