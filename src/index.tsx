import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from 'react-service-worker';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

registerServiceWorker();
