
import LogoView from "../views/LogoView";
import Home from "../views/home";
import { NavLinkProps } from "./types";

const navLinks: Array<NavLinkProps> = [
  {
    path: "Logo",
    component: <LogoView />,
  },
  {
    path: "Home",
    component: <Home />,
  },
  {
    path: "Services",
    component: null,
  },
  {
    path: "Gallery",
    component: null,
  },
  {
    path: "Contact Us",
    component: null,
  },
];

export default navLinks;
