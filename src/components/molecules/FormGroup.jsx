import React from "react";
import Button from "./../atoms/Button";
import Input from "./../atoms/Input";

const FormGroup = ({ inputProps, buttonProps }) => {
  const styles = {
    display: "flex",
    gap: "10px",
    maxWidth: 500,
    margin: "auto",
  };

  return (
    <div style={styles}>
      <Input {...inputProps} />
      <Button {...buttonProps} />
    </div>
  );
};

export default FormGroup;
