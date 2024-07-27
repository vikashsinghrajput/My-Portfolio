import React from "react";
import "./graphic.css";
import ImageSlider from "react-image-comparison-slider";
const Graphic = (props) => {
  return (
    <>
        
        <h1 className="main-heading">{props.heading}</h1>
        <hr className="line" />
      <div className="car-container">
     
        <div className="image-contact">
          <ImageSlider
            image1={props.mainAfterImg}
            image2={props.mainBeforeImg}
            sliderColor="#7239ea"
            handleColor="#7239ea"
            onSlide={() => {
              console.log("sliding");
            }}
          />
        </div>
        <div className="text-contact-two ">
          <h2>{props.headingTwo}</h2>
          <p>{props.aboutTwo}</p>
          <ul >
            <li>{props.worktype1}</li>
            <li>{props.worktype2}</li>
            <li>{props.worktype3}</li>
            <li>{props.worktype4}</li>
            <li>{props.worktype5}</li>

          </ul>
        </div>


      </div>
      <div className="ex-container">
        <div className="cont-img">
          <ImageSlider
            image1={props.beforeimgOne}
            image2={props.after1imgOne}
              sliderColor="#7239ea"
            handleColor="#7239ea"
            onSlide={() => {
              console.log("sliding");
            }}
          />
        </div>
        <div className="cont-img">
          <ImageSlider
            image1={props. beforeimgTwo}
            image2={props.after1imgTwo}
             sliderColor="#7239ea"
            handleColor="#7239ea"
            onSlide={() => {
              console.log("sliding");
            }}
          />
        </div>

        <div className="cont-img">
          <ImageSlider
            image1={props.beforeimgThree}
            image2={props.after1imgThree}
              sliderColor="#7239ea"
            handleColor="#7239ea"
            onSlide={() => {
              console.log("sliding");
            }}
          />
        </div>
        <div className="cont-img">
          <ImageSlider
            image1={props.after1imgFour}
            image2={props.beforeimgFour}
              sliderColor="#7239ea"
            handleColor="#7239ea"
            onSlide={() => {
              console.log("sliding");
            }}
          />
       
        </div>
     
      </div>
         
      
     
    </>
  );
};

export default Graphic;
