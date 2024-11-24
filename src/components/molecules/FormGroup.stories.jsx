import React, { useState } from "react";
import FormGroup from "./FormGroup";

export default {
  title: "Molecules/FormGroup",
  component: FormGroup,
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <FormGroup
      inputProps={{
        placeholder: "Enter...",
        value: value,
        onChange: (e) => setValue(e.target.value),
      }}
      buttonProps={{
        label: "Submit",
        onClick: () => alert(`Submitted: ${value}`),
      }}
    />
  );
};
