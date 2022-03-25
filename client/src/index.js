import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import Scheduler from './routes/Scheduler';
// import Schedule from './routes/Schedule';
import Schedule2 from './routes/Schedule2';
import Register from './routes/register';
import Login from './routes/login';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="scheduler" element={<Scheduler />}/> */}
      {/* <Route path="/Schedule" element={<Schedule />} /> */}
      <Route path="/schedule" element={<Schedule2 />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
