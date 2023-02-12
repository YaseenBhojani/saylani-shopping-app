import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import AdminProductsProvider from "./store/AdminProductsContext";

const App = () => {
  return (
    <AdminProductsProvider>
      <RouterProvider router={router} />
    </AdminProductsProvider>
  );
};

export default App;
