import '../calculator/calculator.css';
import { useState } from 'react';

function Calculator() {
  const [screenNumber, setScreenNumber] = useState('0');

  const handleButtonClick = (value) => {
    setScreenNumber((prev) => prev + value);
  };

  return (
    <div className='calculator-body'>
      <div className='calculator-screen'>{screenNumber}</div>
      <div className='calculator-buttons'>
        {['+', '-', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '%', 'c', '00', 'ac'].map((button, index) => (
          <button key={index} onClick={() => handleButtonClick(button)} className='button'>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
