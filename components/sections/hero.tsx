import React, { useEffect, useState } from "react";
import { router } from "expo-router";

import {
  Card,
  FadeIn,
  AccentText,
  StackPill,
  SectionLabel,
} from "@/components/ui";


type HeroProps = {
  setHovering: (value: boolean) => void;
};

export function Hero({ setHovering }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Developer 👨🏾‍💻";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
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
      <div>
        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: "#444",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          <span className="accent">▸</span> Available for work
        </p>
        <h1
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            color: "#9b9b92",
          }}
        >
          Samuel
          <br />
          <span style={{ fontStyle: "italic", color: "#555" }}>Oluyemi</span>
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#555",
            marginBottom: "2.5rem",
            letterSpacing: "0.01em",
          }}
        >
          {typedText}
          <span className="blink accent">|</span>
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#555",
            maxWidth: "460px",
            lineHeight: 1.8,
            marginBottom: "3rem",
          }}
        >
          I build clean, fast, and thoughtful digital products. Focused on
          full-stack development, developer experience, and systems that scale.
          I enjoy solving problems and continuously improving my skills.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => router.push("/(tabs)/projects")}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
              background: "#c8f542",
              color: "#0a0a0a",
              border: "none",
              padding: "0.85rem 2rem",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontWeight: 500,
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
              background: "none",
              color: "#888",
              border: "1px solid #222",
              padding: "0.85rem 2rem",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#e8e8e2";
              e.currentTarget.style.borderColor = "#444";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#888";
              e.currentTarget.style.borderColor = "#222";
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
      {/* Decorative grid */}
      <div
        style={{
          position: "absolute",
          right: "5vw",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 6 }).map((_, row) => (
          <div
            key={row}
            style={{
              display: "flex",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {Array.from({ length: 6 }).map((_, col) => (
              <div
                key={col}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#c8f542",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}