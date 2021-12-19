import waveyellow from '../../assets/images/svg/waveyellow.svg';
import ReactAudioPlayer from 'react-audio-player';
import album from '../../assets/images/svg/album.svg';
const Song = (props) => {
        return (
            <div style={{ backgroundColor: '#BAB4E4'}} className="flex flex-col w-screen h-screen">
                <div className="w-screen h-96 -mt-20" style={{
                    backgroundImage: `url(${waveyellow})`,
                    backgroundRepeat: 'none',
                    backgroundSize: '100%'
                }}></div>
                <div className="w-screen h-screen -mt-20 flex flex-col items-center" style={{
                    backgroundColor: '#FFE15A',
                    fontFamily: 'Sniglet',
                    color : '#A1616A'
                }}>
                    <h3  className="text-6xl text-shadow-md font-normal">Song</h3>
                    <h5 style={{color : '#A1616A'}} className="text-2xl mt-2 text-shadow-md font-normal">Backsound and song Beekaboo</h5>
                    <div className="mt-16 grid grid-cols-5 w-full gap-2 px-16">
                        <div className="col-span-2 flex flex-col">
                            <div className="text-2xl ">Song Name 1</div>
                            <ReactAudioPlayer
                                src="my_audio_file.ogg"
                                autoPlay
                                className="mt-2 w-full rounded-md"
                                controls
                                />

                                <div className="mt-8 flex flex-col space-y-2">
                                    <div className="py-2 text-black rounded-md px-4 text-base bg-white flex flex-row cursor-pointer">
                                        <div className="mr-2 ml-4">1.</div>
                                        <div className="flex-grow">Song Name 1</div>
                                        <div className="flex-none">04:11</div>
                                    </div>
                                    <div className="py-2 text-black rounded-md bg-opacity-60 px-4 text-base bg-white flex flex-row cursor-pointer">
                                        <div className="mr-2 ml-4">2.</div>
                                        <div className="flex-grow">Song Name 2</div>
                                        <div className="flex-none">04:45</div>
                                    </div>
                                    <div className="py-2 text-black rounded-md bg-opacity-60 px-4 text-base bg-white flex flex-row cursor-pointer">
                                        <div className="mr-2 ml-4">3.</div>
                                        <div className="flex-grow">Song Name 3</div>
                                        <div className="flex-none">04:45</div>
                                    </div>
                                    <div className="py-2 text-black rounded-md bg-opacity-60 px-4 text-base bg-white flex flex-row cursor-pointer">
                                        <div className="mr-2 ml-4">4.</div>
                                        <div className="flex-grow">Song Name 4</div>
                                        <div className="flex-none">04:45</div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-span-3 flex flex-col items-center justify-center">
                            <img src={album} className="object-fill" alt="" srcset="" />
                            <div className="mt-4 flex w-full mr-72 justify-end items-end">Other song {'>'} </div>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        );
}

export default Song