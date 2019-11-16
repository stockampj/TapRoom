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
          width: 100%;
          height: 100%;
          background: rgb(163,29,29);
          background: linear-gradient(119deg, rgba(163,29,29,1) 0%, rgba(231,169,113,1) 48%, rgba(176,39,39,1) 100%);
        }
      `}</style>

      <div className="app-background">

      </div>
    </div>
  );
}

export default Background;