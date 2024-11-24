import React from "react";

const Button = ({ label, onClick, disabled }) => {
  const styles = {
    padding: "10px 20px",
    backgroundColor: disabled ? "#6c757d" : "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.65 : 1,
  };

  return (
    <button style={styles} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
