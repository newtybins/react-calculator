// imports
import React, { Component } from 'react';

// Buttons class
export default class Buttons extends Component {
  render() {
    // destructuring
    const { children: content } = this.props; 

    // style
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      height: '80%'
    };

    // jsx
    return <div style={style}>{content}</div>;
  }
}