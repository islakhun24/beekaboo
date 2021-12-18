/* eslint-disable no-undef */
import logo from "./assets/images/svg/logo.svg";
import cart from "./assets/images/svg/cart.svg";
import user from "./assets/images/svg/user.svg";
import Slide2 from "./components/slide2";
import Slide1 from "./components/slide1";
import Slide3 from "./components/slide3";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import randomColor from "randomcolor";
import Header from "./components/Header";
import LiquidSwipe from "./components/liquidswipe";
import About from "./components/About";
import Members from "./components/Members";
import SpesialEpisode from "./components/SpesialEpisode";
import Song from "./components/Song";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Shop from "./components/Shop";

function App() {
  let components = [  <Slide1/>, <Slide2/>,]
  var componentsToRender = [  <Slide1/>, <Slide2/>,]// Add components you want to render.
    var backgroundColors = ['#fff000', '#444fff']
  const [y, setY] = useState(window.scrollY);

const handleNavigation = useCallback(
  e => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      console.log("scrolling up");
    } else if (y < window.scrollY) {
      console.log("scrolling down");
    }
    setY(window.scrollY);
  }, [y]
);

useEffect(() => {
  setY(window.scrollY);
  window.addEventListener("scroll", handleNavigation);
  return () => {
    window.removeEventListener("scroll", handleNavigation);
  };
}, [handleNavigation]);

  return (
    <div
      style={{ background: "#90CAF9" }}
      className="flex justify-center items-start flex-col"
    >
      <Header scrollPos={y}/>
     {/* <div className="h-screen w-screen">
     <LiquidSwipe
            components={componentsToRender}
            colors={backgroundColors}
        />
     </div> */}
     <Slide1/>
      <About/>
      <Members/>
      <SpesialEpisode/>
      <Song/>
      <Blog/>
      <Shop/>
      <Footer/>
    </div>
  );
}

export default App;
