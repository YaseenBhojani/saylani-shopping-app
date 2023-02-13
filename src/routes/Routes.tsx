import { createBrowserRouter } from "react-router-dom";

// *** Startup Page ***
import StartingScreen from "../pages/startup/StartingScreen";

// *** Authentication Pages ***
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import Admin from "../pages/admin/Admin";
import User from "../pages/user/User";

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
    element: <Admin />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

export default router;
