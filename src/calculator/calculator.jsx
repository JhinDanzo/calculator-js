import '../calculator/calculator.css'
import { useState, useRef } from 'react';

function Calculator () {

    const [screenNumber, setScreenNumber] = useState(0);
    const divRefs = useRef(null);

    const updateScreenNumber = () => {
       setScreenNumber(this.textContent);
    }

    return(
    <body>
        <div className='calculator-body'>
            <div className='calculator-screen'>{screenNumber}</div>
            <div className='calculator-buttons'>
                <button className='button'>+</button>
                <button className='button'>-</button>
                <button className='button'>=</button>
                <button onClick={updateScreenNumber} className='button'>1</button>
                <button className='button'>2</button>
                <button className='button'>3</button>
                <button className='button'>4</button>
                <button className='button'>5</button>
                <button className='button'>6</button>
                <button className='button'>7</button>
                <button className='button'>8</button>
                <button className='button'>9</button>
                <button className='button'>.</button>
                <button className='button'>0</button>
                <button className='button'>%</button>
            </div>
        </div>
    </body>
    )
}

export default Calculator;