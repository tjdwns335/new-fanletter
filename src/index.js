import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { Provider } from 'react-redux';
import GlobalStyle from 'style/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getStore from 'testRedux/config/configStore';

const store = getStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
    <ToastContainer />
  </Provider>
);
