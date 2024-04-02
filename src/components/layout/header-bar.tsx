import React from "react";
import { Button, Dropdown, Layout, MenuProps } from "antd";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a>Profile</a>,
  },
  {
    key: "2",
    label: <a>Logout</a>,
  },
];

const HeaderBar: React.FC = () => {
  return (
    <Header style={{ padding: 0, background: "#001529" }}>
    <div style={{ float: "right", marginRight:"30px"}}> 
        <Dropdown menu={{ items }} placement="bottomRight">
          <Button type="primary">Saman Perera</Button>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderBar;
