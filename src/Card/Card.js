/**
 * @class Card
 */

import React, { Component } from 'react';

export default class Card extends Component {
  state = {  }
  render() { 
    return ( 
      <div className={`card rounded-${this.props.rounded} ${this.props.spacing}`}>
        <div className={`card-header bg-dark text-light rounded-${this.props.rounded}`}>
          <h4 className="card-title mb-0 text-light">
            {this.props.icon} {this.props.title}
          </h4>
        </div>
        <div className="card-body bg-light text-dark">{this.props.children}</div>
      </div>
    );
  }
}