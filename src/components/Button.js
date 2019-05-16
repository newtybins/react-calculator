// imports
import React, { Component } from 'react';
import './Button.css';

// Button class
export default class Button extends Component {
  render() {
    // destructuring
    const { onClick, size, value, label } = this.props;

    // jsx
    return (
      <div onClick={onClick} className="button" data-size={size} data-value={value} >
        {label}
      </div>
    );
  }
}