import { Typography } from "antd";
import { AiOutlineHome } from "react-icons/ai";
import { MdAddCircleOutline, MdOutlinePerson } from "react-icons/md";
import { useNavigate } from "react-router";

const { Text } = Typography;

const AdminFooter = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-footer">
      <div onClick={() => navigate("/admin/home")}>
        <AiOutlineHome />
        <Text>Home</Text>
      </div>

      <div onClick={() => navigate("/admin/addItem")}>
        <MdAddCircleOutline />
        <Text>Add Items</Text>
      </div>

      <div onClick={() => navigate("/admin/settings")}>
        <MdOutlinePerson />
        <Text>Account</Text>
      </div>
    </div>
  );
};

export default AdminFooter;
