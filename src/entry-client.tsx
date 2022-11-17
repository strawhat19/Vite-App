import './index.css'
import React from 'react'
import Router from './Router'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)

// ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, 
// <BrowserRouter>
//   <Router />
// </BrowserRouter>);
