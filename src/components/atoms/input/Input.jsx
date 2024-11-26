import React from "react";
import { getInputStyles } from "./Input.style";

const Input = ({ placeholder, value, onChange, style, size, label }) => {
  const styles = getInputStyles(size);

  return (
    <input
      type="text"
      style={{ ...styles, ...style }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
