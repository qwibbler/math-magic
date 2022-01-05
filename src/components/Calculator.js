import React from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorDataObject: {},
    };
  }

  buttonClicked(event) {
    const buttonName = event.target.value;
    const { calculatorDataObject } = this.state;
    this.setState(
      {
        calculatorDataObject: calculate(calculatorDataObject, buttonName),
      },
    );
  }

  render() {
    const buttonNames = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];
    const buttonsArray = [];
    buttonNames.forEach((button) => buttonsArray.push(<Button name={button} />));

    return (
      <div id="calculator">
        <div id="calc-display">0</div>
        <div id="calc-buttons">
          {buttonsArray}
        </div>
      </div>
    );
  }
}
