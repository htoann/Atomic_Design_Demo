import React from "react";
import Link from "../../atoms/link/Link";

const styles = {
  nav: {
    display: "flex",
    gap: "24px",
  },
  navLink: {
    padding: "0 8px",
  },
};

export default function Navigation({ items, style }) {
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
