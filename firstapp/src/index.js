import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const sang =<h1> Sang yêu Nhi nhất</h1>;
const Nhi = <input type='text' />;
ReactDOM.render(
  <React.StrictMode>
    <App />
    {sang}
    <br/>
    {Nhi}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
