
import honey from "../../assets/images/svg/honey.svg";
import person1 from '../../assets/images/svg/person1.svg';
import person2 from '../../assets/images/svg/person2.svg';
import person3 from '../../assets/images/svg/person3.svg';
const Members = ()=>{
    return (
        <div style={{fontFamily:'Sniglet'}} className="items-center h-screen w-screen flex flex-col">
          <h3 style={{width: 500, msTextAutospace:1}} className="text-center font-normal text-6xl">Family Members of Beekaboo</h3>
          <div className="w-full mt-24 grid grid-cols-3 gap-4">
            <div className="col-span-1 space-y-4 items-center flex flex-col text-4xl">
              <img src={person1} alt="" srcset="" />
              <div>Name</div>
            </div>
            <div className="col-span-1 space-y-4 items-center flex flex-col text-4xl">
            <img src={person2} alt="" srcset="" />
              <div>Name</div>
            </div>
            <div className="col-span-1 space-y-4 items-center flex flex-col text-4xl">
            <img src={person3} alt="" srcset="" />
              <div>Name</div>
            </div>
          </div>
      </div>
    )
}

export default Members