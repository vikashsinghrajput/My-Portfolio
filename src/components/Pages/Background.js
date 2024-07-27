import svg1 from "../../assets/Bg-1.svg";
import svg2 from "../../assets/Bg-2.svg";
import svg3 from "../../assets/Bg-3.svg";
import Desgin from "./Desgin";

const Background = () => {
  return (
    <>
      <div className="Bg-container">
        <div className="bg-1">
          {" "}
          <img src={svg1} alt="" />
        </div>
        <div className="bg-4">
          {" "}
          <img src={svg3} alt="" />
        </div>
        <div className="bg-2">
          {" "}
          <img src={svg3} alt="" />
        </div>

        <div className="bg-3">
          <img src={svg2} alt="" />
        </div>
      </div>
      <Desgin />
    </>
  );
};

export default Background;
