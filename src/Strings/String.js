import React, { Component } from 'react'
import Note from '../Notes/Note'
import * as Tone from "tone";

import './String.css'



class String extends Component {

  constructor(props) {
    super(props)
    this.synth = new Tone.Synth().toMaster();
    this.arrangedNotes = [];
    this.state = {
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
    let noteStartingIndex = this.state.noteBank.indexOf(this.props.stringInfo.name) // EX: ('E' : 7)
    let noteEndingIndex = this.state.noteBank.length // EX: 12
  
    this.arrangedNotes = noteBankCopy.splice(noteStartingIndex, noteEndingIndex - noteStartingIndex)
    this.arrangedNotes = this.arrangedNotes.concat(noteBankCopy)
    
  }

  playNote(note) {
    this.synth.triggerAttackRelease(`${note}2`, "8n");
  }

  render() {
    let tone = this.props.stringInfo.tone
    let notes = []
    this.arrangedNotes.map((note, index) => {
      let color = "lightgreen"
      let hideSharps = true;
      let hideTones = true

      this.props.noteInfo.map((n) => {
        if (n.name == note) {
          color = `rgba(${ n.color.r }, ${ n.color.g }, ${ n.color.b }, ${ n.color.a })`
        }
      })

      if (note.includes('#')) {
        hideSharps = this.props.stringInfo.hideSharps;
      }
      if (this.props.stringInfo.toggleTone) {
        hideTones = this.props.stringInfo.hideTones
      }


      if (note == 'C') {
        tone ++;
      }
      
      notes.push(<Note color={color} show={hideSharps} tone={this.props.stringInfo.hideTones ? null : tone} item={note} key={index} click={() => this.playNote(note)}/>)
    })

    return (
      <div className='string'>
        {notes}
      </div>
    )
  } 
}


export default String;