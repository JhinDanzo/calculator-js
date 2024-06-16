import '../calculator/calculator.css';
import { useState } from 'react';

function Calculator() {
  const [screenNumber, setScreenNumber] = useState('');

  const handleButtonClick = (value) => {
    setScreenNumber((prev) => prev + value);
  };

  const handleAcClick = () => {
    setScreenNumber('');
  }

  const handleCClick = (value) => {
    setScreenNumber(screenNumber - value)
  }

  const handlePercentClick = () => {
    setScreenNumber(screenNumber*0.01)
  }

  return (
    <div className='calculator-body'>
      <div className='calculator-screen'>{screenNumber}</div>
      <div className='calculator-buttons'>
        {['+', '-', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '00'].map((button, index) => (
          <button key={index} onClick={() => handleButtonClick(button)} className='button'>
            {button}
          </button>
        ))}
        <button className='button' onClick={handleAcClick}>ac</button>
        <button className='button' onClick={handleCClick}>c</button>
        <button className='button' onClick={handlePercentClick}>%</button>
      </div>
    </div>
  );
}

export default Calculator;
