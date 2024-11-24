import React from "react";
import FormGroup from "../molecules/FormGroup";
import MainLayout from "./../template/MainLayout";

const HomePage = () => {
  const handleSubscription = () => {
    alert("Thank you for subscribing!");
  };

  return (
    <MainLayout>
      <div style={styles.container}>
        <h1 style={styles.heading}>Subscribe to our Newsletter</h1>
        <p style={styles.description}>
          Stay updated with the latest news, tutorials, and resources delivered
          straight to your inbox.
        </p>
        <div style={styles.formGroupContainer}>
          <FormGroup
            inputProps={{
              placeholder: "Enter your email address",
            }}
            buttonProps={{
              label: "Subscribe",
              onClick: handleSubscription,
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1rem",
    color: "#6c757d",
    marginBottom: "20px",
  },
  formGroupContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
};

export default HomePage;
