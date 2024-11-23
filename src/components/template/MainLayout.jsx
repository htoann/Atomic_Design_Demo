import React from "react";
import Footer from "../organisms/Footer";
import Header from "./../organisms/Header";

const MainLayout = ({ children }) => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    main: {
      flex: "1",
      padding: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
