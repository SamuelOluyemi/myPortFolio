import { useState } from "react";

export function StackPill({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        padding: "0.3rem 0.8rem",
        border: `1px solid ${hovered ? "#c8f542" : "#1e1e1e"}`,
        fontSize: "0.72rem",
        letterSpacing: "0.05em",
        color: hovered ? "#c8f542" : "#999",
        margin: "0.25rem",
        transition: "border-color 0.2s, color 0.2s",
        cursor: "default",
      }}
    >
      {label}
    </span>
  );
}
