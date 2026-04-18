import React, { useEffect, useRef, useState } from "react";

import { Card, FadeIn, AccentText, StackPill, SectionLabel } from '@/components/ui';

import {Projects, Experience, Skills, Footer } from "@/components/sections";



import { Navigation } from "../navigation";

export default function Portfolio() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);


  // Cursor
  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
            style={{
              fontFamily: "'DM Mono', monospace",
              background: "#0a0a0a",
              color: "#e8e8e2",
              minHeight: "100vh",
              overflowX: "hidden",
            }}
          >
            <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap');
            * { box-sizing: border-box; margin: 0; padding: 0; }
            html { scroll-behavior: smooth; }
            ::-webkit-scrollbar { width: 4px; }
            ::-webkit-scrollbar-track { background: #0a0a0a; }
            ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }
            .cursor-dot {
              position: fixed; width: 8px; height: 8px; background: #c8f542; border-radius: 50%;
              pointer-events: none; z-index: 9999; transition: transform 0.15s ease;
              transform: translate(-50%, -50%);
            }
            .cursor-dot.hovering { transform: translate(-50%, -50%) scale(2.5); background: #c8f542; opacity: 0.6; }
            .cursor-ring {
              position: fixed; width: 36px; height: 36px; border: 1px solid rgba(200,245,66,0.35);
              border-radius: 50%; pointer-events: none; z-index: 9998;
              transform: translate(-50%, -50%);
              transition: all 0.08s linear;
            }
            .nav-link { position: relative; }
            .nav-link::after {
              content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px;
              background: #c8f542; transition: width 0.3s ease;
            }
            .nav-link:hover::after, .nav-link.active::after { width: 100%; }
            .project-card {
              border: 1px solid #1c1c1c; padding: 2rem; cursor: pointer;
              transition: border-color 0.3s ease, background 0.3s ease;
              position: relative; overflow: hidden;
            }
            .project-card::before {
              content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 0;
              background: #c8f542; transition: height 0.4s ease;
            }
            .project-card:hover { border-color: #2c2c2c; background: #0f0f0f; }
            .project-card:hover::before { height: 100%; }
            .skill-pill {
              display: inline-block; padding: 0.3rem 0.8rem; border: 1px solid #1e1e1e;
              font-size: 0.72rem; letter-spacing: 0.05em; color: #999; margin: 0.25rem;
              transition: border-color 0.2s, color 0.2s;
            }
            .skill-pill:hover { border-color: #c8f542; color: #c8f542; }
            .exp-item { border-left: 1px solid #1c1c1c; padding-left: 1.5rem; padding-bottom: 2.5rem; position: relative; }
            .exp-item::before {
              content: ''; position: absolute; left: -4px; top: 4px; width: 7px; height: 7px;
              border-radius: 50%; background: #0a0a0a; border: 1px solid #444;
              transition: border-color 0.3s, background 0.3s;
            }
            .exp-item:hover::before { border-color: #c8f542; background: #c8f542; }
            .contact-link {
              display: flex; align-items: center; gap: 0.75rem; padding: 1rem 0;
              border-bottom: 1px solid #141414; color: #888; text-decoration: none;
              font-size: 0.85rem; letter-spacing: 0.04em; transition: color 0.2s;
            }
            .contact-link:hover { color: #c8f542; }
            .blink { animation: blink 1s step-end infinite; }
            @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
            .noise {
              position: fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:1;
              opacity: 0.018;
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
            }
            .section-label { font-size: 0.65rem; letter-spacing: 0.18em; color: #444; text-transform: uppercase; margin-bottom: 0.5rem; }
            .accent { color: #c8f542; }
            @media (max-width: 640px) {
              .desktop-nav { display: none !important; }
              .mobile-menu-btn { display: flex !important; }
            }
            @media (min-width: 641px) {
              .mobile-menu-btn { display: none !important; }
              .mobile-nav { display: none !important; }
            }
          `}</style>
    
            {/* Grain overlay */}
            <div className="noise" />
    
            {/* Custom cursor */}
            <div
              className={`cursor-dot ${hovering ? "hovering" : ""}`}
              style={{ left: cursorPos.x, top: cursorPos.y }}
            />
            <div
              className="cursor-ring"
              style={{ left: cursorPos.x, top: cursorPos.y }}
            />
            
      {/* NAV */}
      {/* Desktop & mobile nav */}
      <Navigation mode="portfolio" />

      {/* EXPERIENCE */}
      <Experience />

      {/* PROJECTS */}
      <Projects setHovering={setHovering} />

      {/* SKILLS */}
      <Skills />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

