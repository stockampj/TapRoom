import React from 'react';

function Carousel(){
  return(
    <div className="carousel-holder">

      <style jsx>{`

        .carousel {
          margin-top: -25%;
          margin-left: -85px;
          width: 200%;
          min-width: 1500px;
          max-width: 2000px;
        }

      `}</style>


          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://www.ascendantbeer.com/wp-content/uploads/2018/07/pint-of-dark-beer-e1531854982289.jpeg" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://www.uschamber.com/sites/default/files/articles/images/beer2.jpg" alt="Third slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="http://cepgi.typepad.com/.a/6a00e5502e87bf88330224df2d20bc200b-pi" alt="Second slide"/>
              </div>
            </div>
          </div>


    </div>
  );
}

export default Carousel;
