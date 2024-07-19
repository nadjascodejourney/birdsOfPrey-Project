import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RaptorContextProvider } from "./utils/RaptorContextProvider.jsx";

//* React Query is a library that provides hooks for fetching, caching and updating asynchronous data in React
/* const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // how long the data is considered to be fresh
      cacheTime: Infinity, // how long the data should be cached
      refetchOnWindowFocus: false, // whether the data should be refetched when the window regains focus
    },
  },
}); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*     <QueryClientProvider client={queryClient}>
     */}
    {/* // QueryClientProvider is a component that provides the React Query client to the rest of the application */}
    <RaptorContextProvider>
      <RouterProvider router={router} />
    </RaptorContextProvider>
    {/*     </QueryClientProvider>
     */}
  </React.StrictMode>
);

// replace the <App/> component with RouterProvider and then pass it the router => we defer the entry point to our app to React Router
// RouterProvider is built using the context API from React
//* React Router - Complete Tutorial: https://www.youtube.com/watch?v=oTIJunBa6MA

// Du musst den QueryClientProvider um den RouterProvider wickeln, damit die QueryClient-Instanz im gesamten Anwendungsbaum verfügbar ist.Man kann aber auch nur bestimmte Bereiche wrappen, je nachdem was man benötigt.
