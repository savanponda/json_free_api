import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StudentForm from './calculator';
import App from './App';
import Sum from './calc';
import Calculator from './calculatorfull';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StudentForm /> */}
    {/* <Sum/> */}
    <Calculator/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
