/**
 * @class TextInput
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const valid={
  color: '#28a745'
}
const notValid={
  color:'#dc3545'
}
const required={
  color:'#95a5a6'
}

export default class TextInput extends Component {
  static propTypes = {
    inputTitle: PropTypes.string,
    type: PropTypes.oneOf([
      'text', 'email', 'password'
    ]).isRequired,
    placeholder: PropTypes.string,
    text: PropTypes.string
  }
  static defaultProps = {
    
  }
  constructor(){
    super()
    this.state={
      text:''
    }
    this.handleTextChange = this.handleTextChange.bind(this)
  }
  validPassword = (inputtxt) => { 
    let goodPass=  /^[A-Za-z]\w{7,14}$/
    if(inputtxt.value.match(goodPass)){ 
      return true;
    }
    else{ 
      return false;
    }
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
            <label style={valid}>{this.props.inputTitle} looks good!</label>
          )
        } else {
          return (
            <label style={required}>required</label>
          )
        } 
      case 'email':
        if (this.props.text.includes('@')){
          return (
            <label style={valid}>{this.props.inputTitle} looks good</label>
          )        
        } else if(this.props.text.length > 0 && !this.props.text.includes('@')) {
          return(
          <label style={notValid}>{this.props.inputTitle} requires '@'</label>
          )
        } else {
          return (
            <label style={required}>required</label>
          )
        }
      case 'password':
        if(this.props.text.length > 0){
          return (
            <label style={valid}>{this.props.inputTitle} looks good!</label>
          )
        } else {
          return (
            <label style={required}>required</label>
          )
        } 
      default:
        return (<label/>)
    }
  }
  showName = () => {
    return(
      <label className="label">{this.props.inputTitle}</label>
    )
  }
  render() {
    return (
      <div>
        {this.showName()}
        <input type={this.props.type} 
          name={this.props.name}
          className="form-control bg-light text-dark" 
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
        />
        {this.showMessage()}
      </div>
    );
  }
}


