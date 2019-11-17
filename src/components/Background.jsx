import React from 'react';

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
          background: rgb(30,50,68);
          background: linear-gradient(126deg, rgba(30,50,68,1) 0%, rgba(52,82,110,1) 22%, rgba(92,126,156,1) 54%, rgba(52,82,110,1) 78%, rgba(30,50,68,1) 100%);        }
      `}</style>

      <div className="app-background">

      </div>
    </div>
  );
}

export default Background;