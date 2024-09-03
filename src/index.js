// React JS tutorial
// Code from 
// https://react.dev/learn/tutorial-tic-tac-toe
// revision 21 de agosto de 2024 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
    <br />
    <br />
    <hr />
    <h1>Next module manages states inside the component</h1>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
