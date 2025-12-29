import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router"; 
import "./App.css";
import Landing from "./Pages/LandingPage/Landing";
import { Contact } from "./Pages/Contact/Contact";
import { ProjectsPage } from "./Pages/Projects/Projects";
import { ProjectDetails } from "./Pages/Projects/DetailsPage";
import AOS from 'aos';
import "aos/dist/aos.css"; 

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
    path: "/projects/:id",
    element: <ProjectDetails />,
  },


]);

export default function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}