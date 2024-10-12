import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createGlobalStyle } from 'styled-components';

const CustomGlobalStyle = createGlobalStyle`
  body {
    cursor: none;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <CustomGlobalStyle />
    <App />
  </React.StrictMode>
);

