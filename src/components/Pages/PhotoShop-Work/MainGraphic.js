import React from "react";
import Graphic from "./Graphic ";

import Sdata from "./Sdata";
console.log(Sdata);
const MainGraphic = (props) => {
  console.log(props);

  return (
    <>

      <div className="auto-mobile">
   
        {Sdata.map(function nccar(val) {

          return (
            <Graphic
            mainBeforeImg={val.mainBeforeImg}
            mainAfterImg={val.mainAfterImg}
              heading={val.heading}
              about={val.about}
              // Image-1
              beforeimgOne={val.beforeimgOne}
              after1imgOne={val.after1imgOne}
              // Image-2
              beforeimgTwo={val.beforeimgTwo}
              after1imgTwo={val.after1imgTwo}
              // Image-3
              beforeimgThree={val.beforeimgThree}
              after1imgThree={val.after1imgThree}
              // Image-4
              beforeimgFour={val.beforeimgFour}
              after1imgFour={val.after1imgFour}
              // Heading&Text
              
              headingTwo={val.headingTwo}
              aboutTwo={val.aboutTwo}
              worktype1={val.worktype1}
              worktype2={val.worktype2}
              worktype3={val.worktype3}
              worktype4={val.worktype4}
              worktype5={val.worktype5}
            />
          );
        })}
      </div>


    

      
    </>
  );
};

export default MainGraphic;
