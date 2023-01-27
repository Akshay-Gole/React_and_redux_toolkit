import './AnimalShow.css'
import { useState } from "react";
import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import heart from "./svg/heart.svg"
import horse from "./svg/horse.svg"

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
}

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0)

    // const handleClick = () => {
    //     setClicks(clicks + 1);
    // };
    return (
        <div className='animal-show' onClick={() => setClicks(clicks + 1)}>
            <img
                className='animal'
                src={svgMap[type]}
                alt="animals"
            />

            <img
                className='heart'
                src={heart}
                alt="heart"
                style={{ width: 10 + 5 * clicks + "px" }}
            />
        </div>
    )
}

export default AnimalShow
