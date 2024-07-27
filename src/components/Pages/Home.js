import svg4 from "../../assets/profile-pic (4).png";

import Navbar from "./Navbar";
import Project from "./Project";
import Photoshop from "./Photoshop";
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
import Bounce from 'react-reveal/Bounce';



const Home = () => {
  config({ ssrFadeout: true });
 
  return (
    
    <>
    <Navbar/>
    <Project/>
    <Photoshop/>

      <div className="hero-contanier">
        <div className="text-column">
        <Zoom ssrFadeout>
          <h2 >Hi, I'm Vikash</h2>
          <h4>MERN Developer</h4>
          </Zoom>
          <Bounce>
          <p>
            Through constant practice & learning, I produce aesthetic software
            to an extremely high standard.
          </p>
          </Bounce>
        </div>
        <Zoom>
        <div className="img-column">
          <img src={svg4} alt="" />
        </div>
        </Zoom>
        <div class="container">
          <div class="field">
            <div class="mouse"> </div>
            <h2>scroll down</h2>
            <div class="arrow">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
