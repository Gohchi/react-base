import React from 'react';

import { Outlet } from "react-router-dom";

import Nav from './components/Nav/Nav';

import './global.css';


const Layout = () => (
  <div className="app">
    <Nav />
    <Outlet />
  </div>
);

export default Layout;