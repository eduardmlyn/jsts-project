import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {MainPage} from './main-page/MainPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Information} from "./information/Information";
import {Error} from "./error/Error";

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
