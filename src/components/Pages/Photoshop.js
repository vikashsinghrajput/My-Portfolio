import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import productimage from "./img/../../../assets/cover-Graphic-5.png";
import WorkingOne from "./img/../../../assets/Wok-onit.png";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';

const Photoshop = () => {
  AOS.init();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/graphic');
  };
  return (


    <>
    
    {/* Box-1 */}
      <div  data-aos="fade-right" className="photo-main-contanier">
        <div className="heading-box">
          <h1 className="Project-heading">Projects</h1>
        </div>
        <div className="container-photo">
          <div  data-aos="fade-up-left" className="image-box">
          <img src={WorkingOne} alt="" />
            ;
          </div>
          <div className="heading-box-two">
            <h1>JS Dashboard Masterclass</h1>
            <h6>
              Learn how to build animated JS <br /> dashboards with dynamic API
              data
            </h6>
            <button>
              {" "}
              <span></span> Video Course
            </button>
            <p>Released almost 2 years ago</p>
          </div>
          <div className="btn-box">
            <button className="btn-1">Preview</button>
            <button className="btn-2">
              Demo &nbsp; <FaArrowRight size={20} />
            </button>
          </div>
        </div>
        {/* Box-2 */}
<br />
<div className="line-hr"></div>
        <div className="container-photo">
          <div   data-aos="fade-up-left" className="image-box">
          <img src={WorkingOne} alt="" />
            ;
          </div>
          <div className="heading-box-two">
            <h1>JS Dashboard Masterclass</h1>
            <h6>
              Learn how to build animated JS <br /> dashboards with dynamic API
              data
            </h6>
            <button>
              {" "}
              <span></span> Video Course
            </button>
            <p>Released almost 2 years ago</p>
          </div>
          <div className="btn-box">
            <button className="btn-1"  onClick={handleClick}>Preview</button>
            <button className="btn-2">
              Demo &nbsp; <FaArrowRight size={20} />
            </button>
          </div>
        </div>
{/* Box-3 */}
        <br />
        <div className="line-hr"></div>
        <div className="container-photo">
          <div   data-aos="fade-up-left" className="image-box">
          <img src={productimage} alt="" />
            ;
          </div>
          <div className="heading-box-two">
            <h1>Graphics Designing </h1>
            <h6>
            As a professional graphics designing <br /> i have 5 years experience 
              
            </h6>
            <button>
              {" "}
              <span></span> Let's Start 
            </button>
            <p>A New Project Together</p>
          </div>
          <div className="btn-box">
            <button className="btn-1">Preview</button>
            <button className="btn-2"  onClick={()=> window.open("https://vikashsinghrajput-graphic-protofilio.netlify.app/", "")}>
              Demo &nbsp; <FaArrowRight size={20} />
            </button>
          </div>
        </div>



     
      </div>
    

<div>
  

  </div>
 
        {/* Box-Two */}
 
        <div className="gotopbtn">
<p>Coded &nbsp;<FaHeart  color="#8f44fd"/>&nbsp;by@Vikash Singh Rajput</p>

          </div>
    </>
  );
};

export default Photoshop;
