import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="output">0</div>
        <div className="calc-btns">
          <button type="button" className="calc-btn">AC</button>
          <button type="button" className="calc-btn">+/-</button>
          <button type="button" className="calc-btn">%</button>
          <button type="button" className="calc-btn orange">÷</button>
          <button type="button" className="calc-btn">7</button>
          <button type="button" className="calc-btn">8</button>
          <button type="button" className="calc-btn">9</button>
          <button type="button" className="calc-btn orange">x</button>
          <button type="button" className="calc-btn">4</button>
          <button type="button" className="calc-btn">5</button>
          <button type="button" className="calc-btn">6</button>
          <button type="button" className="calc-btn orange">-</button>
          <button type="button" className="calc-btn">1</button>
          <button type="button" className="calc-btn">2</button>
          <button type="button" className="calc-btn">3</button>
          <button type="button" className="calc-btn orange">+</button>
          <button type="button" className="calc-btn double-span">0</button>
          <button type="button" className="calc-btn">.</button>
          <button type="button" className="calc-btn orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
