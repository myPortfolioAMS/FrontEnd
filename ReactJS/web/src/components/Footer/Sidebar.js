import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/login">
        Login
      </a>
      <a className="menu-item" href="/Register">
        Register
      </a>
      <a className="menu-item" href="/AbrigoDeGases">
        Abrigo de Gases
      </a>
    
      <a className="menu-item" href="/Manometers">
        Manômetros
      </a>
    

      <a className="menu-item" href="/QrCode">
        SINC Celular
      </a>
      <a className="menu-item" href="/logout">
        Sair
      </a>
    </Menu>
  );
};