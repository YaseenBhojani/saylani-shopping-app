import { FC } from "react";
import { Card, Image, Typography } from "antd";
import { AdminProductProps } from "../../types/types";

const { Title } = Typography;

const AdminProduct: FC<AdminProductProps> = ({
  unitPrice,
  product,
  unitName,
  itemInfo,
  itemName,
}) => {
  return (
    <Card>
      <Image />
      <Title level={3}>{itemName}</Title>
    </Card>
  );
};

export default AdminProduct;
