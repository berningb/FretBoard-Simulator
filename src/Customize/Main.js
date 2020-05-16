import React, { Component } from "react";
import Swatch from './Swatch'
import './Main.css'

class Main extends Component {

    render () {
        let swatches = []
        this.props.noteInfo.map((note) => {
           swatches.push(<div>
                <span>{note.name}</span>
                <Swatch color={note.color} note={note.name} handleColorChange={this.props.handleColorChange}/>
               </div>)
        })
        return (
            <div className='swatch-container'>
                {swatches}
            </div>
        )
    }
}

export default Main;