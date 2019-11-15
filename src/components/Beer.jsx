import React from 'react';

function Beer(props) {
  return (
    <div>
      
      <style jsx>{`
        .beer-card {
          width: 275px;
          height: 350px;
          margin: 20px;
          padding: 10px;
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

        .title-div {
          font-size: 22px;
          text-align: left;
          color:  rgba(230, 210, 210, 1);
          text-shadow: 1px 1px 3px rgba(0,0,0,0.95);
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
          background-color:  rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          border: solid thin  rgba(0, 0, 0, 0.3);
          margin-top: 5px;
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
        }

        .beer-info h6{
          margin-left: 10px;
        }

        .brand {
          flex-basis: 400px;
          color: rgba(84, 1, 1, 1);
          font-size: 1.1em;
        }

        .card-description {
          margin-top: 5px;
          height: 100px;
        }


      `}</style>

      <div className='card beer-card'>
        <div className="title-div">
          <p className='card-title'>{props.name}</p>
        </div>
        <div className='beer-info-parent'>
          <img className='card-img-beer' src={props.imgURL} />
          <div className="beer-info">
            <h6 className='card-text'>{props.alchoholContent.toFixed(1)}% ABV</h6>
            <h6 className='card-text'>${props.price.toFixed(2)}</h6>
            <h6 className="brand">{props.brand}</h6>
          </div>
        </div>
        <div className='card-description'>
          <p className='card-text'>{props.description}</p>
        </div>
      </div>

    </div>
  );
}

export default Beer;