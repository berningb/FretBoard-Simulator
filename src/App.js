import React, { Component } from 'react';
import CustomMain from './Customize/Main'
import fakeData from './API/fakeData'
import FretBoard from './FretBoard/FretBoard'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showTriad: false,
      hideSharps: false,
      noteInfo: fakeData.noteInfo,
      triadInfo: fakeData.triads,
      value: 'A'
    }
  }

  toggleSharps(e) {
    this.setState({hideSharps: !this.state.hideSharps})
  } 

  toggleShowTriad(e) {
    this.setState({showTriad: !this.state.showTriad})
    this.switchTriads(this.state.value)
  } 

  switchTriads(note) {
    let copyTriadInfo = [...this.state.triadInfo]
    copyTriadInfo.map((ti)=> {
      ti.selected = false;

      if (ti.Root === note) {
       ti.selected = true;
      }
    })
    this.setState({triadInfo: copyTriadInfo, value: note})
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

            {/* first */}
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-tab">
              <div className="toggle-menu">
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch" value={this.state.hideSharps} checked={this.state.hideSharps} onClick={() => this.toggleSharps()}/>
                  <label class="custom-control-label" for="customSwitch">Hide Sharps</label>
                </div>
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch1" value={this.state.showTriad} onClick={(e) => this.toggleShowTriad(e)}/>
                  <label class="custom-control-label" for="customSwitch1">Show Triads</label>
                </div>
           
              </div>

              <div class={ this.state.showTriad ? "show dropdown": 'hide dropdown'}>

                <select onChange={(e) => this.switchTriads(e.target.value)} value={this.state.value}>
                {this.state.triadInfo.map(item => (
                  <option key={'triad' + item.Root} value={item.Root}>
                    {item.Root}
                  </option>
                ))}
                </select>
              </div>
            </div>


            {/* second */}
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-tab">
              <CustomMain noteInfo={this.state.noteInfo} handleColorChange={this.handleColorChange}/>
            </div>
            {/* third */}
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-tab">
            </div>
          </div>

          <FretBoard noteInfo={this.state.noteInfo} showTriad={this.state.showTriad} triadInfo={this.state.triadInfo} hideSharps={this.state.hideSharps}/>
        </div>
      </div>
    );
  }
}

export default App;
