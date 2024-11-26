import React from "react";
import FormGroup from "../molecules/form-group/FormGroup";
import MainLayout from "./../template/MainLayout";

const HomePage = () => {
  const handleSubscription = () => {
    alert("Thank you for subscribing!");
  };

  return (
    <MainLayout>
      <div style={styles.container}>
        <h1 style={styles.heading}>Discover Atomic Design</h1>
        <p style={styles.description}>
          Dive into the world of Atomic Design and explore blogs that demystify
          this innovative methodology.
        </p>
        <FormGroup
          size={"large"}
          inputProps={{
            placeholder: "Search blogs, guides, or case studies...",
            style: {
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            },
          }}
          buttonProps={{
            label: "Explore",
            onClick: handleSubscription,
          }}
        />
      </div>
    </MainLayout>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
