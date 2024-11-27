const baseStyles = {
  padding: "0 10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  width: "300px",
  height: "36px",
  fontSize: "14px",
  boxSizing: "border-box",
};

const largeStyles = {
  fontSize: "15px",
  padding: "0 12px",
  height: "40px",
};

const smallStyles = {
  fontSize: "13px",
  padding: "0 8px",
  height: "32px",
};

export const getInputStyles = (size) => {
  return {
    ...baseStyles,
    ...(size === "small" && smallStyles),
    ...(size === "large" && largeStyles),
  };
};
