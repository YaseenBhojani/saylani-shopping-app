import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import AdminHome from "../admin/AdminHome";
import AdminAddItems from "../admin/AdminAddItems";
import AdminAccount from "../admin/AdminAccount";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "home",
    label: "Home",
    children: <AdminHome />,
  },
  {
    key: "addItems",
    label: `AddItems`,
    children: <AdminAddItems />,
  },
  {
    key: "account",
    label: `Account`,
    children: <AdminAccount />,
  },
];

const AdminTab: React.FC = () => (
  <Tabs
    defaultActiveKey="home"
    className="tab"
    items={items}
    onChange={onChange}
  />
);

export default AdminTab;
