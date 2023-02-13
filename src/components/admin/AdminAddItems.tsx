import { addDoc, collection } from "@firebase/firestore";
import { Button, Card, Form, Input, InputNumber, message, Select } from "antd";
import { doc, setDoc } from "firebase/firestore";
import { useRef, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { db } from "../../firebase";
import useSelectCategory from "../../hooks/useSelectCategory";
import { Product } from "../../types/types";

const AdminAddItems = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const { categories } = useSelectCategory();

  const onFormSubmit = async (values: Product) => {
    setIsLoading(true);

    try {
      const productsRef = doc(collection(db, "products"));
      await setDoc(productsRef, values);
      messageApi.open({
        type: "success",
        content: "Add cart successfully",
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
    <div className="admin-add-item">
      {contextHolder}
      <h3>Add New Item</h3>
      <Card>
        <Form
          onFinish={onFormSubmit}
          initialValues={{ product: categories[0].value }}
          requiredMark="optional"
        >
          {contextHolder}
          <div className="image-upload">
            <AiOutlineCamera />
          </div>

          <Form.Item name="itemName" rules={[{ required: true }]}>
            <Input placeholder="Item Name" />
          </Form.Item>

          <Form.Item name="product" rules={[{ required: true }]}>
            <Select options={categories} />
          </Form.Item>

          <Form.Item name="itemInfo" rules={[{ required: true }]}>
            <Input.TextArea
              placeholder="Describe this item"
              allowClear
              showCount
            />
          </Form.Item>

          <Form.Item
            name="unitName"
            label="Unit Name:"
            rules={[{ required: true }]}
          >
            <Input placeholder="Pcs/ kg/ dozen" />
          </Form.Item>

          <Form.Item
            name="unitPrice"
            label="Unit Price:"
            rules={[{ required: true }]}
          >
            <InputNumber placeholder="$3.22" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={isLoading}
            >
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AdminAddItems;
