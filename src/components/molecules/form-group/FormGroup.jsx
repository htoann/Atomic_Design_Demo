import React, { useMemo } from "react";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import { getFormGroupStyles } from "./FormGroup.style";

const FormGroup = ({ inputProps, buttonProps, label, size }) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const styles = getFormGroupStyles(size);

  return (
    <div style={styles.wrapper}>
      {label && (
        <label htmlFor={id} style={styles.label}>
          {label}
        </label>
      )}
      <div style={styles.field}>
        <Input size={size} {...inputProps} />
        <Button size={size} type={"primary"} {...buttonProps} />
      </div>
    </div>
  );
};

export default FormGroup;
