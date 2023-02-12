import { Button, ConfigProvider } from "antd";
import { FC } from "react";
import { ChildrenProp } from "../../types/types";

const Theme: FC<ChildrenProp> = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#61B846",
        colorLink: "#024f9d",
        fontFamily: "Roboto",
        borderRadius: 2,
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default Theme;
