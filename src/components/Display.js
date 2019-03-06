import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    const string = this.props.data.join('');
    return <div className="Display"> {string} </div>;
  }
}

export default Display;
