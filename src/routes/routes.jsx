import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Falconry from "../pages/Falconry";
import Events from "../pages/Events";

const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/about", element: <About />, id: 2 },
  { path: "/falconry", element: <Falconry />, id: 3 },
  { path: "/events", element: <Events />, id: 4 },
  { path: "/contact", element: <Contact />, id: 5 },
  { path: "*", element: <NotFound />, id: 6 },
];

export default routes;
