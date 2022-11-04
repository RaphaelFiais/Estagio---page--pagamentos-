import React from 'react'
import ReactDOM from 'react-dom/client'
import Route from './router'
import GlobalStyle from './globalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Route />
  </React.StrictMode>
)
