import React from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandlerInherit = this.clickHandlerInherit.bind(this);
    this.state = {
      calculatorDataObject: {
        // total: null,
        // next: null,
        // operation: null,
      },
    };
  }

  clickHandlerInherit(buttonName) {
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
    buttonNames.forEach((button) => buttonsArray.push(
      <Button name={button} clickHandlerInherited={this.clickHandlerInherit} />,
    ));
    const { calculatorDataObject } = this.state;

    return (
      <div id="calculator">
        <div id="calc-display">
          <div id="previous">{calculatorDataObject.total}</div>
          <div id="operation">{calculatorDataObject.operation}</div>
          <div id="current">{calculatorDataObject.next}</div>
        </div>
        <div id="calc-buttons">
          {buttonsArray}
        </div>
      </div>
    );
  }
}
