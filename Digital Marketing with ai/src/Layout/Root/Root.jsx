import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const Root = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
