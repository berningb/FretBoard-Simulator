import React, { Component } from 'react'
import fakeData from '../API/fakeData'
import String from '../Strings/String'
import Fret from '../Frets/Fret'

class FretBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
 
  render() {
    let strings = []
    let frets = []

    for(let i = 0; i < 12; i++) {
      frets.push(<Fret num={i}/>)
    }
    
    fakeData.stringInfo.map((data, i) => {
      strings.push(<String data={data} showTriad={this.props.showTriad} triadInfo={this.props.triadInfo} hideSharps={this.props.hideSharps} noteInfo={this.props.noteInfo} key={data.name + i}/>)
    })
    return (
        <div className="Fret-board">
            <div className="String-container">
            {strings}
            </div>
            <div className='Fret-container'>
            {frets}
            </div>
        </div>
    )
  } 
}


export default FretBoard;