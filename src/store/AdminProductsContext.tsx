import { collection, getDocs } from "@firebase/firestore";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { ChildrenProp } from "../types/types";

const initialValues = {
  products: [],
  isLoading: false,
};

const AdminProductsContext = createContext(initialValues);
export const useAdminProducts = () => useContext(AdminProductsContext);

const AdminProductsProvider: FC<ChildrenProp> = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsArray: any = [];
      querySnapshot.forEach((doc: any) => {
        productsArray.push(doc.data());
      });
      setProducts(productsArray);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const values = {
    products,
    isLoading,
  };

  return (
    <AdminProductsContext.Provider value={values}>
      {children}
    </AdminProductsContext.Provider>
  );
};

export default AdminProductsProvider;
