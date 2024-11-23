import React, { useState } from "react";
import MainLayout from "../template/MainLayout";
import FormGroup from "./../molecules/FormGroup";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleButtonClick = () => alert(`Submitted: ${inputValue}`);

  return (
    <MainLayout>
      <FormGroup
        inputProps={{
          placeholder: "Enter text",
          value: inputValue,
          onChange: handleInputChange,
        }}
        buttonProps={{
          label: "Submit",
          onClick: handleButtonClick,
        }}
      />
    </MainLayout>
  );
};

export default HomePage;
