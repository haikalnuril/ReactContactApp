import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//import BrowserRouter dari react router
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <authProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </authProvider>
)