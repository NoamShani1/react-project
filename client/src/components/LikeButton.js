import { useState } from "react";
import React from "react";

import { ReactSVG } from 'react-svg'


export default function LikeButton() {


    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#999999');
    const [size, setSize] = useState(1);

    const [colorIcon, setColorIcon] = useState(false)
    const redIcon = colorIcon ? 'red' : ''


    const handleSetCount = () => {
        (count + 1 === 2) ? setCount(0) : setCount(count + 1);
        (count + 1 === 1) ? setSize(1) : setSize(size + .15);
    };

    const handleSetColor = () => {

        if (count + 1 === 1) setColor('#ff4545');
        if (count + 1 === 2) setColor('#999999');
    };



    return (
        <div>
            <div style={{ textAlign: 'center' }}>

                <button className='button' onClick={() => { handleSetCount(); handleSetColor(); setColorIcon(!colorIcon) }}>
                    <ReactSVG src='/icons/heart.svg' className={`heart ${redIcon}`} />
                </button>

                <p> {count} </p>
            </div>
        </div>
    )
}
