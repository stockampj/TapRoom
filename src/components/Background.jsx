import React from 'react';
import background from '../assets/img/background.jpg';

function Background(){
  return(
    <div>

      <style jsx>{`
        .app-background{
          position: fixed;
          z-index: -2;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top:-50px;
          width: 120%;
          height: 120%;
          background: rgb(13,2,2);
          background: linear-gradient(126deg, rgba(13,2,2,1) 0%, rgba(25,15,4,1) 25%, rgba(52,41,25,1) 54%, rgba(25,15,4,1) 80%, rgba(13,2,2,1) 100%);
          background-image: url(${background});
          background-size: cover;
          background-position: center, center;
        `}</style>

      <div className="app-background">

      </div>
    </div>
  );
}

export default Background;