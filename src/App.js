/* eslint-disable no-undef */
import Slide2 from "./components/slide2";
import Slide1 from "./components/slide1";
import Slide3 from "./components/slide3";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import randomColor from "randomcolor";
import Header from "./components/page/Header";
import {LiquidSwipe} from "./components/liquidswipe";
import About from "./components/page/About";
import Members from "./components/page/Members";
import SpesialEpisode from "./components/page/SpesialEpisode";
import Song from "./components/page/Song";
import Blog from "./components/page/Blog";
import Footer from "./components/page/Footer";
import Shop from "./components/page/Shop";
import Home from "./components/page/Home";
import Corousel from "./components/corousel/Corousel";
import bgorange from "./assets/images/svg/bgorange.svg";


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
      className="flex justify-center items-start flex-col overflow-hidden "
    >
      <Header scrollPos={y}/>
      <div className="h-screen w-screen">
      <div className="absolute w-full h-full -mr-4 left-0 -right-2 bg-orange"  />
        <Slide1/>
      </div>
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
