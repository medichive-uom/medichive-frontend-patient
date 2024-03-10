import "./App.css";
import { Layout } from "antd";
import Headerbar from "./components/layout/header-bar";
import FooterBar from "./components/layout/footer-bar";
import ContentPage from "./components/layout/content-page";
import Sidebar from "./components/layout/side-bar";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
      <Sidebar />
      <Layout>
        <Headerbar />
        <ContentPage />
        <FooterBar />
      </Layout>
    </Layout>
    </Router>
  );
}

export default App;
