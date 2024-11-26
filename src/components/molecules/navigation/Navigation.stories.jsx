import Navigation from "./Navigation";

export default {
  title: "Molecules/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  argTypes: {
    items: {
      type: '"NavigationItems"',
      description: "Set items of navigation",
    },
  },
};

export const Playground = {
  args: {
    items: [
      { key: "home", title: "Home", link: "#home" },
      { key: "blogs", title: "Blogs", link: "#blogs" },
      { key: "about", title: "About", link: "#about" },
      { key: "contact", title: "Contact", link: "#contact" },
    ],
    style: undefined,
  },
};
