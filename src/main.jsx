import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// replace the <App/> component with RouterProvider and then pass it the router => we defer the entry point to our app to React Router
// RouterProvider is built using the context API from React
//* React Router - Complete Tutorial: https://www.youtube.com/watch?v=oTIJunBa6MA
