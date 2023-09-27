import React from "react";
import {  FaFacebook,  FaGithub, FaLinkedin } from 'react-icons/fa';
import { Navbar } from "react-bootstrap";


const Footer =()=>{
return(
<div className="footer">
    <h2>.</h2>

    <div className="f-logo">
    <Navbar.Brand className="logo" href="/Home"> < h2 className='title1'>LOGO</h2></Navbar.Brand> 
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8">
    <a href="https://github.com/OmaimaSayedmohamed2022">
              <FaGithub className="icons" />
            </a>
            <a href="https://www.facebook.com/omaima.sayed.75">
              <FaFacebook className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/omaima-sayed-45b829256/">
              <FaLinkedin className="icons" />
            </a>
    <p className="p1">Copyright 2023 by Refsnes Data. All Rights Reserved.</p>
    </div>
    </div>

)
}
export default Footer;
 



  
