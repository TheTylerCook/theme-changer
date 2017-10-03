import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
constructor() {
  super()

this.state = {
  fontColor: 'black',
  fontSize: 12,
  fontFamily: 'Arial',
  allowEdit: "True"
}
this.updateColor = this.updateColor.bind(this);

this.updateSize = this.updateSize.bind(this);

this.updateFamily = this.updateFamily.bind(this);

this.updateEditStatus = this.updateEditStatus.bind(this)
}
  // updateColor
updateColor(newColor) {
  this.setState({
    fontColor: newColor
  })
}
  // updateSize
updateSize(newSize) {
  this.setState({
    fontSize: newSize
  })

}
  // updateFamily
updateFamily(newFamily) {
  this.setState({
    fontFamily: newFamily
  })
}
  // updateEditStatus
updateEditStatus(change) {
  this.setState({
    allowEdit: change
  })
}
  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle updateEditStatus={this.updateEditStatus}/>
          <ColorChanger updateColor={this.updateColor}
            canUpdate={this.state.allowEdit} />

          <SizeChanger updateSize={this.updateSize}
            canUpdate={this.state.allowEdit}/>

          <FamilyChanger updateFamily={this.updateFamily}
            canUpdate={this.state.allowEdit} />

        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
          <TextContainer 
          fontColor={this.state.fontColor}
          fontSize={this.state.fontSize}
          fontFamily={this.state.fontFamily}/>

        </div>
      </div>
    )
  }
}

export default App;
