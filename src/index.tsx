import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './assets/css/reset.css';

import store from './store';
import App from './App';
import Loading from './components/Loading';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.Suspense fallback={<Loading />}>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.Suspense>
);
