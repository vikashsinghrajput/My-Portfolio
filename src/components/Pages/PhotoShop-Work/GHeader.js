import React from 'react'
import "./GHeader.css";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram,FaGithub ,FaTwitter  } from "react-icons/fa";
import { Link } from 'react-scroll';
import Logo from "../../aasets/P-Logo.png";

const handleSetActive = (to) => {
    console.log(to);
  };

const GHeader = () => {
  return (
    <>
    
    <div className="main-header">
			<div className="header">
			<div className="logo">
					<img src={Logo} alt="" /></div>
				<div className="navbar">
					<ul>
						 <Link to="home" spy={true}  smooth={true}  activeClass="active"   offset={50}  duration={100} onSetActive={handleSetActive} >Beauty Retouching</Link>
						 <Link to="about" spy={true}  smooth={true}  activeClass="active"   offset={50}  duration={500} onSetActive={handleSetActive} >Clipping Path Services</Link>
						 <Link to="eduction" spy={true}  smooth={true}  activeClass="active"   offset={50}  duration={500} onSetActive={handleSetActive} > Automobile Retouching</Link>
						 <Link to="Skils" spy={true}  smooth={true}  activeClass="active"   offset={50}  duration={500} onSetActive={handleSetActive}>Product Retouching</Link>
						 <Link to="Project" spy={true}  smooth={true}  activeClass="active"   offset={50}  duration={500} onSetActive={handleSetActive} >Photo Retouching</Link>
						 <Link to="Exprience" spy={true}  smooth={true}  activeClass="active"   offset={50}  duration={500} onSetActive={handleSetActive}>Photo Retouching</Link>
					
						
					</ul>
				</div>
			
		
</div>
		</div>
    </>
  )
}

export default GHeader
