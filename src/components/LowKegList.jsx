// import React from 'react';
// import Carousel from './Carousel';
// import Beer from './beer';

// function LowKegList(props){

//   let beerListFiltered = [];
//   props.masterBeerList.forEach((beer) => {
//     if (beer.pintsRemainingCount<10){
//       beerListFiltered.push(beer);
//     }
//   });

//   return(
//     <div className="beer-menu">

//       <style>{`
//         .beer-menu {
//           font-family: 'Port Lligat Slab', serif;
//         }

//         .bottom-wrapper {
//           position: absolute;
//           height:100%;
//           width: 100%;
//           bottom: 60px;
//           overflow: hidden;
//           border-bottom: solid 10px rgba(255, 255, 255, 0.2); 
//           -webkit-box-shadow: 4px 5px 5px -3px #000000; 
//           box-shadow: 4px 5px 5px -3px #000000;
//           z-index: -1;
//         }

//         .top-wrapper {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           margin-top: 200px;
//           width: 100%;
//           overflow: hidden;
//           border-top: solid 10px rgba(255, 255, 255, 0.2); 
//           -webkit-box-shadow: 4px 5px 5px -3px #000000; 
//           box-shadow: 4px 5px 5px -3px #000000;
//         }

//         @keyframes fadeInUp {
//           0% {
//               transform: translateY(600px);
//           }
//           100% {

//               transform: translateY(0);
//           }
//         }

//         .flex-container {
//           position: absolute;
//           top: 210px;
//           height: 100%;
//           padding-bottom: 250px;
//           display: flex;
//           justify-content: center;
//           flex-wrap: wrap;
//           overflow-y: scroll;
//           animation-name: fadeInUp;
//           animation-duration: 2.5s;
//         }

//         ::-webkit-scrollbar {
//           width: 5px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background:  rgba(0,0,0,0.5);
//         }

//         @keyframes fadeInLeft {
//           0% {
//               opacity: 0;
//               transform: translateY(100px);
//           }
//           20% {
//               opacity: .8;
//           }
//           100% {
//               opacity: 1;
//               transform: translateY(0);
//           }
//         }

//         h1 {
//           text-align: center;
//           font-weight: 800;
//           color:  rgba(244,230,187,.8);
//           text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
//           font-size: 70px;
//           margin: 5px;
//           font-family: 'UnifrakturCook', cursive;
//           animation-name: fadeInLeft;
//           animation-duration: 1s;
//         }
//       `}</style>

//       <div>
//         <h1>Low Key List</h1>
//       </div>
//       <div className="bottom-wrapper">
//         <div className="top-wrapper">
//           <Carousel />
//         </div>
//         <div className='flex-container'>
//           {beerListFiltered.map((beer, index)=>
//             <Beer            
//               imgURL={beer.imgURL}
//               name={beer.name}
//               brand={beer.brand}
//               price={beer.price}
//               alcoholContent={beer.alcoholContent}
//               description={beer.description}
//               pintsRemainingCount={beer.pintsRemainingCount}
//               key={index}
//             /> 
//           )},
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LowKegList;