
import '../assets/css/special-episode.css'

import ReactPlayer from 'react-player'

import { Player } from 'video-react';

const SpesialEpisode = ()=>{
    return (
        <div style={{fontFamily: 'Sniglet'}} class="flex flex-col h-screen w-screen">
            <div className="wave-container">
            <svg className=" -mt-16" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path fill="#BAB4E4" fill-opacity="1" d="M0,96L48,96C96,96,192,96,288,122.7C384,149,480,203,576,197.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div style={{backgroundColor:'#BAB4E4'}}  className="flex p-8 flex-col h-screen w-screen items-center">
                <h3 className="text-6xl font-normal">Special Episode</h3>
                <h5 className="text-2xl mt-2">Only showing on the website</h5>
                <div className="flex flex-row mt-8">
                <div className="">
                <ReactPlayer width={500} height={300} url='https://www.youtube.com/watch?v=bWUgZm_AE64' />
                </div>
                <div style={{
                    width: 500,
                    height: 300
                }} className="border-8 mt-16 pl-20 justify-center items-center flex flex-col border-yellow-400 p-8 -ml-16">
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