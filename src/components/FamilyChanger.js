import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // componentWillReceiveProps
//changes data on state based off of those props
componentWillReceiveProps(props) {
  //update state with the props
  this.setState({
    allowEdit: props.canUpdate
  })
}



  render() {                                                                                  
    return (
      <select className="dropDownContainer" 
        disabled={ this.state.allowEdit === "false"}
      onChange={ (e) => this.props.updateFamily (e.target.value) }>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    )
  }
}