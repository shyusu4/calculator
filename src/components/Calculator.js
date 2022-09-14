import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      operation: null,
      next: null,
    };
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent(e) {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calc-container">
        <div className="output">
          <span>
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </span>
        </div>
        <div className="calc-btns">
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>AC</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>+/-</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>%</button>
          <button type="button" className="calc-btn orange" onClick={this.onClickEvent}>÷</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>7</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>8</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>9</button>
          <button type="button" className="calc-btn orange" onClick={this.onClickEvent}>x</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>4</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>5</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>6</button>
          <button type="button" className="calc-btn orange" onClick={this.onClickEvent}>-</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>1</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>2</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>3</button>
          <button type="button" className="calc-btn orange" onClick={this.onClickEvent}>+</button>
          <button type="button" className="calc-btn double-span" onClick={this.onClickEvent}>0</button>
          <button type="button" className="calc-btn" onClick={this.onClickEvent}>.</button>
          <button type="button" className="calc-btn orange" onClick={this.onClickEvent}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
