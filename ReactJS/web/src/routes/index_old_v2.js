import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';


import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import Logout from '../views/Logout';
//import Login from '../login';


import Devices from '../views/devices';

import Manometers from '../views/manometers';
import Dashboard from '../views/dashboard';

import SINC from '../views/QrCode';


import Cilindro1Helio from '../views/abrigodegases/cilindro1ViewHelio';
import Cilindro1HelioConfig from '../views/abrigodegases/cilindro1ViewHelio/cilindro1ViewHelioConfig';

import PrivateRoutes from './PrivateRoutes';
import { getUser, getToken, setUserSession, removeUserSession } from "../service/AuthService";
import axios from "axios";


const verifyTokenAPIURL = "https://hsmsl98l5h.execute-api.sa-east-1.amazonaws.com/prod/verify";


function MyRoutes() {

  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token === "undefined" || token === undefined || token === null || token === "" || !token) {
      return;
    }

    const requestConfig = {
    
      headers: {
          'x-api-key': 'sxqmhhONeJ88nV7OIQAnq8LhaCMVhBEX2hHgOwZ4'
          }
      }

      const requestBody = {

        user: getUser(),
        token: token
      }

      axios.post(verifyTokenAPIURL, requestBody, requestConfig).then((response) => {
        setUserSession(response.data.user, response.data.token);
        setIsAuthenticating(false);
      }).catch(() => {
        removeUserSession();
        setIsAuthenticating(false);
      })

  }, []);

  const token = getToken();
  if (isAuthenticating && token) {
    return <div className="content">Authenticating...</div>

  }

  return (
    <div className="App">
      {/*}
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/premium-content">PremiumContent</Link>
        <Link to="/Devices">Devices</Link>
        <Link to="/Manometers">Manometers</Link>
        <Link to="/Logout">Logout</Link>
       
      </div>
  */}

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          {/*<Route element={<PrivateRoutes />} >*/}
          <Route path="/Devices" element={<Devices />} exact/>
          <Route path="/Manometers" element={<Manometers />} exact/>

 
          {/*</Route>*/}
          <Route path="/Manometers" element={<Manometers />} />
          <Route path="/Dashboard" element={<Dashboard />}/>
          
    
 
          <Route path="/Logout" element={<Logout />} />

        </Routes>
      </div>
    </div>
  );
}

export default MyRoutes;
