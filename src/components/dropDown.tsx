import React from 'react';
import { Dropdown, Button, Space, message, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface DropDownProps {
  items: { key: string; label: string }[];
  buttonText: string;
  width?: string; // Make width prop optional
}

const handleMenuClick = (e: any) => {
  message.info(`Clicked on menu item ${e.key}`);
  console.log('Clicked on menu item:', e);
};

const DropDown: React.FC<DropDownProps> = ({ items, buttonText, width }) => {
  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map(item => (
        <Menu.Item key={item.key}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button style={{ width: width }}>
        <Space>
          {buttonText}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
}

export default DropDown;
