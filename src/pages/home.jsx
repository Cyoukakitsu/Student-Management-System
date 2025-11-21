import { Outlet, useLocation } from "react-router-dom";
import Navabar from "../ui/Navbar";
import Toolbar from "../ui/Toolbar";
// import { useState } from 'react';
function Home() {
  const location = useLocation();

  return (
    <>
      <Navabar />
      {(location.pathname === "/home/score" ||
        location.pathname === "/home/student") && <Toolbar />}
      <Outlet />
    </>
  );
}
export default Home;
