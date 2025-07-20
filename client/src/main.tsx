import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from './pages/Home/page';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
)

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);