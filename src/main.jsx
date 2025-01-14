import React from 'react'
import { Provider } from 'react-redux'
import {createRoot} from 'react-dom/client'

import App from './App.jsx'

import {store} from './services/store'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
