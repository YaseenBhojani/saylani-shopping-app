import { Button, Drawer } from "antd";
import { useState } from "react";
import AdminTab from "../../components/tabs/AdminTab";
import { AiOutlineMenu } from "react-icons/ai";

const Admin = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="drawer-btn" onClick={showDrawer}>
        <AiOutlineMenu />
      </Button>
      <div>
        <AdminTab />
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </>
  );
};

export default Admin;
