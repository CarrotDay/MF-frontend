import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";
import Home from "~/pages/Home";
import SideProduct from "~/pages/SideProduct";
import Dashboard from "~/pages/Dashboard";
import ManageProduct from '~/pages/ManageProduct';
import ManageProductDetail from '~/pages/ManageProductDetail';
import ManageEmployee from '~/pages/ManageEmployee';
import ManageEmployeeDetail from '~/pages/ManageEmployeeDetail';
import ManageCustomer from '~/pages/ManageCustomer';
import ManageTransaction from "~/pages/ManageTransaction";
import ManageTransactionDetail from "~/pages/ManageTransactionDetail";
import ManageAnnounce from '~/pages/ManageAnnounce';
import ManageAnnounceDetail from '~/pages/ManageAnnounceDetail';
import ManageSite from '~/pages/ManageSite';
import Test from '~/pages/Test';
import Announce from "~/pages/Announce";
import Product from "~/pages/Product";
import CartView from "~/pages/Cart";
import AnnounceDetail from "~/pages/AnnounceDetail";
import ForgotPassword from "~/pages/ForgotPassword";
import Otp from "~/pages/ForgotPassword/Otp";
import AccountInfo from "~/pages/AcountInfo";
import Contact from "~/pages/Contact";

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
    path: "product/:meta",
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
    path: "contacts",
    Component: Contact,
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
    path: "account-information",
    Component: AccountInfo,
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
    path: "product/:meta",
    Component: Product,
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
    path: 'employee/create',
    Component: ManageEmployeeDetail
  },
  {
    path: 'customer/create',
    Component: ManageCustomer
  },
  {
    path: 'customer',
    Component: ManageCustomer
  },
  {
    path: 'customer/:meta',
    Component: ManageCustomer
  },
  {
    path: 'transaction',
    Component: ManageTransaction
  },
  {
    path: 'transaction/update/:meta',
    Component: ManageTransactionDetail
  },
  {
    path: 'announce',
    Component: ManageAnnounce
  },
  {
    path: 'announce/create',
    Component: ManageAnnounceDetail
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
