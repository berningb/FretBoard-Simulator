import React, { Component } from 'react';
import String from './Strings/String'
import Fret from './Frets/Fret'
import CustomMain from './Customize/Main'
import fakeData from './API/fakeData.json'
import './App.css';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hideSharps: true,
      hideTones: true,
      noteInfo: fakeData.noteInfo
    }
  }

  toggleSharps(e) {
    this.setState({hideSharps: !this.state.hideSharps})
  } 
  
  toggleTones(e) {
    this.setState({hideTones: !this.state.hideTones})
  }
  handleColorChange = (color, note) => {
    let newNoteObj = [...this.state.noteInfo]
    newNoteObj.map((n) => {
      if (n.name == note) {
        n.color = color.rgb
      }
    })
   
    this.setState({noteInfo: newNoteObj})
  };

  render() {
    let strings = []
    let frets = []

    for(let i = 0; i < 12; i++) {
      frets.push(<Fret/>)
    }
    
    fakeData.stringInfo.map((data) => {
      data.hideSharps = this.state.hideSharps
      data.hideTones = this.state.hideTones
      strings.push(<String stringInfo={data} noteInfo={this.state.noteInfo} key={data.name}/>)
    })

    return (
      <div className="App">
        <div className="App-header" >
          <ul class="nav nav-pills mb-3 container" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Toggles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Customize</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Chords</a>
            </li>
          </ul>


          <div class="tab-content container" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-tab">
              <div className="toggle-menu">
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch1" value={this.state.hideSharps} onClick={() => this.toggleSharps()}/>
                  <label class="custom-control-label" for="customSwitch1">Hide Sharps</label>
                </div>

                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch2" value={this.state.hideTones} onClick={() => this.toggleTones()}/>
                  <label class="custom-control-label" for="customSwitch2">Hide Tones</label>
                </div>
              </div>
            </div>



            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-tab">
              <CustomMain noteInfo={this.state.noteInfo} handleColorChange={this.handleColorChange}/>
            </div>




            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-tab">
              
            </div>
          </div>


          
  
          <div className="Fret-board">
            <div className="String-container">
              {strings}
            </div>
            <div className='Fret-container'>
              {frets}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
