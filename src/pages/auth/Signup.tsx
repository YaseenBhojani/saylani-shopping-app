import { Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../../components/forms/SignupForm";

const { Title, Paragraph } = Typography;

const Signup = () => {
  return (
    <div className="auth">
      <Space direction="vertical" size={0} className="intro">
        <Title level={2}>SAYLANI WELFARE</Title>
        <Paragraph className="para">ONLINE DISCOUNT STORE</Paragraph>
      </Space>

      <SignupForm />

      <Link to="/signin">Already have an account? Login</Link>
    </div>
  );
};

export default Signup;
