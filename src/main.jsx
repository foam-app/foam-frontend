import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import SignUp from "./pages/forms/SignUp";
import Address from "./pages/forms/Address";
import Login from "./pages/forms/Login";
import ResetEmail from "./pages/forms/ResetEmail";
import Pin from "./pages/forms/Pin";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signup-address",
    element: <Address />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-email",
    element: <ResetEmail />,
  },
  {
    path: "/pin",
    element: <Pin />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
