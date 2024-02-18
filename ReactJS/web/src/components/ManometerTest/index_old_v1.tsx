// Pollyfills for IE and edge
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// @ts-ignore
import { Arced } from "./gauges/arced.tsx";


import './index.css';
import React, {useState,useEffect, Component} from 'react';

import * as ReactDOM from 'react-dom';
import { render } from 'react-dom';
//import { useGauge } from '..';
import { useGauge } from "use-gauge";
import { useControls } from 'leva';

import * as S from './styles.js';
import api from '../../service/api.js';


function ManometerHeliumT  (PatualHe1)  {

  const [valoresNow, CilindrosNow] = useState([0]); // useState dos valores atuais 
  
  async function loadCilindrosNow() {

    
  
  
      await api.get ('https://z3rh89xnof.execute-api.sa-east-1.amazonaws.com/prod/today2?devideID=Aliine')
             
     
               .then(response => {
                
                 CilindrosNow(response.data);
  
                 console.log('valores Agora:',valoresNow);
               
               })
               .catch(error => {
                 console.log(error);
               });
  }

  useEffect(() => {

    loadCilindrosNow();

  }, [PatualHe1]);

  {
    // @ts-ignore
  valoresNow.map(t => ( PatualHe1=Number(t.He).toFixed(0)
   

   ))
 }

  return (
    
  
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-8">
        <Arced value={PatualHe1} />
        <S.ManHe><h3>bar</h3></S.ManHe>
        <S.ManHe2><h3>PSI</h3></S.ManHe2>
        
      </div>
      </div>
    

  );
};

export default ManometerHeliumT;

//ReactDOM.render(<ManometerHelium />, document.getElementById('root'));
