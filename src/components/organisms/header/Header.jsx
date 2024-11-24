import React from "react";
import Link from "../../atoms/link/Link";

const Header = () => {
  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    nav: {
      display: "flex",
      gap: "15px",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Atomic Design Demo</div>
      <nav style={styles.nav}>
        <Link href="#home" style={{ color: "white" }}>
          Home
        </Link>
        <Link href="#about" style={{ color: "white" }}>
          About
        </Link>
        <Link href="#contact" style={{ color: "white" }}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
