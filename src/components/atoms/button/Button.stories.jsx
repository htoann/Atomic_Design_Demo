import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      description: "Disabled state of button",
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      description: "Set button label",
    },
    onClick: {
      description: "Set onClick event handler",
      type: "function",
    },
    size: {
      options: ["small", "medium", "large"],
      control: "select",
      type: '"small" | "medium" | "large"',
      description: "Set button size",
      table: {
        defaultValue: { summary: '"medium"' },
      },
    },
    style: {
      type: "CSSProperties",
    },
    type: {
      type: '"default" | "primary"',
      description: "Set button type",
      control: "select",
      options: ["default", "primary"],
      defaultValue: '"default"',
      table: {
        defaultValue: { summary: '"default"' },
      },
    },
  },
};

export const Playground = {
  args: {
    disabled: false,
    label: "Button",
    onClick: () => {},
    size: "medium",
    style: undefined,
    type: "default",
  },
};
