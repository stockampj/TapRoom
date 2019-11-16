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

        .title-div {
          font-size: 22px;
          text-align: left;
          color:  rgba(230, 196, 151, 1);
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
          background-color:  rgba(227, 174, 104, .4);
          border-radius: 10px;
          border: solid thin  rgba(0, 0, 0, 0.3);
          margin-top: 5px;
          -webkit-box-shadow: 0px 0px 12px -4px #000000; 
          box-shadow: 0px 0px 12px -4px #000000;
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
          font-weight: 700;
        }

        .card-description {
          margin-top: 5px;
          height: 100px;
        }

        .button-div {
          width: 100%;
          position: absolute;
          bottom: 10px;
          background-color: red;
        }

        .btn-beer {
          background-color:  rgba(227, 174, 104, .6);
          border: solid thin  rgba(0, 0, 0, 0.3);
          -webkit-box-shadow: 1px 1px 2px 0px #000000; 
          box-shadow: 1px 1px 2px 0px #000000;
          border-radius: 0px;
          position: absolute;
          left: 0px;
          bottom: 0px;
        }
        .btn-beer:hover {
          background-color:  rgba(227, 174, 104, .8);
          border: solid thin  rgba(0, 0, 0, 0.3);
          -webkit-box-shadow: 1px 1px 2px 0px #000000; 
          box-shadow: 1px 1px 2px 1px #000000;
          border-radius: 0px;
        }
        
        .beer-count {
          position: absolute;
          right: 0px;
          bottom: 0px;
          margin-right: 30px;
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

export default Beer;