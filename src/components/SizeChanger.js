import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // componentWillReceiveProps
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
      onChange={ (e) => this.props.updateSize(e.target.value) }>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    )
  }
}