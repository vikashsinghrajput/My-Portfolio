import image1 from "../../assets/slider-image-1.jpg";
import image2 from "./img/../../../assets/slider-image-2.jpg";
import image3 from "./../../assets/slider-image-3.jpg";
import AliceCarousel, { Link } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaArrowRight } from "react-icons/fa";


const Project = () => {
  
  const responsive = {
    2000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
    800: {
      items: 1,
    },
    0: {
      items: 1,
    },
  };

  return (
    <>
      <div className="project-contanier">
        <div className="heading-box">
          <h1>Projects</h1>
        </div>
        <div className="image-slider">
          <AliceCarousel responsive={responsive}>
            <img src={image1} className="sliderimg" alt="" />
            <img src={image2} className="sliderimg" alt="" />
            <img src={image3} className="sliderimg" alt="" />
      
          </AliceCarousel>
       <div className="full-protfolio">
        <Link to={'#'}onClick={() => window.location = 'mailto:vsr81150@gmail.com'}>   Full portfolio, available on demand</Link>
       </div>
        </div>
        <div className="text-box">
          <h3>React Sensei</h3>
          <p>
            UI component library used to build beautiful responsive company portfolio 
            super fast. All c ode is open-source and currently only partially
            maintained.
          </p>
          <button  onClick={()=> window.open("https://safetytech.in", "_blank")}><Link to={'https://safetytech.in/'}> Demo   &nbsp;  <FaArrowRight  size={20}/></Link></button>
          
        </div>
        
      </div>
    </>
  );
};

export default Project;
