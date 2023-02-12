import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import SigninForm from "../../components/forms/SigninForm";

const { Title, Paragraph } = Typography;

const Signin = () => {
  return (
    <div className="auth">
      <Space direction="vertical" size={0} className="intro">
        <Title level={2}>SAYLANI WELFARE</Title>
        <Paragraph className="para">ONLINE DISCOUNT STORE</Paragraph>
      </Space>

      <SigninForm />

      <Link to="/signup">Don't have an account? Register</Link>
    </div>
  );
};

export default Signin;
