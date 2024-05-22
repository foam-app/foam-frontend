import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./global.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import SignUp from "./pages/forms/SignUp";
import Address from "./pages/forms/Address";
import Login from "./pages/forms/Login";
import ResetEmail from "./pages/forms/ResetEmail";
import Pin from "./pages/forms/Pin";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Services from "./pages/services/Services";
import ServiceInfo from "./components/services/ServiceInfo";
import Store from "./pages/store/Store";
import AddressInfo from "./components/store/Address";
import App from "./components/store/Payment";
import Basket from "./pages/basket/Basket";

import { TokenProvider } from "./context/TokenProvider";
import { ProfileProvider } from "./context/ProfileContext";
import History from "./pages/history/History";
import ChangePassword from "./pages/forms/ChangePassword";

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
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/service-info",
    element: <ServiceInfo />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/pickup-address",
    element: <AddressInfo />,
  },
  {
    path: "/payment",
    element: <App />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer></ToastContainer>
    <TokenProvider>
      <ProfileProvider>
        <RouterProvider router={router} />
      </ProfileProvider>
    </TokenProvider>
  </React.StrictMode>
);
