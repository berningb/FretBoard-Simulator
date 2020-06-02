import React from 'react'
import './Note.css'

const Note = (props) => {
    let name = props.note
    let show = props.show ? 'show Note' : 'hide Note'
    return (
        <div className={show} style={{backgroundColor: props.color}} onClick={() => props.click(props.note)} >
            <span>{name}</span>
        </div>
    );
}

export default Note;