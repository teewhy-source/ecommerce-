import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Replace with the path to your main App component
import { Userprovider } from './contex/Contex';
import "./index.scss"
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Userprovider>
    <App />
    </Userprovider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
