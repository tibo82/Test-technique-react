import Home from "../pages/Home";
import Todos from "../components/Todos";
import NotFoundPage from "../pages/NotFoundPage";
export const getRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
  { path: "*", component: NotFoundPage },
];
