import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

export const routes = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "About", path: "about", element: <About /> },
  { name: "Contact", path: "contact", element: <Contact /> },
];
