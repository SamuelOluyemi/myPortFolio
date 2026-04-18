import { NAV_LINKS } from "./index";

export function MobileNav({ menuOpen, onNavClick, links }) {
  if (!menuOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "60px",
        left: 0,
        right: 0,
        zIndex: 99,
        background: "#0d0d0d",
        borderBottom: "1px solid #1c1c1c",
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {links.map((link) => (
        <button
          key={link}
          onClick={() => onNavClick(link.toLowerCase())}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8rem",
            color: "#aaa",
            textAlign: "left",
            letterSpacing: "0.1em",
          }}
        >
          {link}
        </button>
      ))}
    </div>
  );
}
