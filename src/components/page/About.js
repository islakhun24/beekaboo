/* eslint-disable react-hooks/exhaustive-deps */

import honey from "../../assets/images/svg/honey.svg";
import honeyabout from "../../assets/images/svg/honey-about.svg";
import { createRef, useEffect, useRef, useState } from "react";
const About = (props)=>{
  const {scrollPos, aboutRef} = props
  const [visibleHoneyAbout, setVisibleHoneyAbout] = useState(false)
  const titleRef = createRef(null)
  const onMouseEnterHoneyAbout= () => {
    setVisibleHoneyAbout(true)
  };
  const onMouseLeaveHoneyAbout= () => {
    setVisibleHoneyAbout(false)
  };
  console.log(scrollPos,aboutRef);
  useEffect(()=>{
      if(scrollPos > aboutRef - 200){
        titleRef.current.classList.add('typing-text');
      }else{
        titleRef.current.classList.remove('typing-text');
      }
  },[scrollPos])
    return (
        <div className="h-screen w-screen overflow-hidden">
          <div className="grid-cols-3 grid ">
          <div style={{fontFamily: 'Sniglet'}} className="col-span-2 text-white flex flex-col  items-center px-20 py-24">
              <h1 ref={titleRef} className="text-6xl w-full justify-start">My Name is Beekaboo</h1>
              <h3 className="mt-8  w-full justify-start text-2xl">Beekaboo is (Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ) </h3>
          </div>
        <div onMouseEnter={()=> onMouseEnterHoneyAbout()} onMouseLeave={()=> onMouseLeaveHoneyAbout()} className="relative -ml-24 flex col-span-1">
          {
            visibleHoneyAbout ?  <img className='absolute -ml-24 right-0 transition hover:ease-in-out delay-150 transform scale-110' src={honeyabout} alt=""  /> : null
          }
               <img className="absolute top-10 left-20" src={honey} alt="" />
        </div>
          </div>
      </div>
    )
}

export default About