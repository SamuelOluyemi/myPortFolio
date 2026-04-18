import React from "react";
import { router} from "expo-router";
// import { NAV_LINKS } from "./index";


export function DesktopNav({ activeSection, onNavClick, onHover, links }) {
  return (
    
    <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
      {links.map((link) => (
        <button
          key={link}
          onClick={() => onNavClick(link.toLowerCase())}
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
          className={`nav-link ${activeSection === link.toLowerCase() ? "active" : ""}`}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            color: activeSection === link.toLowerCase() ? "#e8e8e2" : "#555",
            textTransform: "uppercase",
            transition: "color 0.2s",
          }}
        >
          {link}
        </button>
      ))}
      <button
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        onClick={() => window.open("/resume.pdf", "_blank")}
        style={{
          background: "none",
          border: "1px solid #2a2a2a",
          padding: "0.45rem 1.1rem",
          cursor: "pointer",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          color: "#c8f542",
          textTransform: "uppercase",
        }}
      >
        Resume ↗
      </button>
    </div>
  );
}
