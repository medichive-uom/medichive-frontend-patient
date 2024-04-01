import React, { useEffect, useState } from "react";
import {
  BookFilled,
  ExperimentFilled,
  LogoutOutlined,
  HomeFilled,
} from "@ant-design/icons";
import { Typography } from "antd";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

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
  const [selectedKey, setSelectedKey] = useState<string>("1");
  const location = useLocation();

  useEffect(() => {
    // Retrieve selected key from local storage
    const storedKey = localStorage.getItem("selectedKey");
    if (storedKey) {
      setSelectedKey(storedKey);
    }
  }, []);

  useEffect(() => {
    // Update selected key when location changes
    const menuItem = items.find(item => item.path === location.pathname);
    if (menuItem) {
      setSelectedKey(menuItem.key);
    }
  }, [location.pathname]);

  const handleMenuClick = (key: string) => {
    // Store selected key in local storage
    localStorage.setItem("selectedKey", key);
    setSelectedKey(key);
  };

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
      <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuClick(item.key)}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
