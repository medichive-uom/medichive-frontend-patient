import React from "react";
import { Layout, theme } from "antd";
import AppRouter from "../../routes/AppRouter";

const { Content } = Layout;

const ContentPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content style={{ margin: "24px 16px 0", minHeight: "1vh" }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
       <AppRouter />
      </div>
    </Content>
  );
};

export default ContentPage;
