import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
// import 'babel-polyfill';

import 'react-app-polyfill/stable';
// import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'core-js';
import 'core-js/es';
import 'core-js/es/object/assign';
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js';
// import 'core-js/actual';
import 'core-js/es/symbol';
import 'core-js/es/object';
import 'core-js/es/function';
import 'core-js/es/parse-int';
import 'core-js/es/parse-float';
import 'core-js/es/number';
import 'core-js/es/math';
import 'core-js/es/string';
import 'core-js/actual/set';
import 'core-js/actual/map';
import 'core-js/es/date';
import 'core-js/es/array';
import 'core-js/actual/array/from';
import 'core-js/es/regexp';
import 'core-js/es/weak-map';
import 'core-js/es/array';
import 'core-js/es/reflect';
import 'core-js/es/array/includes';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
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
