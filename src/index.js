import React from 'react';
// import ReactDOM from 'react-dom';//react 17
import ReactDOM from 'react-dom/client';//react 18
import { BrowserRouter as Router } from "react-router-dom";
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
import UseContext from './UseContext/index';
import ThemeProvider from './UseContext/ThemeContext';
import UseContextUseReducerTodoApp from './UseContextUseReducerTodoApp';
import { default as UseImperativeHandle } from './UseImperativeHandle/App';
import { default as CustomHook } from './CustomHook/App';
import { default as UseTransition } from './UseTransition/App';
import { default as CSSModule } from './CSSModule/App';
import { default as ReactRouter } from './ReactRouter/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
//react 18
root.render(
  <React.StrictMode>
    <Router>
      <ReactRouter />
    </Router>
  </React.StrictMode>
);

// react 17
// ReactDOM.render(
//         <UseContextUseReducerTodoApp />
//     , document.getElementById('root')
// )
// ReactDOM.render(
//     <React.StrictMode>
//         <UseTransition />
//     </React.StrictMode>
//     , document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
