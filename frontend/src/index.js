import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from "./component/Form";
import Table from './component/Table';
import Update from './component/Update';
import Delete from "./component/Delete";
// import Parent from './test/Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Parent/> */}
    {/* <App /> */}
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Form />} />
        <Route path="/records" element={<Table />} />
        <Route path="/update" element={<Update />} />
        <Route path="/deleterecord" element={<Delete />} />

    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
