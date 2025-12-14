import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router"; // Updated import
import "./App.css";
import Landing from "./Pages/LandingPage/Landing";
import { Contact } from "./Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}