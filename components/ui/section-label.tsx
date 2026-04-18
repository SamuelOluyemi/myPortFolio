import React from "react";


export function SectionLabel({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <p
      style={{
        fontSize: 11,
        letterSpacing: 3,
        color: "#444",
        textTransform: "uppercase",
      }}
    >
      {number} — {title}
    </p>
  );
}
