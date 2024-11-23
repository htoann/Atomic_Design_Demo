import React from "react";

const Button = ({ label, onClick }) => {
  const styles = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button style={styles} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
