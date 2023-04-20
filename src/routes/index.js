import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";
import Home from "~/pages/Home";
import SideProduct from "~/pages/SideProduct";
import Dashboard from "~/pages/Dashboard";
import ManageProduct from '~/pages/ManageProduct';
import ManageProductDetail from '~/pages/ManageProductDetail';
import ManageEmployee from '~/pages/ManageEmployee';
import ManageCustomer from '~/pages/ManageCustomer';
import ManageTransaction from "~/pages/ManageTransaction";
import ManageAnnounce from '~/pages/ManageAnnounce';
import ManageSite from '~/pages/ManageSite';
import Test from '~/pages/Test';
import Announce from "~/pages/Announce";
import Product from "~/pages/Product";
import CartView from "~/pages/Cart";
import AnnounceDetail from "~/pages/AnnounceDetail";
import ForgotPassword from "~/pages/ForgotPassword";
import Otp from "~/pages/ForgotPassword/Otp";

export const routesWithLayout = [
  {
    path: "",
    Component: Home,
  },
  {
    path: "side-product",
    Component: SideProduct,
  },
  {
    path: "product",
    Component: Product,
  },
  {
    path: "cart",
    Component: CartView,
  },
  {
    path: "announce-list",
    Component: Announce,
  },
  {
    path: "announce",
    Component: AnnounceDetail,
  },
  {
    path: "product",
    Component: Product,
  },
  {
    path: "cart",
    Component: CartView,
  },
];

export const routesAdmin = [
  {
    path: 'dashboard',
    Component: Dashboard
  },
  {
    path: 'product',
    Component: ManageProduct
  },
  {
    path: 'product/update/:meta',
    Component: ManageProductDetail
  },
  {
    path: 'product/create',
    Component: ManageProductDetail
  },
  {
    path: 'employee',
    Component: ManageEmployee
  },
  {
    path: 'customer',
    Component: ManageCustomer
  },
  {
    path: 'transaction',
    Component: ManageTransaction
  },
  {
    path: 'announce',
    Component: ManageAnnounce
  },
  {
    path: 'site',
    Component: ManageSite
  },
  {
    path: 'test',
    Component: Test
  }
];

export const routesWithoutLayout = [
  {
    path: "sign-in",
    Component: SignIn,
  },
  {
    path: "sign-up",
    Component: SignUp,
  },
  {
    path: "forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "otp",
    Component: Otp,
  },
];

export default { routesWithLayout, routesWithoutLayout};
