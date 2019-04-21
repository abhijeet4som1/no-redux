import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 1
        }
    }

    componentDidMount(){
        this.increment();
    }

    increment = () => {
        this.setState({counter: this.state.counter + 1});
        setTimeout(this.increment, 100);
    }

    render(){
        return <div>Counter Value {this.state.counter}</div>
    }
}

export default Counter;