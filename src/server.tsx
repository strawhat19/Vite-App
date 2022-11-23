import App from './app';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom/client';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
// import React from "react";
import { createRoot } from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/vite-app" element={<App />} errorElement={<App />} />
      <Route path="new" element={<>New</>} errorElement={<>New</>} />
      <Route path="/new" element={<>New</>} errorElement={<>New</>} />
      <Route path="vite-app/new" element={<>New</>} errorElement={<>New</>} />
    </>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);