import { addDoc, collection } from "@firebase/firestore";
import { Button, Form, Input, message, Select } from "antd";
import { useRef, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { db } from "../../firebase";
import { AdminProductProps } from "../../types/types";

const selectOptions = [
  { value: "vegetable", label: "Vegetable" },
  { value: "fruits", label: "Fruits" },
  { value: "meet", label: "Meet" },
  { value: "fish", label: "Fish" },
];

const AddNewItemForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = async (values: AdminProductProps) => {
    setIsLoading(true);
    try {
      await addDoc(collection(db, "products"), values);
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
    <Form
      onFinish={onFormSubmit}
      initialValues={{ product: "vegetable" }}
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
        <Select options={selectOptions} />
      </Form.Item>

      <Form.Item name="itemInfo" rules={[{ required: true }]}>
        <Input.TextArea placeholder="Describe this item" allowClear showCount />
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
        <Input placeholder="$3.22" />
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
  );
};

export default AddNewItemForm;
