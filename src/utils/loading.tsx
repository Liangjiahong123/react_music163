import React from 'react';
import ReactDOM from 'react-dom/client';
import Loading from '@cpns/Loading';

let serviceCount = 0;

const showLoading = () => {
  if (serviceCount === 0) {
    const loadingDOM = document.createElement('div');
    loadingDOM.setAttribute('id', 'loading');
    document.body.appendChild(loadingDOM);
    ReactDOM.createRoot(loadingDOM).render(<Loading />);
  }
  serviceCount++;
};

const hideLoading = () => {
  serviceCount > 0 && serviceCount--;
  if (serviceCount === 0) {
    const loadingDOM = document.getElementById('loading');
    loadingDOM && document.body.removeChild(loadingDOM);
  }
};

export { showLoading, hideLoading };
