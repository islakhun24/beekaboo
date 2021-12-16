
import bgyellow from "../assets/images/svg/bgyellow.svg";
import artblue from "../assets/images/svg/artblue.svg";
import artpink from "../assets/images/svg/artpink.svg";
import artsmallblue from "../assets/images/svg/artsmallblue.svg";
import artyellow from "../assets/images/svg/artyellow.svg";
import './../assets/css/icon-color.css'
const Slide2 = () =>{
 return  (
 <div className="w-screen h-screen" style={{
   backgroundImage: `url(${bgyellow})`,
   backgroundSize: "100%",
   backgroundRepeat: "no-repeat",
   color: '#fff000'
 }}
>
 <div className="flex flex-row">
   <div className="flex flex-row flex-wrap">
     <img
       src={artblue}
       className="mt-24 -ml-16 -rotate-12 transform"
       alt=""
     />
     <img src={artpink} alt="" className="-mt-32 -ml-12" />
   </div>
   <div
     style={{ fontFamily: "Sniglet" }}
     className="flex flex-col text-6xl text-white items-center justify-center flex-grow"
   >
     <div className="mt-24">Wellcome to</div>
     <div>Beekaboo Family</div>
   </div>
   <div className="flex flex-row flex-wrap">
     <img
       src={artsmallblue}
       className="-mt-56 -ml-16  transform"
       alt=""
     />
     <img src={artyellow} alt="" className="-mr-52" />
   </div>
 </div>
</div>);
}

export default Slide2