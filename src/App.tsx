import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router"; // Updated import
import "./App.css";
import Landing from "./Pages/LandingPage/Landing";
import { Contact } from "./Pages/Contact/Contact";
import { ProjectsPage } from "./Pages/Projects/Projects";
import { ProjectDetails } from "./Pages/Projects/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/projects",
    element: <ProjectsPage />,
  },


  {
    path: "/projects-details",
    element: <ProjectDetails />,
  },


]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}