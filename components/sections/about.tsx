import React from "react";
import { FadeIn, AccentText, SectionLabel } from "@/components/ui";

export const About = () => {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2.5rem",
        maxWidth: "900px",
        minHeight: "100vh",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <FadeIn>
        <SectionLabel number="01" title="About" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginTop: "3rem",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                color: "#9b9b92",
              }}
            >
              Building things that
              <br />
              <AccentText italic>matter.</AccentText>
            </h2>
          </div>
          <div style={{ color: "#666", fontSize: "0.88rem", lineHeight: 2 }}>
            <p style={{ marginBottom: "1.25rem" }}>
              I'm Samuel — a software developer with a passion for clean
              architecture, thoughtful APIs, and interfaces that feel inevitable
              rather than designed.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              With experience across the full stack, I gravitate toward work
              that sits at the intersection of engineering rigor and product
              intuition.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              When I'm not coding, I'm reading about distributed systems,
              contributing to open source, or exploring new ways to make
              developer tooling less painful.
            </p>
            <p>
              I'm the type of developer who will dig into documentation,
              experiment with solutions, and learn quickly to deliver working
              features.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
