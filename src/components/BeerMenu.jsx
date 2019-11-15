import React from 'react';
import Beer from './beer';
import beer1 from '../assets/img/beer1.jpg';
import beerLight from '../assets/img/beer-light.png';
import beerMedium from '../assets/img/beer-medium.png';
import beerRed from '../assets/img/beer-red.png';
import beerDark from '../assets/img/beer-dark.png';

var beerList = [
  {
    imgURL: beerLight,
    name: 'Citra Dry Hopped Transcendental Pulp Phantasm',
    brand: 'Stone',
    price: 4.50,
    alchoholContent: 5.1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imgURL: beerMedium,
    name: 'Mayor\'s Highball Ale',
    brand: 'Founders',
    price: 4.50,
    alchoholContent: 6.3,
    description: 'In iaculis nunc sed augue lacus. Et netus et malesuada fames ac turpis. Blandit libero volutpat sed cras.'
  },
  {
    imgURL: beerLight,
    name: 'Cow Creek Pilsner',
    brand: 'New Glarus Brewing Co.',
    price: 6.50,
    alchoholContent: 7.2,
    description: 'Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Tortor pretium viverra suspendisse potenti.'
  },
  {
    imgURL: beerDark,
    name: 'Caesar\'s Hellhole Stout',
    brand: 'Rogue',
    price: 8.50,
    alchoholContent: 12.3,
    description: 'Blandit aliquam etiam erat velit scelerisque in dictum. Lacinia quis vel eros donec. Felis bibendum ut tristique et.'
  },
  {
    imgURL: beerRed,
    name: 'The Sunk Superstar',
    brand: 'Elysian',
    price: 4.75,
    alchoholContent: 6.8,
    description: 'Lobortis feugiat vivamus at augue eget arcu dictum varius.'
  }
];

function BeerMenu(){
  return(
    <div>

      <style>{`
        .flex-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 25px;
          }
      `}</style>

      <div className='flex-container'>
        {beerList.map((beer, index)=>
          <Beer
            imgURL={beer.imgURL}
            name={beer.name}
            brand={beer.brand}
            price={beer.price}
            alchoholContent={beer.alchoholContent}
            description={beer.description}
            key={index}
          />
        )}
      </div>

    </div>
  );
}


export default BeerMenu;