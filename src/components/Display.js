// imports
import React, { Component } from 'react';

// Display class
export default class Display extends Component {
  render() {
    // destructuring
    let { data } = this.props;

    // style
    const style = {
      background: '#000000',
      color: '#ffffff',
      textShadow: '0 0 5px rgba(89, 195, 195, 0.5)',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0 29px',
      boxSizing: 'border-box',
      height: '20%',
      overflow: 'hidden',
      fontSize: '24px',
      position: 'relative'
    };

    // preperation
    data = data.join('');

    // jsx
    return <div style={style}>{data}</div>;
  }
}
