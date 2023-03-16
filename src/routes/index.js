import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";
import Home from "~/pages/Home";
import SideProduct from "~/pages/SideProduct";


const routes = [
  {
    path: "/sign-in",
    Component: SignIn,
  },
  {
    path: "/sign-up",
    Component: SignUp,
  },
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/side-product",
    Component: SideProduct,
  },
];

export default routes;
