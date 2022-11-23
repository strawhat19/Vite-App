import { createRoot } from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './app';
let site = `/vite-app`;
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/vite-app" element={<App />} errorElement={<App />} />
//       <Route path="new" element={<>New</>} errorElement={<>New</>} />
//       <Route path="/new" element={<>New</>} errorElement={<>New</>} />
//       <Route path="vite-app/new" element={<>New</>} errorElement={<>New</>} />
//     </>
//   )
// );

// const router = createBrowserRouter([
//   {
//     path: site,
//     element: <App />,
//   },
//   {
//     path: `${site}/new`,
//     element: <>New</>,
//   }
// ]);

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <RouterProvider router={router} />
// );

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={`/`} element={<App />} />
        <Route path={site} element={<App />} />
        <Route path={`new`} element={<>New</>} />
        <Route path={`/new`} element={<>New</>} />
        <Route path={`${site}/new`} element={<>New</>} />
        <Route path={`${site}/new/`} element={<>New</>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)