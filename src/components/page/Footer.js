import logo from '../../assets/images/svg/logotext.svg'
import send from '../../assets/images/svg/sendicon.svg'
import {IntagramIcon, YoutubeIcon, TiktokIcon} from '../../assets/images'

const Footer = ()=>{
        return <div style={{backgroundColor: '#FFE15A'}} className="flex flex-col w-screen px-16 pb-8 pt-24">
            <div className="grid-cols-4 gap-2 grid">
                    <div className="col-span-2">
                        <img src={logo} alt="" />
                    </div>
                    <div style={{fontFamily: 'Sniglet'}} className="col-span-1 flex flex-col">
                        <div className="text-lg font-bold">Shop</div>
                        <div className="text-base mt-8">Shipping and Payment</div>
                        <div className="text-base mt-2">Product Catagory</div>
                    </div>
                    <div style={{fontFamily: 'Sniglet'}} className="col-span-1 flex flex-col">
                        <div className="text-lg font-bold">Newsletter</div>
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
            <div className="grid-cols-4 gap-2 mt-20 grid">
                <div className="col-span-3 flex flex-col">
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