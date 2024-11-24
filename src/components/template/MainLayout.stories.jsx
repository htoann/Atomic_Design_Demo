import React from "react";
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";
import MainLayout from "./MainLayout";

export default {
  title: "Templates/MainLayout",
  component: MainLayout,
};

const Template = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: <Header />,
  footer: <Footer />,
  children: <p style={{ padding: "20px" }}>This is the main content area.</p>,
};
