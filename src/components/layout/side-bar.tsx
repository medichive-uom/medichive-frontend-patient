import React from "react";
import {
  BookFilled,
  ExperimentFilled,
  LogoutOutlined,
  HomeFilled,
} from "@ant-design/icons";
import { Typography } from "antd";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Sider } = Layout;
const navbar = ["Home", "Book Appointment", "View Lab Reports", "Logout"];
const items = [HomeFilled, BookFilled, ExperimentFilled, LogoutOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `${navbar[index]}`,
    path: `/${navbar[index].replace(/\s+/g, "").toLowerCase()}`,
  })
);

const Sidebar: React.FC = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0" style={{ minHeight: "100vh" }}>
      <Title
        level={3}
        style={{
          color: "white",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        MEDICHIVE
      </Title>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
