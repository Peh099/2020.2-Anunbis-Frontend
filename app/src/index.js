import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStyle from './assets/constants/GlobalStyle';

import Routes from './routes.js';

ReactDOM.render(
      <>
        <GlobalStyle />
        <Routes />
      </>,
  document.getElementById('root')
);
