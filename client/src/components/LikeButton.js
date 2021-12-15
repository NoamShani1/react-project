import { useState } from "react";
import React from "react";


export default function LikeButton() {


    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#999999');
    const [size, setSize] = useState(1);

    const handleSetCount = () => {
        (count + 1 === 2) ? setCount(0) : setCount(count + 1);
        (count + 1 === 1) ? setSize(1) : setSize(size + .15);
    };

    const handleSetColor = () => {

        if (count + 1 === 1) setColor('#ff4545');
        if (count + 1 === 2) setColor('#999999');
    };


    const heartStyle = {
        color: color,
        transform: `scale(${size})`
    };

    return (
        <div>
            <div style={{ textAlign: 'center' }}>

                <button className='button' onClick={() => { handleSetCount(); handleSetColor() }}>
                    <i className="heart" style={heartStyle}> &#9829; </i>
                </button>

                <p> {count} </p>
            </div>
        </div>
    )
}
