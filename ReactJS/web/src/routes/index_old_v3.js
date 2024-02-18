import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';


import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import Logout from '../views/Logout';
//import Login from '../login';

import AbrigoDeGases from "../views/abrigodegases";


import Manometers from '../views/manometers';

import Config from '../views/Config';


import Mensagens from "../views/mensagens";

import SINC from '../views/QrCode';



function MyRoutes() {



  return (
    <div className="App">
       <Router>

    {/*
      <div className="content">


        <NavLink className='content' exact to="/" activeClassName="active">Home</NavLink>
        <NavLink className='content' to="/Login" activeClassName="active">Login</NavLink>
        <NavLink className='content' to="/Register" activeClassName="active">Register</NavLink>
        <NavLink className='content' to="/Devices" activeClassName="active">Devices</NavLink>
        <NavLink className='content' to="/Manometers" activeClassName="active">Manometers</NavLink>
        <NavLink className='content' to="/Dashboard" activeClassName="active">Dashboard</NavLink>
        <NavLink className='content' to="/Logout" activeClassName="active">Logout</NavLink>
       </div>

  */}
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/Home" element={<Home />} ></Route>
          <Route path="/Login" element={<Login />} ></Route>
          <Route path="/Register" element={<Register />} ></Route>
          <Route path="/AbrigoDeGases" element={<AbrigoDeGases />} ></Route>

          <Route path="/Manometers" element={<Manometers />} ></Route>
        
       
          <Route path="/Config" element={<Config />} ></Route>
        
          <Route path="/Logout" element={<Logout />} ></Route> 

          <Route path="/Mensagens" element={<Mensagens />} ></Route>

        </Routes>
        </Router>
      </div>
  
  );
}

export default MyRoutes;
