
import '../../assets/css/special-episode.css'
import bgspesialepisode from '../../assets/images/svg/bgspesialepisode.svg'
import ReactPlayer from 'react-player'
import './SpesialEpisode.css'
const SpesialEpisode = (props)=>{
    const {isMobile} = props
    return (
        <div style={{fontFamily: 'Sniglet'}} class="flex  flex-col w-screen">
            <div className="bg-bee-blue" style={{
            }
            }>
                <img src={bgspesialepisode} alt="" srcset="" />
            </div>
           
            <div style={{backgroundColor:'#BAB4E4'}}  className="flex p-8 flex-col w-screen items-center">
                <h3 className="text-6xl font-normal text-center">Special Episode</h3>
                <h5 className="text-2xl mt-2 text-center">Only showing on the website</h5>
                <div className="flex lg:flex-row xl:flex-row 2xl:flex-row flex-col mt-8">
                <div className="">
                    <ReactPlayer  width={isMobile ===true? 320 : 500} height={isMobile ===true? 200 : 300}  url='https://www.youtube.com/watch?v=bWUgZm_AE64' />
                </div>
                <div style={{
                    width: isMobile ===true? 320 : 500,
                    height: isMobile ===true? 200 : 300
                }} className="border-8 lg:mt-16 xl:mt-16 2xl:mt-16 mt-4 lg:pl-20 justify-center items-center flex flex-col border-yellow-400 p-8 ml-0 xl:-ml-16 2xl:-ml-16 lg:-ml-16">
                    <div>Happy Halloween – BeeKaBoo Kids Songs & Nursery Rhyme (Special Episode)</div>
                    <div className="flex justify-between w-full mt-4">
                    <div>Eps. 10</div>
                        <div>November 30, 2021</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SpesialEpisode