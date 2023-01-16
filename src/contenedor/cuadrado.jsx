import React from 'react';



function Cuadrado() {

    const intervalId = React.useRef(null);
    const [square, setSquare] = React.useState(null);
  
    function changeColor(){
      console.log("Cambiando color...");
      let red = Math.floor((Math.random() * 255));
      let green = Math.floor((Math.random() * 255)); 
      let blue = Math.floor((Math.random() * 255 ));
  
      let newSquare = <div style={{background: `rgb(${red},${green},${blue})`,
          width: '255px', height: '255px',  border: '2px solid rgb(170, 170, 170)',
          cursor: 'pointer'}}></div>
      setSquare(newSquare);
    }
  
    function startInterval(){
      console.log("Cambiando color");
      if (!intervalId.current) {
        intervalId.current = setInterval(changeColor, 1000);
      }
    };
      
    function stopInterval (){
      console.log("Detenido");
      clearInterval(intervalId.current);
      intervalId.current = null;
    };
    
    return (
      <div onMouseOver={startInterval} onDoubleClick={stopInterval} onMouseOut={stopInterval}
      style={{background: '#000', height: '255px', width:'255px', cursor:'pointer'}}>
         {square}
      </div>
    );
  }

export default Cuadrado;
