import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { Provider } from 'react-redux';
import store from 'testRedux/config/configStore';
import GlobalStyle from 'style/GlobalStyle';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
    <ToastContainer />
  </Provider>
);
