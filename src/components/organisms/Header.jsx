import React from "react";
import Heading from "./../atoms/Heading";

const Header = () => {
  const styles = {
    padding: "10px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
  };

  return (
    <header style={styles}>
      <Heading level={1}>Atomic Design Example</Heading>
    </header>
  );
};

export default Header;
