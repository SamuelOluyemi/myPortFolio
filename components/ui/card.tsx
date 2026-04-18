import { useState } from "react";
import { StackPill } from "./stack-pill";

type CardProps = {
  name: string;
  tag: string;
  year: string;
  desc: string;
  stack: string[];
  link: string;
};

export function Card({ name, tag, year, desc, stack, link }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(link, "_blank")}
      style={{
        background: hovered ? "#0f0f0f" : "transparent",
        border: `1px solid ${hovered ? "#2c2c2c" : "#1c1c1c"}`,
        padding: "2rem",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s ease, background 0.3s ease",
      }}
    >
      {/* Animated left accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: hovered ? "100%" : "0%",
          background: "#c8f542",
          transition: "height 0.4s ease",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            color: "#c8f542",
            textTransform: "uppercase",
          }}
        >
          {tag}
        </span>
        <span
          style={{
            fontSize: "0.65rem",
            color: "#333",
            letterSpacing: "0.08em",
          }}
        >
          {year}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "1.5rem",
          fontWeight: 400,
          marginBottom: "0.75rem",
          color: "#e8e8e2",
        }}
      >
        {name}
      </h3>

      <p
        style={{
          color: "#555",
          fontSize: "0.82rem",
          lineHeight: 1.75,
          marginBottom: "1.5rem",
        }}
      >
        {desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {stack.map((s) => (
          <StackPill key={s} label={s} />
        ))}
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "0.7rem",
          color: hovered ? "#c8f542" : "#333",
          letterSpacing: "0.08em",
          transition: "color 0.3s",
        }}
      >
        View Project ↗
      </div>
    </div>
  );
}
