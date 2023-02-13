import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import UserCart from "../user/UserCart";
import UserHome from "../user/UserHome";
import UserAccount from "../user/UserAccount";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "home",
    label: "Home",
    children: <UserHome />,
  },
  {
    key: "cart",
    label: "Cart",
    children: <UserCart />,
  },
  {
    key: "account",
    label: "Account",
    children: <UserAccount />,
  },
];

const UserTab: React.FC = () => (
  <Tabs
    defaultActiveKey="home"
    items={items}
    className="tab"
    onChange={onChange}
  />
);

export default UserTab;
