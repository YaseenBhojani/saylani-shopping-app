import { Typography } from "antd";
import AddNewItemForm from "../../components/forms/AddNewItemForm";
import AdminFooter from "../../components/footers/AdminFooter";
import AdminHeader from "../../components/headers/AdminHeader";

const { Title } = Typography;

const AddItem = () => {
  return (
    <div className="add-item">
      <AdminHeader />
      <Title level={3}>Add New Item</Title>
      <AddNewItemForm />
      <AdminFooter />
    </div>
  );
};

export default AddItem;
