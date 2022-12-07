import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './pages/index/Index';
import Form from './pages/formulario/Index'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

