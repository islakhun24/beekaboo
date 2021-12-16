import logo from "../assets/images/svg/logo.svg";
import cart from "../assets/images/svg/cart.svg";
import user from "../assets/images/svg/user.svg";

const Header = (props)=>{
    const {scrollPos} = props
    return (<header style={scrollPos > 16 ? {backgroundColor: '#F2805F', paddingBottom: 8}: {}} className="z-20 fixed top-0 left-0 h-14 w-full flex flex-row space-x-8 px-16">
    <div className="bg-white rounded-b-lg  flex items-center justify-center px-4">
      <img src={logo} alt="" />
    </div>
    <div
      style={{
        fontFamily: "Overlock",
      }}
      className="flex flex-grow space-x-8 font-bold text-lg text-white items-center justify-center"
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
  </header>)
}

export default Header;