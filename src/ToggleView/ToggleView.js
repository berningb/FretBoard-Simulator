import React, { Component } from 'react'
import fakeData from '../API/fakeData'

class ToggleView extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
 
  render() {
   
    return (
        <div>
            <div className="toggle-menu">
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch" value={this.state.hideSharps} checked={this.state.hideSharps} 
                    onClick={() => this.props.toggleSharps()}/>
                    <label class="custom-control-label" for="customSwitch">Hide Sharps</label>
                </div>
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1" value={this.state.showTriad} onClick={(e) => this.props.toggleShowTriad(e)}/>
                    <label class="custom-control-label" for="customSwitch1">Show Triads</label>
                </div>
            </div>

            <div class={ this.state.showTriad ? "show dropdown": 'hide dropdown'}>
                <select onChange={(e) => this.props.switchTriads(e.target.value)} value={this.state.value}>
                {this.props.triadInfo.map(item => (
                    <option key={'triad' + item.Root} value={item.Root}>
                    {item.Root}
                    </option>
                ))}
                </select>
            </div>
        </div>
    )
  } 
}


export default ToggleView;