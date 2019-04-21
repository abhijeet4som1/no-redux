import React, {useReducer, useEffect} from 'react';

const counterReducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {counter: state.counter + 1};
        default:
            return state;
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, {counter: 0});
    useEffect(()=> {
        setTimeout(()=> dispatch({type: 'increment'}), 100);
    });
    return <div>Counter Value {state.counter}</div>
}

export default CounterReducer;