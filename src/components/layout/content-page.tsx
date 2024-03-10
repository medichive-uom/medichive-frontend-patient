import React from "react";
import { Layout, theme } from "antd";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home/home";
import BookAppointment from "../../pages/book-appointment/book-appointment";
import ViewLabReports from "../../pages/view-labreports/view-labreports";
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
