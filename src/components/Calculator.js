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
        <button type="button" className="calc-btn clear" onClick={onClickEvent}><i>AC</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>+/-</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>÷</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>7</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>8</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>9</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>*</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>4</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>5</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>6</i></button>
        <button type="button" className="calc-btn plus" onClick={onClickEvent}><i>+</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>1</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>2</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>3</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>0</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>.</i></button>
        <button type="button" className="calc-btn" onClick={onClickEvent}><i>-</i></button>
        <button type="button" className="calc-btn equal" onClick={onClickEvent}><i>=</i></button>
      </div>
    </div>
  );
};

export default Calculator;
