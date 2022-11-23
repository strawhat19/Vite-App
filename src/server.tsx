import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './app';
let site = `/vite-app`;
import * as React from 'react';
import About from "./about/about";
import * as ReactDOM from 'react-dom/client';
import Header from "./components/header/header";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={site} element={<App />} errorElement={<><Header />404 Page Not Found</>} />
        <Route path={`${site}/about`} element={<><About /></>} />
        <Route path={`${site}/404`} element={<><Header />404 Page Not Found</>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)