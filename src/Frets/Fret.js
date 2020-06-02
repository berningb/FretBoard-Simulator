import React from 'react'
import './Fret.css'

function Fret(props) {
    let showNum = false;
    if (props.num === 0 || props.num == 3 || props.num == 5 || props.num == 7 || props.num == 9) {
        showNum = true;
    }
    return (
        <div className='Fret'>
            <span class={showNum ? 'show indicator' : 'hide'}>{props.num}</span>
        </div>
    );
}

export default Fret;