import React from "react";
import Button from "./Button";
import { storyWrapper } from "./Button.style";

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      default: "default",
      options: ["default", "primary"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => (
  <div style={storyWrapper}>
    {args.options.map((option) => {
      return (
        <Button
          key={option}
          {...args.baseProps}
          {...{ [args.key]: option }}
          label={option.charAt(0).toUpperCase() + option.slice(1)}
        />
      );
    })}
  </div>
);

export const Basic = {
  args: {
    type: "default",
    disabled: false,
    label: "Button",
    size: "medium",
  },
};

export const Type = Template.bind({});
Type.args = {
  key: "type",
  options: ["default", "primary"],
  baseProps: {},
};

export const Size = Template.bind({});
Size.args = {
  key: "size",
  options: ["small", "medium", "large"],
  baseProps: {
    type: "primary",
    disabled: false,
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  key: "type",
  options: ["default", "primary"],
  baseProps: {
    size: "medium",
    disabled: true,
  },
};

// export const Primary = Template.bind({});
// Primary.args = {
//   type: "primary",
//   label: "Button",
//   size: "medium",
//   disabled: false,
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   type: "primary",
//   label: "Button",
//   size: "medium",
//   disabled: true,
// };
