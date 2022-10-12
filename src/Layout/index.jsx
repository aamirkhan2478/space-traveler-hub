import React from 'react';
import { Outlet } from 'react-router-dom';
import Appbar from './components/Appbar';

const Navbar = () => (
  <>
    <Appbar />
    <Outlet />
  </>
);

export default Navbar;
