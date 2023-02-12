import { Typography } from "antd";
import AdminFooter from "../../components/footers/AdminFooter";
import AdminHeader from "../../components/headers/AdminHeader";
import AdminProduct from "../../components/produts/AdminProduct";
import { useAdminProducts } from "../../store/AdminProductsContext";
import { AdminProductProps } from "../../types/types";

const { Title } = Typography;

const Home = () => {
  const { products, isLoading } = useAdminProducts();

  return (
    <div className="admin-home">
      <AdminHeader />
      <Title level={3}>All Products</Title>
      {isLoading && <h3>Loading...</h3>}
      {products &&
        products.map((product: AdminProductProps) => (
          <AdminProduct {...product} />
        ))}
      <AdminFooter />
    </div>
  );
};

export default Home;
