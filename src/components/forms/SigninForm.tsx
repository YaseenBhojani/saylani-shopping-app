import { useState } from "react";
import { Button, Form, Input, message } from "antd";

// *** firebase ***
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { collection, getDocs, query, where } from "@firebase/firestore";

// *** types ***
import { SigninFormValues, User } from "../../types/types";

// *** Icons ***
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router";

const SigninForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFormSubmit = async (values: SigninFormValues) => {
    const { email, password } = values;

    setIsLoading(true);

    try {
      // authenticate user
      await signInWithEmailAndPassword(auth, email, password);

      // get user from firestore
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      let user: User;
      querySnapshot.forEach((doc) => {
        user = doc.data();
        if (user.isAdmin) navigate("/admin/home");
        else navigate("/user/home");
      });
    } catch (err: any) {
      messageApi.open({
        type: "error",
        content: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onFinish={onFormSubmit}>
      {contextHolder}

      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="Email" prefix={<AiOutlineMail />} />
      </Form.Item>

      <Form.Item
        name="password"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please input your password!",
            min: 6,
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" prefix={<AiOutlineLock />} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SigninForm;
