import React, {useState, useEffect} from "react";
import {
  FadeIn,
  AccentText,
  SectionLabel,
} from "@/components/ui";


export const Contact = () => {
  const [hovering, setHovering] = useState(false);
  
  return (
    <section
      id="contact"
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
        <SectionLabel number="02" title="Contact" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginTop: "3rem",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: "1rem",
                color: "#9b9b92",
              }}
            >
              Let's build
              <br />
              <AccentText italic>something.</AccentText>
            </h2>
            <p
              style={{
                color: "#555",
                fontSize: "0.85rem",
                lineHeight: 1.8,
              }}
            >
              Open to full-time roles, contract work, and interesting
              collaborations. Always happy to chat about code, products, or
              ideas.
            </p>
          </div>
          <div>
            {[
              {
                label: "Email",
                value: "oluyemisamuel50@gmail.com",
                href: "oluyemisamuel50@gmail.com",
              },
              {
                label: "GitHub",
                value: "github.com/samueloluyemi",
                href: "https://github.com/samueloluyemi",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/samuel-oluyemi-6b8547184",
                href: "https://www.linkedin.com/in/samuel-oluyemi-6b8547184",
              },
              // { label: "Twitter / X", value: "@hoffentliche", href: "https://twitter.com/hoffentliche" },
            ].map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                className="contact-link"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <span
                  style={{
                    color: "#2a2a2a",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    minWidth: "70px",
                  }}
                >
                  {label}
                </span>
                <span>{value}</span>
                <span style={{ marginLeft: "auto" }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}