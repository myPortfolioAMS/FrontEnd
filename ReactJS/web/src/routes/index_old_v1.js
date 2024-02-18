import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from '../views/Home';
import Login from '../views/Login';
//import Login from '../login';

import Abrigodegases from '../views/abrigodegases';
import Devices from '../views/devices';

import Manometers from '../views/manometers';
import ManometersT from '../views/manometersT';
import ManHe from '../views/manHe';
import SINC from '../views/QrCode';
import Logout from '../views/Logout';

import Cilindro1Helio from '../views/abrigodegases/cilindro1ViewHelio';
import Cilindro1HelioConfig from '../views/abrigodegases/cilindro1ViewHelio/cilindro1ViewHelioConfig';
import Register from '../components/Register';
import PrivateRoutes from './PrivateRoutes';




export default function myRoutes() {

    return (

       <BrowserRouter>


                <Routes>

                {/*
                    <Route  path="/home" element={<Home/>} />
                <Route  path="/" element={<Login/>} />
                <Route path ="/register" element={<Register/>} />
               
                <Route  path="/login" element={<Login/>} />
                */}
                {/*}
                <Route element={<PrivateRoutes/>}>
                    <Route element={<Devices/>} path="/devices" />
                    <Route element={<Manometers/>} path="/manometers" />

                </Route>
                */}
                <Route element={<Login/>} path="/login" />
                <Route element={<Home/>} path="/home" />
                <Route element={<Devices/>} path="/devices" />
                <Route element={<Manometers/>} path="/manometers" />
            
              {/*
               <Route element={Login} path="/" />
                <Route  path="/devices" element={<Devices/>} />
                <Route  path="/abrigodegases/cilindro1helio/:id" element={<Cilindro1Helio/>} />
                <Route  path="/abrigodegases/cilindro1helio/cilindro1helioconfig/:id" element={<Cilindro1HelioConfig/>} />
                <Route  path="/manometers" element={<Manometers/>} />
                <Route  path="/manometerst" element={<ManometersT/>} />
                <Route  path="/manhe" element={<ManHe/>} />
                <Route  path="/SINC" element={<SINC/>} />
                <Route  path="/logout" element={<Login/>} />
           */}
                </Routes>
   
       </BrowserRouter>
    );
}



