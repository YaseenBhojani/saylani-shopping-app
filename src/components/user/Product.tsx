import { Button, Card, Col } from "antd";
import { Product as ProductType } from "../../types/types";

const Product = ({
  itemInfo,
  itemName,
  product,
  unitName,
  unitPrice,
}: ProductType) => {
  console.log(itemInfo);
  return (
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <Card className="card">
        <img src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8RnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" />
        <div className="text">
          <h4>{itemName}</h4>
          <p>{itemInfo}</p>
        </div>
        <span>{unitPrice}</span>
        <Button type="primary">+</Button>
      </Card>
    </Col>
  );
};

export default Product;
