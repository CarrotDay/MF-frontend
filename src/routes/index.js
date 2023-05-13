import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";
import Home from "~/pages/Home";
import SideProduct from "~/pages/SideProduct";
import Dashboard from "~/pages/Dashboard";
import ManageProduct from "~/pages/ManageProduct";
import ManageProductDetail from "~/pages/ManageProductDetail";
import ManageEmployee from "~/pages/ManageEmployee";
import ManageEmployeeDetail from "~/pages/ManageEmployeeDetail";
import ManageCustomer from "~/pages/ManageCustomer";
import ManageTransaction from "~/pages/ManageTransaction";
import ManageTransactionDetail from "~/pages/ManageTransactionDetail";
import ManageAnnounce from "~/pages/ManageAnnounce";
import ManageAnnounceDetail from "~/pages/ManageAnnounceDetail";
import ManageSite from "~/pages/ManageSite";
import ManageCatalog from "~/pages/ManageCatalog";
import Announce from "~/pages/Announce";
import Product from "~/pages/Product";
import CartView from "~/pages/Cart";
import AnnounceDetail from "~/pages/AnnounceDetail";
import ForgotPassword from "~/pages/ForgotPassword";
import Otp from "~/pages/ForgotPassword/Otp";
import AccountInfo from "~/pages/AcountInfo";
import Contact from "~/pages/Contact";
import Transaction from "~/pages/Transaction";
import UpdateAccountInfo from "~/pages/UpdateAccount/UpdateAccountInfo";
import ChangePassword from "~/pages/ChangePassword/ChangePassword";

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

export const routesWithLayout = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/side-product/:meta",
    Component: SideProduct,
  },
  {
    path: "/product/:meta",
    Component: Product,
  },
  {
    path: "/announce-list",
    Component: Announce,
  },
  {
    path: "/announce/:id",
    Component: AnnounceDetail,
  },
  {
    path: "/product",
    Component: Product,
  },
  {
    path: "contacts",
    Component: Contact,
  },
  {
    path: "/account-information",
    Component: AccountInfo,
  },
  {
    path: "/update-account-information",
    Component: UpdateAccountInfo,
  },

  {
    path: "/change-password",
    Component: ChangePassword,
  },
];

export const routesCustomer = [
  {
    path: "/cart",
    Component: CartView,
  },
  {
    path: "/transaction",
    Component: Transaction,
  },
  {
    path: "/transaction/:meta",
    Component: ManageTransactionDetail,
  },
];

export const routesEmployee = [
  {
    path: "/manage/dashboard",
    Component: Dashboard,
  },
  {
    path: "manage/product",
    Component: ManageProduct,
  },
  {
    path: "/manage/product/:meta",
    Component: Product,
  },
  {
    path: "/manage/product/update/:meta",
    Component: ManageProductDetail,
  },
  {
    path: "/manage/product/create",
    Component: ManageProductDetail,
  },
  {
    path: "/manage/transaction",
    Component: ManageTransaction,
  },
  {
    path: "/manage/transaction/:meta",
    Component: ManageTransactionDetail,
  },
  {
    path: "/manage/customer",
    Component: ManageCustomer,
  },
  {
    path: "/manage/customer/:meta",
    Component: ManageCustomer,
  },
];

export const routesAdmin = [
  ...routesEmployee,
  {
    path: "/manage/employee",
    Component: ManageEmployee,
  },
  {
    path: "/manage/employee/create",
    Component: ManageEmployeeDetail,
  },
  {
    path: "/manage/customer/create",
    Component: ManageCustomer,
  },
  {
    path: "/manage/announce",
    Component: ManageAnnounce,
  },
  {
    path: "/manage/announce/create",
    Component: ManageAnnounceDetail,
  },
  {
    path: '/manage/announce/update/:meta',
    Component: ManageAnnounceDetail
  },
  {
    path: '/manage/site',
    Component: ManageSite
  },
  {
    path: "/manage/catalog",
    Component: ManageCatalog,
  },
];

export default { routesWithLayout, routesWithoutLayout };
