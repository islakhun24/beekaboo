
import bgorange from "../assets/images/svg/bgorange.svg";
import artblue from "../assets/images/svg/artblue.svg";
import artpink from "../assets/images/svg/artpink.svg";
import artsmallblue from "../assets/images/svg/artsmallblue.svg";
import artyellow from "../assets/images/svg/artyellow.svg";

const Slide1 = () =>{
 return ( <div
 className="w-full h-full"
>
<div className="flex flex-row">
   <div className="flex flex-row flex-wrap">
     <img
       src={artblue}
       className="mt-24 -ml-16 z-10  -rotate-12 transform"
       alt=""
     />
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