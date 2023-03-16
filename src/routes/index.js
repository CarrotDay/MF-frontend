import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";
import Home from "~/pages/Home";
import SideProduct from "~/pages/SideProduct";
import Announce from "~/pages/Announce";
import Product from "~/pages/Product";


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
  {
    path: "/announce",
    Component: Announce,
  },
  {
    path: "/product",
    Component: Product,
  },
];

export default routes;
