import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Applayout;
