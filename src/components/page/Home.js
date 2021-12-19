import { useState } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Home = () =>{
    const[items, setItems] = useState(['hello', 'world', 'click', 'me'])
    const[hover, setHover] = useState(false)
    const hoverLeftEnter = () =>{
        setHover(true)
    }
    const hoverLeftLeave = () =>{
        setHover(false)
    }
    
    return (
        <div className="w-screen flex items-center justify-center h-screen">
                <div class="blobs">
                    <div class="liquid"></div>
                    <div class="blob"></div>
                    <div class="blob"></div>
                    <div class="blob"></div>
                    <div class="blob"></div>
                    <div class="blob"></div>
                    <div class="blob"></div>
                    <div class="blob"></div>
                    <div class="blob"></div>
                </div>
                <div className="scene">
                <div onMouseEnter={()=> hoverLeftEnter()} onMouseLeave={()=> hoverLeftLeave()} className={hover ? 'absolute cursor-pointer left-0 cage' : 'cursor-pointer absolute left-0 cage-of'}>
                    <div className={hover?'ball':'ball-of'}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home