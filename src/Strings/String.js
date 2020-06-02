import React, { Component } from 'react'
import Note from '../Notes/Note'
import * as Tone from "tone";
import SampleLibrary from '../Libraries/tonejs-instruments/Tonejs-Instruments'
import './String.css'

class String extends Component {

  constructor(props) {
    super(props)
    // console.log(props.noteInfo[0].link)
    // this.sampler = new Tone.Sampler(
    //   { A2 },
    //   {
    //     onload: () => {
    //       this.setState({ isLoaded: true });
    //     }
    //   }
    // ).toMaster();
    this.arrangedNotes = [];
    this.state = {
      isLoaded: false,
      noteBank: ['A','A#',
                  'B',
                  'C', 'C#',
                  'D', 'D#',
                  'E',
                  'F', 'F#',
                  'G', 'G#']
    }
  }

  componentWillMount() {
    let noteBankCopy = [...this.state.noteBank]
    let noteStartingIndex = this.state.noteBank.indexOf(this.props.data.name) // EX: ('E' : 7)
    let noteEndingIndex = this.state.noteBank.length // EX: 12
  
    this.arrangedNotes = noteBankCopy.splice(noteStartingIndex, noteEndingIndex - noteStartingIndex)
    this.arrangedNotes = this.arrangedNotes.concat(noteBankCopy)
    
  }

  playNote(note) {
    // this.sampler.triggerAttack("A2");
  }

  render() {
    let notes = []
    this.arrangedNotes.map((note, index) => {
      let color;

      this.props.noteInfo.map((n) => {
        if (n.name == note) {
          color = `rgba(${ n.color.r }, ${ n.color.g }, ${ n.color.b }, ${ n.color.a })`
        }
      })
      let show = false;

      if (this.props.showTriad) {
        this.props.triadInfo.map((e) => {
          if (e.selected) {
            if (e.Notes.includes(note)) {
              show = true;
            }
            if (e.Root === note) {
            color = `#49392E`
            }
          }
        })
      } else if(this.props.hideSharps) {
        if (!note.includes('#')) {
          show = true;
        }
      } else {
        show = true;
      }
     

      notes.push(<Note color={color} show={show} note={note} key={index} click={() => this.playNote(note)}/>)
    })

    return (
      <div className='string'>
        {notes}
      </div>
    )
  } 
}


export default String;