import { Outlet } from "react-router-dom";
import Navabar from "../ui/Navbar";
import Toolbar from "../ui/Toolbar";
// import { useState } from 'react';
function home() {
  return (
    <>
      <Navabar />
      <Toolbar />
      <Outlet />
    </>
  );
}
export default home;
