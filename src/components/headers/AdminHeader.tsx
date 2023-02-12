import { Avatar, Button, Typography } from "antd";
import { AiOutlineLeft, AiOutlineMenu } from "react-icons/ai";

const { Title } = Typography;

const AdminHeader = () => {
  return (
    <div className="admin-header">
      <AiOutlineLeft size={25} />
      <Avatar
        size="large"
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
      />
      <div className="text">
        <Title level={3}>M.Ahmed</Title>
        <Title level={5}>Admin</Title>
      </div>
      <Button icon={<AiOutlineMenu size={20} />}></Button>
    </div>
  );
};

export default AdminHeader;
