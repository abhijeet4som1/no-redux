import React from 'react';
import ReactDOM from 'react-dom';
import './client/css/index.css';
import UserDashboard from './UserDashboard';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import CounterReducer from './CounterReducer';

ReactDOM.render(<CounterReducer />, document.getElementById('root'));
