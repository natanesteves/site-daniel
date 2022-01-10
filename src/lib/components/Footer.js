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
      <p className="footinho"> &copy;danielhornmusic@gmail.com</p>
      <p className="footinho2"> &copy;Desenvolvido por: //github.com/natanesteves</p>
    </div>
  );
}

export default Footer;
