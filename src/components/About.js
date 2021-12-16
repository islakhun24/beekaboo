
import honey from "../assets/images/svg/honey.svg";
const About = ()=>{
    return (
        <div className="h-screen w-screen flex flex-row">
        <div style={{fontFamily: 'Sniglet'}} className="w-4/5 text-white flex flex-col  items-center px-20 py-24">
          <h1 className="text-6xl w-full justify-start">My Name is Beekaboo</h1>
          <h3 className="mt-8  w-full justify-start text-2xl">Beekaboo is (Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ) </h3>
        </div>
        <div className="-ml-28">
          <img src={honey} alt="" />
        </div>
      </div>
    )
}

export default About