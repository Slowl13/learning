import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";
import Children from './Children.js';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Children></Children>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
