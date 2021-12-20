
import '../../assets/css/special-episode.css'
import bgspesialepisode from '../../assets/images/svg/bgspesialepisode.svg'
import ReactPlayer from 'react-player'

const SpesialEpisode = ()=>{
    return (
        <div style={{fontFamily: 'Sniglet'}} class="flex  flex-col h-screen w-screen">
            <img src={bgspesialepisode} className="-mt-16" alt="" />
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