import React, { useState } from "react";
import Logo from "../../assets/sax2.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <p className="nome">Daniel Horn</p>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/disc"> Biografia </Link>
          <Link to="/menu"> Discografia </Link>
          <Link to="/galery"> Galeria </Link>
          <Link to="/contact"> Contato </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/disc"> Biografia </Link>
        <Link to="/menu"> Discografia </Link>
        <Link to="/galery"> Galeria </Link>
        <Link to="/contact"> Contato </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
