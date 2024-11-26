import React from "react";
import Link from "../../atoms/link/Link";
import FormGroup from "../../molecules/form-group/FormGroup";

const styles = {
  container: {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    padding: "28px 32px 20px",
    backgroundColor: "#343a40",
    color: "#fff",
    marginTop: "20px",
    height: "140px",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  text: {
    fontSize: "14px",
    marginTop: "10px",
    color: "#6c757d",
  },
};

const Footer = () => {
  return (
    <footer style={styles.container}>
      <div style={styles.leftPart}>
        <div style={styles.links}>
          <Link href="#privacy" style={{ color: "unset" }}>
            Privacy Policy
          </Link>
          <Link href="#terms" style={{ color: "unset" }}>
            Terms of Service
          </Link>
          <Link href="#contact" style={{ color: "unset" }}>
            Contact Us
          </Link>
        </div>
        <p style={styles.text}>
          © 2024 Atomic Design Demo by ACS DEV 5. All rights reserved.
        </p>
      </div>
      <FormGroup
        size={"small"}
        label={"Subscribe to our Newsletters"}
        buttonProps={{ label: "Subscribe" }}
        inputProps={{ placeholder: "Enter your email" }}
      />
    </footer>
  );
};

export default Footer;
