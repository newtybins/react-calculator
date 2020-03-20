/* eslint-disable jsx-a11y/anchor-has-content */

// imports
import React, { Component } from 'react';
import update from 'immutability-helper';
import math from 'mathjs';

// components
import Display from './components/Display';
import Button from './components/Button';
import Buttons from './components/Buttons';

// App class
export default class App extends Component {
  constructor() {
    super();

    // setup state
    this.state = {
      operations: []
    };
  }

  // methods
  calculateOperations = () => {
    // destructuring
    const { operations } = this.state;

    // get result
    let result = operations.join('');

    // if there is a result
    if (result) {
      // evaluate the math and format it
      result = math.eval(result);
      result = math.format(result, { precision: 14 });

      // update the state
      return this.setState({
        operations: [result]
      });
    }
  };

  handleClick = e => {
    // destructuring
    const { operations } = this.state;

    // get the value of the target
    const value = e.target.getAttribute('data-value');

    switch (value) {
      // if the clear button was clicked
      case 'clear':
        // update the state
        this.setState({
          operations: []
        });
        break;

      // if the equal button was clicked
      case 'equal':
        // calculate the sum
        this.calculateOperations();
        break;

      // for any other button
      default:
        // add to the operations
        const newOperations = update(operations, { $push: [value] });

        // update the state
        this.setState({
          operations: newOperations
        });
        break;
    }
  };

  onKeyPress = e => {
    // destructuring
    const { operations } = this.state;

    // get the value
    const value = e.key;

    // define data
    const allowed = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '+',
      '-',
      '*',
      '/',
      '=',
      '.',
      'Enter',
      'equal',
      'Escape',
      'C',
      'c',
      'Backspace'
    ];

    // if the allowed includes the value
    if (allowed.includes(value)) {
      switch (value) {
        case 'Escape':
          this.setState({
            operations: []
          });
          break;

        case 'C':
          this.setState({
            operations: []
          });
          break;

        case 'c':
          this.setState({
            operations: []
          });
          break;

        // if the backspace key was pressed
        case 'Backspace':
          // remove the latest operation
          operations.pop();

          // update the state
          this.setState({ operations });
          break;

        case '=':
          this.calculateOperations();
          break;

        case 'Enter':
          this.calculateOperations();
          break;

        // if any other keys were pressed
        default:
          // add the operation
          const newOperations = update(operations, { $push: [value] });

          // update the state
          this.setState({
            operations: newOperations
          });
          break;
      }
    }
  };

  componentWillMount = e => document.addEventListener('keydown', this.onKeyPress.bind(this));

  render() {
    // destructuring
    const { operations } = this.state;
    const { handleClick, onKeyPress } = this;

    // jsx
    return (
      <div className="App">
        <Display data={operations} />
        <Buttons>
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="C"
            value="clear"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="7"
            value="7"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="4"
            value="4"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="1"
            value="1"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="0"
            value="0"
          />

          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="/"
            value="/"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="8"
            value="8"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="5"
            value="5"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="2"
            value="2"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="."
            value="."
          />

          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="x"
            value="*"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="9"
            value="9"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="6"
            value="6"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="3"
            value="3"
          />
          <Button label="" value="null" />

          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="-"
            value="-"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="+"
            size="2"
            value="+"
          />
          <Button
            onClick={handleClick}
            onKeyPress={onKeyPress}
            label="="
            size="2"
            value="equal"
          />
        </Buttons>

        <div class="social">
          <a href="https://github.com/itsnewt/calculator" className="fa fa-github"></a>
        </div>
      </div>
    );
  }
}
