import React, {useState, useEffect} from 'react';

const CounterHooks = () => {
    const [counter, setCounter] = useState(0);
    useEffect(()=> {
        setTimeout(()=> setCounter(counter + 1), 100);
    });
    return <div>Counter Value {counter}</div>
}

export default CounterHooks;