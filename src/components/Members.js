
import honey from "../assets/images/svg/honey.svg";
import person1 from '../assets/image/svg/person1';
import person2 from '../assets/image/svg/person2';
import person3 from '../assets/image/svg/person3';
const Members = ()=>{
    return (
        <div style={{fontFamily:'Sniglet'}} className="items-center h-screen w-screen flex flex-col">
          <h3 style={{width: 500, msTextAutospace:1}} className="text-center font-normal text-6xl">Family Members of Beekaboo</h3>
          <div className="w-full mt-24 grid grid-cols-3 gap-4">
            <div className="col-span-1 items-center flex flex-col text-4xl">
              <img src={person1} alt="" srcset="" />
              <div>Name</div>
            </div>
            <div className="col-span-1 items-center flex flex-col text-4xl">
            <img src={person2} alt="" srcset="" />
              <div>Name</div>
            </div>
            <div className="col-span-1 items-center flex flex-col text-4xl">
            <img src={person3} alt="" srcset="" />
              <div>Name</div>
            </div>
          </div>
      </div>
    )
}

export default Members