import React from 'react'
import ReactDOM from 'react-dom'
import App from './app';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';

const myStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
