import React from "react";

const Heading = ({ level, children }) => {
  const Tag = `h${level}`;
  const styles = {
    margin: "0 0 10px",
    fontWeight: "bold",
  };

  return <Tag style={styles}>{children}</Tag>;
};

export default Heading;
