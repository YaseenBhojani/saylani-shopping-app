import { useState } from "react";
import { Button, Form, Input, InputNumber, message } from "antd";

// firebase
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { addDoc, collection } from "@firebase/firestore";

// *** Types ***
import { SignupFormValues } from "../../types/types";

// *** Icons ***
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router";

const SignupForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFormSubmit = async (values: SignupFormValues) => {
    const { contact, email, fullName, password } = values;

    setIsLoading(true);

    try {
      // authenticate user
      await createUserWithEmailAndPassword(auth, email, password);

      // update user profile
      await updateProfile(auth.currentUser!, {
        displayName: fullName,
      });

      // add user to firestore
      await addDoc(collection(db, "users"), { contact, email, fullName });

      // navigate user to home screen
      navigate("/user/home");
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
        name="fullName"
        rules={[{ required: true, message: "Please enter a full name" }]}
      >
        <Input placeholder="Full Name" prefix={<AiOutlineUser />} />
      </Form.Item>

      <Form.Item
        name="contact"
        rules={[{ required: true, message: "Please enter a contact number" }]}
      >
        <InputNumber
          placeholder="Contact"
          prefix={<BsTelephone />}
          style={{ width: "100%" }}
        />
      </Form.Item>

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
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
