import React, { Component } from 'react';

export default class Column extends Component {
  render() { 
    return ( 
    <div className={`
      col-sm-${this.props.sm} 
      col-md-${this.props.md} 
      col-lg-${this.props.lg}
      `}>
      {this.props.children}
    </div> 
    );
  }
}

