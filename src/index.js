import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistedStore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import { ThemeProvider } from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

