import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './app';
let site = `/vite-app`;
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={site} element={<App />} />
        <Route path={`${site}/new`} element={<div>New</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)