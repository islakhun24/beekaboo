/* eslint-disable react-hooks/exhaustive-deps */
import logo from "../../assets/images/svg/logo.svg";
import cart from "../../assets/images/svg/cart.svg";
import user from "../../assets/images/svg/user.svg";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { useEffect, useState } from "react";

const Header = (props)=>{
    
    const {
      scrollPos, 
      headerRef,
      aboutRef,
      memberRef,
      spesialEpisodeRef,
      songRef,
      blogRef,
      shopRef,
      footerRef
    } = props
    const [widthP, setWidthP] = useState('')
    

    useEffect(()=>{
      if (scrollPos > headerRef  && scrollPos < aboutRef){
        setWidthP('8%')
      }
      else if (aboutRef < scrollPos && scrollPos < memberRef){
        setWidthP('16.7%')
      }
      else if (memberRef < scrollPos && scrollPos < spesialEpisodeRef){
        setWidthP('33.4%')
      }
      else if (spesialEpisodeRef < scrollPos && scrollPos < songRef){
        setWidthP('50.1%')
      }
      else if (songRef < scrollPos && scrollPos < blogRef){
        setWidthP('66.8%')
      }
      else if (blogRef < scrollPos && scrollPos < shopRef){
        setWidthP('83.5%')
      }
      else if (shopRef < scrollPos && scrollPos < footerRef){
        setWidthP('100%')
      }
      else if (footerRef > scrollPos){
        setWidthP('100%')
      }
      else if(scrollPos===0){
        setWidthP('0%')
      }
    }, [scrollPos])
    const styleProgres ={
      height: '4px',
      width: scrollPos < 30 ? '0%' : widthP,
      backgroundColor: '#fff000'
    }
    return (
    <header style={scrollPos > 20 ? {backgroundColor: '#FFF'}: {}} className="z-50  fixed top-0 left-0 w-full">
    <div style={{
      height: '56px'
    }} className="flex flex-row space-x-8 px-16">
      <div className="bg-white rounded-b-lg  flex items-center justify-center px-4">
        <img src={logo} alt="" />
      </div>
      <div
        style={{
          fontFamily: "Overlock",
          paddingBottom: '8px'
        }}
        className={scrollPos > 16 ? 'text-black flex flex-grow space-x-8 font-bold text-lg items-center justify-center': 'text-white flex flex-grow space-x-8 font-bold text-lg items-center justify-center'}
      >
        <div>Shop</div>
        <div>Video</div>
        <div>Music</div>
        <div>Blog</div>
        <div>Learning Zone</div>
        <div>About</div>
      </div>
      <div className="flex-wrap flex flex-row space-x-12 pl-16 items-center justify-center">
        <button>
          <img src={cart} alt="" />
        </button>
        <button>
          <img src={user} alt="" />
        </button>
      </div>
    </div>
    <div style={styleProgres}></div>
  </header>)
}

export default Header;