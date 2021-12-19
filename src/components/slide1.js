
import bgorange from "../assets/images/svg/bgorange.svg";
import artblue from "../assets/images/svg/artblue.svg";
import artpink from "../assets/images/svg/artpink.svg";
import artsmallblue from "../assets/images/svg/artsmallblue.svg";
import artyellow from "../assets/images/svg/artyellow.svg";
import InlineSVG from 'svg-inline-react';

const Slide1 = () =>{

  
  const blob1 = ` <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M39.2,-70.5C50.4,-61.5,58.5,-50,63.4,-37.9C68.2,-25.7,69.7,-12.8,66.7,-1.8C63.6,9.3,55.9,18.6,50.2,29.2C44.4,39.8,40.6,51.7,32.5,62.6C24.5,73.4,12.2,83.2,-0.8,84.6C-13.9,86.1,-27.8,79.1,-36.1,68.4C-44.4,57.7,-47.1,43.2,-54.9,31.2C-62.6,19.2,-75.4,9.6,-78.8,-2C-82.2,-13.6,-76.4,-27.1,-66.1,-34.9C-55.9,-42.6,-41.4,-44.5,-29.6,-53.1C-17.9,-61.6,-8.9,-76.8,2.6,-81.2C14.1,-85.7,28.1,-79.4,39.2,-70.5Z" transform="translate(100 100)" />
</svg>`
 return ( <div
 className="absolute top-0 w-full h-full"
>
<div className="flex flex-row">
   <div className="flex flex-row flex-wrap">
     <img
       src={artblue}
       className="mt-24 -ml-16 z-10  -rotate-12 transform"
       alt=""
     />
    <InlineSVG src={blob1} />
     <img src={artpink} alt="" className="-mt-32 z-10  -ml-12" />
   </div>
   <div
     style={{ fontFamily: "Sniglet" }}
     className="flex flex-col text-6xl text-white items-center justify-center  z-10 flex-grow"
   >
     <div className="mt-24">Wellcome to</div>
     <div>Beekaboo Family</div>
   </div>
   <div className="flex flex-row flex-wrap">
     <img
       src={artsmallblue}
       className="-mt-56 -ml-16 z-10   transform"
       alt=""
     />
     <img src={artyellow} alt="" className="-mr-52 z-10 " />
   </div>
 </div>
 
</div>);
}

export default Slide1