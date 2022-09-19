import '../styles/Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    operation: null,
    next: null,
  });

  const onClickEvent = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  return (
    <div className="calc-container">
      <h2>Lets do some math!</h2>
      <div className="calculator">
        <div className="output">
          <span>
            {state.total}
            {' '}
            {state.operation}
            {' '}
            {state.next}
          </span>
        </div>
        <div className="calc-btns">
          <button type="button" className="calc-btn" onClick={onClickEvent}>AC</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>+/-</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>%</button>
          <button type="button" className="calc-btn orange" onClick={onClickEvent}>÷</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>7</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>8</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>9</button>
          <button type="button" className="calc-btn orange" onClick={onClickEvent}>x</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>4</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>5</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>6</button>
          <button type="button" className="calc-btn orange" onClick={onClickEvent}>-</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>1</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>2</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>3</button>
          <button type="button" className="calc-btn orange" onClick={onClickEvent}>+</button>
          <button type="button" className="calc-btn double-span" onClick={onClickEvent}>0</button>
          <button type="button" className="calc-btn" onClick={onClickEvent}>.</button>
          <button type="button" className="calc-btn orange" onClick={onClickEvent}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
