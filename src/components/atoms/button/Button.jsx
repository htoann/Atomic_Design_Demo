import React from "react";
import { getButtonStyles } from "./Button.style";

const Button = ({ label, onClick, disabled, style, type, size }) => {
  const styles = getButtonStyles(type, size, disabled);

  return (
    <button
      style={{ ...styles, ...style }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
