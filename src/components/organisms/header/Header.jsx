import React from "react";
import Button from "../../atoms/button/Button";
import Navigation from "../../molecules/navigation/Navigation";

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 48px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
    borderBottom: "1px solid #007bff",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#007bff",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  nav: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  actionsWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
};

const navigationItems = [
  { key: "home", title: "Home", link: "#home" },
  { key: "blogs", title: "Blogs", link: "#blogs" },
  { key: "about", title: "About", link: "#about" },
  { key: "contact", title: "Contact", link: "#contact" },
];

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#007bff"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        Atomic
      </div>
      <Navigation items={navigationItems} style={styles.nav} />
      <div style={styles.actionsWrapper}>
        <Button label={"Log in"} type={"primary"} />
        <Button label={"Sign up"} />
      </div>
    </header>
  );
};

export default Header;
