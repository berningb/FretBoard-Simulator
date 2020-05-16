import React from 'react'
import './Note.css'

const Note = (props) => {
    let name = props.tone ? props.item + props.tone :  props.item
    return (
        <div className={props.show ? 'show Note' : 'hide Note'} style={{backgroundColor: props.color}} onClick={() => props.click(props.item)} >
            <span>{name}</span>
        </div>
    );
}

export default Note;