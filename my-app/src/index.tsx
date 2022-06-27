import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './MainPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Information} from "./Information";
import {Error} from "./Error";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/information/:user' element={<Information/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
