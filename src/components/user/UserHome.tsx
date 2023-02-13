import { Button, Card, Col, Input, Row } from "antd";
import GroceryImage from "../../assets/images/Grocery.png";
import { AiOutlineSearch } from "react-icons/ai";
import Product from "./Product";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Product as ProductType } from "../../types/types";

const UserHome = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsArray: ProductType[] = [];
        querySnapshot.forEach((doc) => {
          productsArray.push(doc.data());
        });
        setProducts(productsArray);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="user-home">
      <h2>Saylani Welfare</h2>
      <p>DISCOUNT STORE</p>
      <img src={GroceryImage} alt="Fruit Image" />

      <div>
        <Input
          className="search-input"
          placeholder="Search by product name"
          prefix={<AiOutlineSearch />}
        />
      </div>

      <Row>
        {products &&
          products.map((product, index) => {
            return <Product {...product} key={index} />;
          })}
      </Row>
    </div>
  );
};

export default UserHome;
