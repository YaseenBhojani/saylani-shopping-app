import { Card, Space } from "antd";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Product } from "../../types/types";

const AdminHome = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const productsArray: Product[] = [];
      querySnapshot.forEach((doc) => {
        productsArray.push(doc.data());
      });

      setProducts(productsArray);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="admin-home">
      <h3>All Products</h3>

      {products &&
        products.map((product, index) => {
          return (
            <Card key={index}>
              <img
                src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8RnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
                alt="image"
              />

              <Space direction="vertical" className="product-detail" size={2}>
                <h4>{product.itemName}</h4>
                <span>{product.unitName}</span>
              </Space>
              <div className="price">${product.unitPrice}</div>
            </Card>
          );
        })}
    </div>
  );
};

export default AdminHome;
