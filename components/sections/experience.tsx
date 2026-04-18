import React, {useState, useEffect} from "react";
import {
  Card,
  FadeIn,
  AccentText,
  StackPill,
  SectionLabel,
} from "@/components/ui";


export const Experience = () => {
  const EXPERIENCE = [
    {
      company: "Tech Company",
      role: "Senior Software Engineer",
      period: "2022 – Present",
      desc: "Led development of scalable microservices handling 10M+ daily requests. Drove architecture decisions across a team of 8 engineers.",
    },
    {
      company: "Startup Co.",
      role: "Full Stack Developer",
      period: "2020 – 2022",
      desc: "Built and shipped 3 full-stack products from zero to production. Owned the frontend codebase and CI/CD pipeline.",
    },
    {
      company: "Agency Name",
      role: "Junior Developer",
      period: "2018 – 2020",
      desc: "Developed client-facing web applications and internal tooling. Collaborated closely with designers to deliver pixel-perfect UIs.",
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