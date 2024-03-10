import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;
const FooterBar: React.FC = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      ©{new Date().getFullYear()} Created by Medichive Team
    </Footer>
  );
};

export default FooterBar;
