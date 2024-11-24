import React from "react";

const Footer = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "10px",
      backgroundColor: "#f8f9fa",
      borderTop: "1px solid #ddd",
      marginTop: "20px",
    },
    text: {
      color: "#6c757d",
      fontSize: "14px",
    },
  };

  return (
    <footer style={styles.container}>
      <p style={styles.text}>
        © 2024 Atomic Design Demo by ACS DEV 5. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
