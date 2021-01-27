import React, { useState } from 'react';

const Contador = () => {
    const [counter, setCounter] = useState(0);

    return(
        <div className="contador">
            <p className="counter">{counter}</p>

            <button id="incrementBtn" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button id="decrementBtn" onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button id="resetBtn" onClick={() => setCounter(0)}>Reset</button>
        </div>
    )
}

export default Contador;