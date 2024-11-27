const baseStyles = {
  padding: "0px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 1,
  border: "1px solid #ccc",
  color: "#000",
  height: "36px",
  borderRadius: "4px",
  backgroundColor: "#fff",
  cursor: "pointer",
  fontSize: "14px",
};

const primaryStyles = {
  border: "1px solid #007bff",
  color: "#fff",
  backgroundColor: "#007bff",
};

const disabledStyles = {
  opacity: 0.65,
  cursor: "not-allowed",
  backgroundColor: "#ccc",
  border: "1px solid #6c757d",
};

const disabledPrimaryStyles = {
  backgroundColor: "#6c757d",
};

const largeStyles = {
  height: "40px",
  padding: "0 24px",
  fontSize: "15px",
};

const smallStyles = {
  height: "32px",
  padding: "0 16px",
  fontSize: "13px",
};

export const getButtonStyles = (
  type = "default",
  size = "medium",
  disabled = false
) => {
  return {
    ...baseStyles,
    ...(type === "primary" && primaryStyles),
    ...(size === "large" && largeStyles),
    ...(size === "small" && smallStyles),
    ...(disabled && disabledStyles),
    ...(disabled && type === "primary" && disabledPrimaryStyles),
  };
};
