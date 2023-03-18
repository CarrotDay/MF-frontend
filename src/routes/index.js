import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";
import Home from "~/pages/Home";
import SideProduct from "~/pages/SideProduct";
import ManageProduct from '~/pages/ManageProduct';
import ManageEmployee from '~/pages/ManageEmployee';
import ManageCustomer from '~/pages/ManageCustomer';
import ManageTransaction from "~/pages/ManageTransaction";
import ManageSite from '~/pages/ManageSite';
import Test from '~/pages/Test';
import Announce from "~/pages/Announce";
import Product from "~/pages/Product";
import CartView from "~/pages/Cart";


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
    path: "/side-product",
    Component: SideProduct,
  },
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/announce",
    Component: Announce,
  },
  {
    path: "/product",
    Component: Product,
  },
  {
    path: "/cart",
    Component: CartView,
  },
  {
    path: '/manage/product',
    Component: ManageProduct
  },
  {
    path: '/manage/employee',
    Component: ManageEmployee
  },
  {
    path: '/manage/customer',
    Component: ManageCustomer
  },
  {
    path: '/manage/transaction',
    Component: ManageTransaction
  },
  {
    path: '/manage/site',
    Component: ManageSite
  },
  {
    path: '/test',
    Component: Test
  }
];

export default routes;
