const baseStyles = {
  label: {
    fontSize: "14px",
    fontWeight: 600,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "12px",
  },
  field: {
    display: "flex",
    gap: "8px",
  },
};

const largeStyles = {
  label: {
    fontSize: "15px",
  },
};

const smallStyles = {
  label: {
    fontSize: "13px",
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
