import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #333;
    color: white;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
