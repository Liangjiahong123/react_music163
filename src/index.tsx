import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import './assets/css/reset.css';
import mixin from './assets/css/mixin';

import store from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={mixin}>
        <App />
      </ThemeProvider>
    </Provider>
  </HashRouter>
);
