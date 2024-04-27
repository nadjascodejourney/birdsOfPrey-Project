import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Falconry from "../pages/Falconry";
import Events from "../pages/Events";
import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/falconry", element: <Falconry /> },
      { path: "/events", element: <Events /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
