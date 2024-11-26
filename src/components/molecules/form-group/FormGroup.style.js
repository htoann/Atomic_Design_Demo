const baseStyles = {
  label: {
    fontSize: "15px",
    fontWeight: 600,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "6px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  field: {
    display: "flex",
    gap: "8px",
  },
};

const largeStyles = {
  label: {
    fontSize: "16px",
  },
};

const smallStyles = {
  label: {
    fontSize: "14px",
  },
};

export const getFormGroupStyles = (size) => {
  return {
    ...baseStyles,
    label: {
      ...baseStyles.label,
      ...(size === "small" && smallStyles.label),
      ...(size === "large" && largeStyles.label),
    },
  };
};
