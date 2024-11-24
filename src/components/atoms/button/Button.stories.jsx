import React from "react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  onClick: () => alert("Button clicked!"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  onClick: () => alert("Button clicked!"),
  disabled: true,
};
