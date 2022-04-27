import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { BreadcrumbProvider } from "./providers/BreadcrumbProvider";
import { Routes } from "./Routes";
import "./styles.css";

export default function App() {
  return (
    <BreadcrumbProvider>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </BreadcrumbProvider>
  );
}
