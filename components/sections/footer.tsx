import React from "react";

import {
  Card,
  FadeIn,
  AccentText,
  StackPill,
  SectionLabel,
} from "@/components/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid #141414",
        padding: "2rem 2.5rem",
        paddingBottom: "6rem", // ← pushes content above the tab bar
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontSize: "0.65rem",
          color: "#9a9494",
          letterSpacing: "0.08em",
        }}
      >
        © {currentYear} Samuel Oluyemi
      </span>
      <span
        style={{
          fontSize: "0.65rem",
          color: "#9a9494",
          letterSpacing: "0.08em",
        }}
      >
        Designed & built by Samuel
      </span>
    </footer>
  );
}

{/* <footer style={styles.footer}>
      <p style={styles.footerText}>
        Made with ❤️ by{" "}
        <a
          href="#"
          style={styles.footerLink}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/samueloluyemi", "_blank");
          }}
        >
          Samuel Oluyemi
        </a>
      </p>
    </footer> */}