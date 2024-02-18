import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import { GlobalStyle } from './reset.css';





import Routes from './routes';
import  {Amplify}  from 'aws-amplify';


import config from './aws-exports';

Amplify.configure(config);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <React.StrictMode>   

  
   
    <Routes />
 
  
  </React.StrictMode>


  
);
