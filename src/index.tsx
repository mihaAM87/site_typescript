import React from 'react';
import './index.module.scss';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import registerServiceWorker from 'react-service-worker';
import { store } from './store';
import App from './App';

const root: ReactDOM.Root = ReactDOM.createRoot(
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
