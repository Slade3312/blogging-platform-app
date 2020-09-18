import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Alert } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './components/App/App';
import store from './store/store';

const { ErrorBoundary } = Alert;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <CookiesProvider>
          <Router>
            <App />
          </Router>
        </CookiesProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
