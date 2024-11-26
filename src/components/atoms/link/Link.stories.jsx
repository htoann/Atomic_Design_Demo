import Link from "./Link";

export default {
  title: "Atoms/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    children: { control: "text" },
    style: { control: "object", type: "CSSProperties" },
  },
};

export const Playground = {
  args: {
    href: "#",
    children: "Default Link",
  },
};
