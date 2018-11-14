/**
 * @class TextInput
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const valid={
  color: 'green'
}
const notValid={
  color:'red'
}

export default class TextInput extends Component {
  static propTypes = {
    text: PropTypes.string
  }
  constructor(){
    super()
    this.state={
      text:''
    }
    this.handleTextChange = this.handleTextChange.bind(this)
  }
  handleTextChange = e => {
    const text = e.target.value
    this.setState({text})
  }
  showMessage = () => {
    let textType = this.props.type
    switch(textType){
      case 'text':
      if(this.props.text.length > 0){
        return (
          <label style={valid}>{this.props.inputName} looks good!</label>
        )
      } else {
        return (
          <label style={notValid}>{this.props.inputName} is required!</label>
        )
      } 
      case 'email':
      if (this.props.text.includes('@')){
        return (
          <label style={valid}>{this.props.inputName} looks Good</label>
        )        
      } else {
        return (
          <label style={notValid}>@ is required!</label>
        )
      }
      default:
        return (<label/>)
    }
  }
  showName = () => {
    return(
      <label className="label">{this.props.inputName}</label>
    )
  }
  render() {
    return (
      <div>
        {this.showName()}
        <input type="text" 
          className="form-control" 
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
        />
        {this.showMessage()}
      </div>
    );
  }
}