import { createRoot } from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './app';
let site = `/vite-app`;

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

const router = createBrowserRouter([
  {
    path: site,
    element: <App />,
  },
  {
    path: `${site}/new`,
    element: <>New</>,
  }
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);