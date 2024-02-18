import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/abrigodegases">
        Abrigo de Gases
      </a>
      <a className="menu-item" href="/Devices">
        Devices
      </a>
      <a className="menu-item" href="/manometers">
        Manômetros
      </a>
      <a className="menu-item" href="/manometersT">
        ManômetrosT
      </a>
      <a className="menu-item" href="/manHe">
        ManHe
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