import React from "react";
import { Card, FadeIn, SectionLabel } from "@/components/ui";

const PROJECTS = [
  {
    name: "Horizon",
    tag: "Full Stack",
    year: "2024",
    desc: "A real-time collaboration platform built with Next.js, WebSockets, and PostgreSQL. Supports 500+ concurrent users.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    link: "/(tabs)/projects",
  },
  {
    name: "Luminary",
    tag: "Frontend",
    year: "2023",
    desc: "An interactive data visualization dashboard for financial analytics. 40% faster load time vs. previous solution.",
    stack: ["React", "D3.js", "TypeScript", "Tailwind"],
    link: "/(tabs)/projects",
  },
  {
    name: "Forge CLI",
    tag: "OSS Tool",
    year: "2023",
    desc: "Open-source developer CLI tool for scaffolding projects with opinionated defaults. 1.2k GitHub stars.",
    stack: ["Node.js", "Commander.js", "Inquirer"],
    link: "/(tabs)/projects",
  },
  {
    name: "Beacon API",
    tag: "Backend",
    year: "2022",
    desc: "RESTful API with OAuth2 auth, rate limiting, and auto-generated OpenAPI docs. Used by 3 production apps.",
    stack: ["Express", "MongoDB", "Jest", "Docker"],
    link: "/(tabs)/projects",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2.5rem",
        minHeight: "100vh",
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}>
        <FadeIn>
          <SectionLabel number="02" title="Projects" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
              gap: "1px",
              marginTop: "3rem",
              background: "#141414",
            }}
          >
            {PROJECTS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Card {...p} />
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
