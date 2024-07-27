import "./App.css";
import "./style.css";
import "./responsive.css";
import ScrollToTop from "react-scroll-to-top";
import Background from "./components/Pages/Background";
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "aos/dist/aos.css"; // You can also use <link> for styles
import MainGraphic from "./components/Pages/PhotoShop-Work/MainGraphic";
// ..

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      {/* /* <MainGraphic/> */}

      <Background />
      <ScrollToTop smooth />
    </>
  );
}

export default App;
