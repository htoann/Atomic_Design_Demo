import React from "react";
import Link from "../../atoms/link/Link";

export default function Navigation({ items, style }) {
  const styles = {
    nav: {
      display: "flex",
      gap: "24px",
    },
    navLink: {
      padding: "0 8px",
    },
  };

  return (
    <nav style={{ ...styles.nav, ...style }}>
      {items?.map((item) => (
        <Link key={item.key} href={item.link} style={styles.navLink}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
