import React, {useState, useEffect} from "react";
import {
  Card,
  FadeIn,
  AccentText,
  StackPill,
  SectionLabel,
} from "@/components/ui";


export const Skills = () => {
    const SKILLS = {
      Languages: ["JavaScript", "TypeScript", "Python", "SQL", "Bash"],
      Frontend: ["React", "Next.js", "Vue", "HTML/CSS", "Tailwind"],
      Backend: ["Node.js", "Express", "FastAPI", "GraphQL", "REST"],
      Infrastructure: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux"],
    };
      
  return (
    <section
      id="skills"
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
        <SectionLabel number="03" title="Skills" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginTop: "3rem",
          }}
        >
          {Object.entries(SKILLS).map(([category, skills], i) => (
            <FadeIn key={category} delay={i * 0.1}>
              <div>
                <p
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.16em",
                    color: "#444",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  {category}
                </p>
                <div>
                  {skills.map((s) => (
                    <span key={s} className="skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}