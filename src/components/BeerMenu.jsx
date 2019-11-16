import React from 'react';
import Carousel from './Carousel';
import Beer from './beer';
import beer1 from '../assets/img/beer1.jpg';
import beerLight from '../assets/img/beer-light.png';
import beerMedium from '../assets/img/beer-medium.png';
import beerRed from '../assets/img/beer-red.png';
import beerDark from '../assets/img/beer-dark.png';

var beerList = [
  {
    imgURL: beerLight,
    name: 'Citra Dry Hopped Transcendental Pulp',
    brand: 'Stone',
    price: 4.50,
    alchoholContent: 5.1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    pintRemainingCount: 121
  },
  {
    imgURL: beerMedium,
    name: 'Mayor\'s Highball Ale',
    brand: 'Founders',
    price: 4.50,
    alchoholContent: 6.3,
    description: 'In iaculis nunc sed augue lacus. Et netus et malesuada fames ac turpis. Blandit libero volutpat sed cras.',
    pintRemainingCount: 75
  },
  {
    imgURL: beerLight,
    name: 'Cow Creek Pilsner',
    brand: 'New Glarus Brewing Co.',
    price: 6.50,
    alchoholContent: 7.2,
    description: 'Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Tortor pretium viverra suspendisse potenti.',
    pintRemainingCount: 7
  },
  {
    imgURL: beerDark,
    name: 'Caesar\'s Hellhole Stout',
    brand: 'Rogue',
    price: 8.50,
    alchoholContent: 12.3,
    description: 'Blandit aliquam etiam erat velit scelerisque in dictum. Lacinia quis vel eros donec. Felis bibendum ut tristique et.',
    pintRemainingCount: 75
  },
  {
    imgURL: beerRed,
    name: 'The Sunk Superstar',
    brand: 'Elysian',
    price: 4.75,
    alchoholContent: 6.8,
    description: 'Lobortis feugiat vivamus at augue eget arcu dictum varius.',
    pintRemainingCount: 62
  },
  {
    imgURL: beerDark,
    name: 'Caesar\'s Hellhole Stout',
    brand: 'Rogue',
    price: 8.50,
    alchoholContent: 12.3,
    description: 'Blandit aliquam etiam erat velit scelerisque in dictum. Lacinia quis vel eros donec. Felis bibendum ut tristique et.',
    pintRemainingCount: 54
  },
  {
    imgURL: beerRed,
    name: 'The Sunk Superstar',
    brand: 'Elysian',
    price: 4.75,
    alchoholContent: 6.8,
    description: 'Lobortis feugiat vivamus at augue eget arcu dictum varius.',
    pintRemainingCount: 115
  },
  {
    imgURL: beerMedium,
    name: 'Mayor\'s Highball Ale',
    brand: 'Founders',
    price: 4.50,
    alchoholContent: 6.3,
    description: 'In iaculis nunc sed augue lacus. Et netus et malesuada fames ac turpis. Blandit libero volutpat sed cras.',
    pintRemainingCount: 90
  }
];

function BeerMenu(){
  return(
    <div>

      <style>{`
        .bottom-wrapper {
          position: absolute;
          height:100%;
          width: 100%;
          bottom: 40px;
          overflow: hidden;
          border-bottom: solid 10px rgba(50, 50, 50, .8);
          z-index: -1;
        }

        .top-wrapper {
          margin-top: 120px;
          width: 100%;
          overflow: hidden;
          border-top: solid 10px rgba(50, 50, 50, .8);
        }

        .flex-container {
          position: absolute;
          top: 90px;
          height: 84%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          overflow-y: scroll;

        }

        h1 {
          text-align: center;
          font-weight: 800;
          color:  rgba(230, 196, 151, 1);
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
        }
      `}</style>

      <div>
        <h1>Today's Tap List</h1>
      </div>
      <div className="bottom-wrapper">
        <div className="top-wrapper">
            <Carousel />
        </div>
      </div>
      <div className='flex-container'>
        {beerList.map((beer, index)=>
          <Beer
          imgURL={beer.imgURL}
          name={beer.name}
          brand={beer.brand}
          price={beer.price}
          alchoholContent={beer.alchoholContent}
          description={beer.description}
          pintRemainingCount={beer.pintRemainingCount}
          key={index}
          />
          )},
      </div>
      

    </div>
  );
}

export default BeerMenu;