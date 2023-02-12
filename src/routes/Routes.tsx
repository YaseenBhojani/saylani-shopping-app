import { createBrowserRouter } from "react-router-dom";

// *** Startup Page ***
import StartingScreen from "../pages/startup/StartingScreen";

// *** Authentication Pages ***
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";

// *** Admin Pages ***
import AddItem from "../pages/admin/AddItem";
import Home from "../pages/admin/Home";
import Orders from "../pages/admin/Orders";
import Settings from "../pages/admin/Settings";

// *** User Pages ***
import Account from "../pages/user/Account";
import UserHome from "../pages/user/UserHome";
import ShoppingCart from "../pages/user/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartingScreen />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin",
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "addItem",
        element: <AddItem />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/user",
    children: [
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "home",
        element: <UserHome />,
      },
      {
        path: "shoppingCart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

export default router;
