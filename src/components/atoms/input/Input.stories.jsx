import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: "select",
      type: '"small" | "medium" | "large"',
      description: "Set button size",
      table: {
        defaultValue: { summary: '"medium"' },
      },
    },
  },
};

export const Playground = {
  args: {
    onChange: (e) => {},
    placeholder: "Enter...",
    size: "medium",
    value: "",
  },
};
