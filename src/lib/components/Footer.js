import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";

import FacebookIcon from "@material-ui/icons/Facebook";

import "../../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/danielhornmusic/"><InstagramIcon/></a> 
        <a href="https://www.facebook.com/DaniHornMusic"><FacebookIcon /></a>  
      </div>
      <p> &copy;contato@danielhornmusic.com</p>
    </div>
  );
}

export default Footer;
