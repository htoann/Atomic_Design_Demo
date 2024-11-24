import React from "react";
import Button from "../atoms/button/Button";
import Input from "./../atoms/input/Input";

const FormGroup = ({ inputProps, buttonProps }) => {
  const styles = {
    display: "flex",
    gap: "10px",
    margin: "auto",
    justifyContent: "center",
  };

  return (
    <div style={styles}>
      <Input {...inputProps} />
      <Button {...buttonProps} />
    </div>
  );
};

export default FormGroup;
