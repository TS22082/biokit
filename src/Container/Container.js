/**
 * @class Container
 */

import React, { Component } from 'react';

export default class Container extends Component {
  setClass = () => {
    if (this.props.fluid === true) {
      return ('container-fluid')
    } else {
      return('container')
    }
  }
  state = {  }
  render() {
    return ( 
      <div className={this.setClass()}>
        {this.props.children}
      </div>
    );
  }
}
