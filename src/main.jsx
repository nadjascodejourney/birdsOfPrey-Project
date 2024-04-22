import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Falconry from "./pages/Falconry";
import Events from "./pages/Events";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, id: 1, errorElement: <NotFound /> },
      { path: "/about", element: <About />, id: 2 },
      { path: "/falconry", element: <Falconry />, id: 3 },
      { path: "/events", element: <Events />, id: 4 },
      { path: "/contact", element: <Contact />, id: 5 },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// replace the <App/> component with RouterProvider and then pass it the router => we defer the entry point to our app to React Router
// RouterProvider is built using the context API from React
//* React Router - Complete Tutorial: https://www.youtube.com/watch?v=oTIJunBa6MA
