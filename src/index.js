import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import TwoWayBinding from './TwoWayBinding';
import TodoList from './TodoList';
import UseEffect from './UseEffect';
import UseLayoutEffect from './UseLayoutEffect';
import Weather from './Weather';
import AppCounter from './AppCounter';
import UseRef from './UseRef';
import Memo from './Memo';
import UseCallback from './UseCallback';
import UseReducer from './UseReducer';
// import UseReducerToDoList from './UseReducerToDoList';
import UseReducerToDoList from './UseReducerTodoList/index';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(<UseReducerToDoList />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
