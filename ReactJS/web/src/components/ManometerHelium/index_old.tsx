// Pollyfills for IE and edge
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// @ts-ignore
import { Arced } from "./gauges/arced.tsx";


import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from 'react-dom';
//import { useGauge } from '..';
import { useGauge } from "use-gauge";
import { useControls } from 'leva';

import * as S from './styles.js';


function ManometerHeliumT  ()  {


  return (
    
  
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-8">
        <Arced value={200} />
      </div>
      </div>

  );
};

export default ManometerHeliumT;

//ReactDOM.render(<ManometerHelium />, document.getElementById('root'));
