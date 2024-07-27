import { FaInstagram } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

  


  // change nav color when scrolling
  const [color, setcolor] = useState(false);
  const changecolor = () => {
    if (window.scrollY >= 90) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changecolor);
  return (
    <>
      <div className={color ? "nav-conatiner header-bg" : "nav-conatiner"}>
        <nav>
          <div className="logo-box">
            <h1>  Vikash Singh Rajput</h1>
            <div className="logo-desgin"></div>
          </div>
          <div className="sol-box">
            <ul>
              <li>
                {" "}
                <Link to={'https://www.instagram.com/vikash_singh_rajput_000/'} target="_blank">
                  <FaInstagram
                    size={30}
                    color="#fff"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#8739fa")
                    }
                  />
                </Link>
              </li>
              <li>
                {" "}
                <Link to={'https://github.com/vikashsinghrajput'} target="_blank">
                  <SlSocialGithub
                    onMouseOver={({ target }) =>
                      (target.style.color = "#8739fa")
                    }
                    size={30}
                    color="#fff"
                  />
                </Link>
              </li>
              <li>
                {" "}
                <Link to={'https://join.skype.com/invite/ui09yuWdZuVO'} target="_blank">
                  <TiSocialSkypeOutline
                    onMouseOver={({ target }) =>
                      (target.style.color = "#8739fa")
                    }
                    size={35}
                    color="#fff"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="seting">
            <IoSettingsOutline size={30} color="#fff" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
