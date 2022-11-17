import './index.css'
import React from 'react'
import Router from './Router'
import ReactDOM from 'react-dom/client'
import Header from './components/header/header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Router />
  </React.StrictMode>
)

// ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, 
// <BrowserRouter>
//   <Router />
// </BrowserRouter>);
