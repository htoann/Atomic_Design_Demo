import React from "react";
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: "1",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    margin: "auto",
  },
};

const MainLayout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
