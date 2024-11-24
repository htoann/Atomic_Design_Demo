import React from "react";

const Input = ({ placeholder, value, onChange }) => {
  const styles = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "300px",
  };

  return (
    <input
      type="text"
      style={styles}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
