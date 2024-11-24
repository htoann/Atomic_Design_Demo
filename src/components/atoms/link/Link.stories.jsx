import React from "react";
import Link from "./Link";

export default {
  title: "Atoms/Link",
  component: Link,
  argTypes: {
    href: { control: "text" },
    children: { control: "text" },
    style: { control: "object" },
  },
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "#",
  children: "Default Link",
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  href: "#custom",
  children: "Custom Styled Link",
  style: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};
