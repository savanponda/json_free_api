import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression);
        setDisplay(result);
        setExpression('');
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
    } else if (value === 'C') {
      setDisplay('0');
      setExpression('');
    } else {
      if (display === '0' && value !== '.') {
        setDisplay(value);
        setExpression(value);
      } else {
        setDisplay(display + value);
        setExpression(expression + value);
      }
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
