import { Outlet } from "react-router-dom";
import Navabar from "../ui/Navbar";
// import { useState } from 'react';
function home() {
  return (
    <>
      <Navabar />
      <Outlet />
    </>
  );
}
export default home;
