import React, {useState, useEffect} from "react";
import {
  Card,
  FadeIn,
  AccentText,
  StackPill,
  SectionLabel,
} from "@/components/ui";

let DESC0 = `Developed and maintained full-stack web applications using React, Node.js, and SQL. 
Built scalable APIs and optimized database performance. 
Translated UI/UX designs (Figma/Adobe XD) into responsive components`;
let DESC1 = `Built and shipped 3 full-stack products from zero to production. 
Owned the frontend codebase and CI/CD pipeline.`;
let DESC2 = `Developed client-facing web applications and internal tooling.
 Collaborated closely with senior developers to deliver cutting-edge solutions. 
 Debugging and improving App performance and user experience.`;
let DESC3 = `Built and shipped 3 full-stack products from zero to production. 
Owned the frontend codebase and CI/CD pipeline.`;

export const Experience = () => {
  const EXPERIENCE = [
    {
      company: "Pill4rs Digital Company",
      role: "Software Engineer",
      period: "2024",
      desc: DESC0,
    },
    {
      company: "Startup Co.",
      role: "Full Stack Developer",
      period: "2020 – 2022",
      desc: DESC1,
    },
    {
      company: "SolarSoft",
      role: "Web & Mobile Developer (Intern)",
      period: "2021 – 2022",
      desc: DESC2,
    },
    {
      company: "SolarSoft",
      role: "Web & Mobile Developer (Intern)",
      period: "2021 – 2022",
      desc: DESC3,
    },
  ];
  return (
    <section
      id="experience"
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
        <SectionLabel number="01" title="Experience" />
        <div style={{ marginTop: "3rem" }}>
          {EXPERIENCE.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="exp-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.5rem",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "#e8e8e2",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {exp.role}
                    </span>
                    <span style={{ color: "#444", margin: "0 0.5rem" }}>@</span>
                    <span style={{ color: "#c8f542", fontSize: "0.88rem" }}>
                      {exp.company}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "#333",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  style={{
                    color: "#555",
                    fontSize: "0.83rem",
                    lineHeight: 1.8,
                  }}
                >
                  {exp.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}