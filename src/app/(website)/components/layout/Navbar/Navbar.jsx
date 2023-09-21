import React from "react";
import DesktopNavbar from "./DesktopNavbar.jsx/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

 const Navbar = () => {
  return (
    <div>
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
