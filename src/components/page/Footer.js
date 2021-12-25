import logo from '../../assets/images/svg/logotext.svg'
import send from '../../assets/images/svg/sendicon.svg'
import {IntagramIcon, YoutubeIcon, TiktokIcon} from '../../assets/images'
import './footer.scss'

const Footer = ()=>{
        return <div style={{backgroundColor: '#FFE15A'}} className="flex flex-col w-screen p-8">
                <div className="flex-1 gap-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  space-y-4">
                    <div className="col-span-1">
                    <img className="w-32 h-12 lg:w-36 lg:h-16 xl:w-40 xl:h-20 2xl:w-44 2xl:h-24 object-fill" src={logo} alt="" />
                    </div>
                    <div style={{fontFamily: 'Sniglet'}} className="col-span-1">
                        <div className="text-lg font-bold">Shop</div>
                        <div className="text-base mt-4">Shipping and Payment</div>
                        <div className="text-base mt-2">Product Catagory</div>
                    </div>
                    <div style={{fontFamily: 'Sniglet'}} className="col-span-1">
                    <div className="text-lg font-bold   ">Newsletter</div>
                        <div className="flex mt-4 flex-row px-2 border py-1 rounded-md border-black">
                            <input className="bg-opacity-0 outline-none flex-grow bg-yellow-400" />
                            <button className="px-2"><img src={send} alt="" /></button>
                        </div>
                        <div className="flex flex-row items-center mt-2 space-x-2">
                            <input type="checkbox" />
                            <div>I have read and agree the privacy police</div>
                        </div>
                    </div>
                 
            </div>
            <div className="grid-cols-3 mt-20 gap-4 grid">
                <div className="col-span-2 flex flex-col">
                    <div>© Beekaboo</div>
                    <div className="mt-2">Terms and Service | Privacy Police </div>
                </div>
                <div className="col-span-1 flex flex-col">
                    <div className="text-lg font-bold">Shop</div>
                    <div className="flex flex-row space-x-2 mt-2">
                        <button><img src={YoutubeIcon} alt="" /></button>
                        <button><img src={TiktokIcon} alt="" /></button>
                        <button><img src={IntagramIcon} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
}

export default Footer;