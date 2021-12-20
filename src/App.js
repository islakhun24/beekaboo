/* eslint-disable no-undef */
import Slide2 from "./components/slide2";
import Slide1 from "./components/slide1";
import Slide3 from "./components/slide3";
import "./App.css";
import { createRef, useCallback, useEffect, useRef, useState } from "react";
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

  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const memberRef = useRef(null)
  const spesialEpisodeRef = useRef(null)
  const songRef = useRef(null)
  const blogRef = useRef(null)
  const shopRef = useRef(null)
  const footerRef = useRef(null)

  const [headerRefValue, setheaderRefValue] = useState(0);
  const [aboutRefValue, setaboutRefValue] = useState(0);
  const [memberRefValue, setmemberRefValue] = useState(0);
  const [spesialEpisodeRefValue, setspesialEpisodeRefValue] = useState(0);
  const [songRefValue, setsongRefValue] = useState(0);
  const [blogRefValue, setblogRefValue] = useState(0);
  const [shopRefValue, setshopRefValue] = useState(0);
  const [footerRefValue, setfooterRefValue] = useState(0);
const handleNavigation = useCallback(
  e => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      // console.log("scrolling up");
    } else if (y < window.scrollY) {
      // console.log("scrolling down");
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

useEffect(()=>{
  setheaderRefValue(headerRef.current.offsetTop)
  setaboutRefValue(aboutRef.current.offsetTop)
  setmemberRefValue(memberRef.current.offsetTop)
  setspesialEpisodeRefValue(spesialEpisodeRef.current.offsetTop)
  setsongRefValue(songRef.current.offsetTop)
  setblogRefValue(blogRef.current.offsetTop)
  setshopRefValue(shopRef.current.offsetTop)
  setfooterRefValue(footerRef.current.offsetTop)
  
}, [])

  return (
    <div
      style={{ background: "#90CAF9" }}
      className="flex justify-center items-start flex-col overflow-hidden "
    >
      <div ref={headerRef} >
      <Header headerRef={parseInt(headerRefValue)}
              aboutRef={parseInt(aboutRefValue)}
              memberRef={parseInt(memberRefValue)}
              spesialEpisodeRef={parseInt(spesialEpisodeRefValue)}
              songRef={parseInt(songRefValue)}
              blogRef={parseInt(blogRefValue)}
              shopRef={parseInt(shopRefValue)}
              footerRef={parseInt(footerRefValue)}
              scrollPos={y}/>
      <div className="h-screen w-screen overflow-hidden">
      <div className="  w-full h-full -mr-4 left-0 -right-2"  />
      <div className="absolute top-0 cont flex space-x-8">
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
     <div className="drip"></div>
       <div className="drip"></div>
      <div className="drip"></div>
     <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
       {/* <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div>
      <div className="drip"></div> */}
      </div>
      </div>
      

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
        <Slide1/>
      </div>
     <div  ref={aboutRef}>
      <About scrollPos={y} aboutRef={parseInt(aboutRefValue)}/>
     </div>
      <div ref={memberRef}>
        <Members/>
      </div>
      <div ref={spesialEpisodeRef}>
        <SpesialEpisode/>
      </div>
      <div ref={songRef}>
        <Song/>
      </div>
      <div ref={blogRef}>
        <Blog/>
      </div>
      <div ref={shopRef}>
        <Shop/>
      </div>
      <div ref={footerRef}>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
