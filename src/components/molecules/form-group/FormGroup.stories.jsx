import FormGroup from "./FormGroup";

export default {
  title: "Molecules/FormGroup",
  component: FormGroup,
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
    style: { control: "object", type: "CSSProperties" },
  },
};

export const Playground = {
  args: {
    buttonProps: {
      label: "Submit",
    },
    inputProps: {
      placeholder: "Enter...",
    },
    label: "Label",
    size: "medium",
  },
};
