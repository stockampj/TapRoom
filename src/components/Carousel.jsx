import React from 'react';
import beer2 from '../assets/img/beer2.jpg';
import beer3 from '../assets/img/beer3.jpg';
import beer4 from '../assets/img/beer4.jpg';

function Carousel(){
  return(
    <div className="carousel-holder">

      <style jsx>{`

        .carousel {
          margin-top: -10%;
          width: 140%;
        }

        @media (max-width: 2000px) {
          .carousel {
            margin-top: -200px;
            width: 2000px;
          }
        }

        @media (max-width: 1000px) {
          .carousel {
            margin-top: -50px;

            height: 150%;
          }
        }

      `}</style>


      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={beer2} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={beer3} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={beer4} alt="Second slide"/>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Carousel;
