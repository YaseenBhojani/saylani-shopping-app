import { Avatar, Button, Card, Input, InputRef, message, Space } from "antd";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useRef } from "react";
import { db } from "../../firebase";
import { AiOutlineCamera } from "react-icons/ai";
import { UserOutlined } from "@ant-design/icons";
import useSelectCategory from "../../hooks/useSelectCategory";

const AdminAccount = () => {
  const nameInputRef = useRef<InputRef | null>(null);
  const categoryInputRef = useRef<InputRef | null>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const { categories } = useSelectCategory();

  const nameUpdateHandler = async () => {
    if (!nameInputRef.current?.input?.value) {
      return;
    }

    try {
      const adminRef = doc(db, "users", "admin");
      await updateDoc(adminRef, {
        fullName: nameInputRef.current.input.value,
      });

      messageApi.open({
        type: "success",
        content: "Name updated successfully",
      });
    } catch (err: any) {
      messageApi.open({
        type: "error",
        content: err.message,
      });
    }
  };

  const addCategoryHandler = async () => {
    if (!categoryInputRef.current?.input?.value) {
      return;
    }
    try {
      const value = categoryInputRef.current.input.value;
      await setDoc(doc(db, "categories", value), {
        label: value,
        value: value.toLowerCase(),
      });
      messageApi.open({
        type: "success",
        content: "Category added successfully",
      });
    } catch (err: any) {
      messageApi.open({
        type: "error",
        content: err.message,
      });
    }
  };

  return (
    <div className="admin-account">
      {contextHolder}
      <Avatar
        size={100}
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
        icon={<UserOutlined />}
      />
      <Input
        ref={nameInputRef}
        className="update-name-input"
        placeholder="Update Full Name"
        onPressEnter={nameUpdateHandler}
      />
      <div className="image-update">
        <AiOutlineCamera />
      </div>

      <Space>
        <Input placeholder="new category name" ref={categoryInputRef} />
        <Button type="primary" onClick={addCategoryHandler}>
          Add
        </Button>
      </Space>

      <h4>All Categories</h4>
      <Space direction="vertical">
        {categories &&
          categories.map((category) => (
            <Card className="card" key={category.value}>
              {category.label}
            </Card>
          ))}
      </Space>
    </div>
  );
};

export default AdminAccount;
