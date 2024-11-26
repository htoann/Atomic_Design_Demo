import React from "react";

const Link = ({ href, children, style }) => {
  const defaultStyles = {
    color: "#000",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease, text-decoration 0.3s ease",
  };

  const hoverStyles = {
    textDecoration: "underline",
    color: "#007bff",
  };

  return (
    <a
      href={href}
      style={{ ...defaultStyles, ...style }}
      onMouseEnter={(e) => {
        Object.assign(e.target.style, hoverStyles);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.target.style, {
          textDecoration: "none",
          color: "unset",
        });
      }}
    >
      {children}
    </a>
  );
};

export default Link;
