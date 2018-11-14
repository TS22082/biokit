/**
 * @class Card
 */

import React, { Component } from 'react';

export default class Card extends Component {
  state = {  }
  render() { 
    return ( 
      <div className={`rounded-${this.props.rounded} ${this.props.spacing}`}>
        <div className={`card-header bg-dark text-light rounded-${this.props.rounded}`}>
          <h4 className="card-title mb-0">
            {this.props.icon} {this.props.title}
          </h4>
        </div>
        <div className="card-body">{this.props.children}</div>
      </div>
    );
  }
}