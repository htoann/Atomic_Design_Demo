import React from "react";
import Link from "../../atoms/link/Link";

const Footer = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#343a40",
      color: "#fff",
      marginTop: "20px",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    },
    links: {
      display: "flex",
      gap: "15px",
      margin: "10px 0",
    },
    text: {
      fontSize: "14px",
      marginTop: "10px",
      color: "#6c757d",
    },
  };

  return (
    <footer style={styles.container}>
      <div style={styles.links}>
        <Link href="#privacy" style={{ color: "#adb5bd" }}>
          Privacy Policy
        </Link>
        <Link href="#terms" style={{ color: "#adb5bd" }}>
          Terms of Service
        </Link>
        <Link href="#contact" style={{ color: "#adb5bd" }}>
          Contact Us
        </Link>
      </div>
      <p style={styles.text}>
        © 2024 Atomic Design Demo by ACS DEV 5. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
