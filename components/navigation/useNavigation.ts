import { useState, useEffect } from "react";
import { router } from "expo-router";

// Sections that live on the home tab
const HOME_SECTIONS = ['hero', 'about',  'contact'];

// Sections that live on the portfolio tab
const PORTFOLIO_SECTIONS = ["projects", "experience", "skills"];

export function useNavigation(mode: 'home' | 'portfolio' = 'home') {
  const [activeSection, setActiveSection] = useState("mode === 'home' ? 'hero' : 'experience'"); // Default to top section of each tab
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Track which section is in view
  useEffect(() => {
    const sections = mode === 'home' ? HOME_SECTIONS : PORTFOLIO_SECTIONS;
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    
    const onResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    // Special routes
    if (id === "portfolio") {
      router.push("/(tabs)/portfolio");
      return;
    }
    if (id === "home") {
      router.push("/(tabs)");
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (PORTFOLIO_SECTIONS.includes(id)) {
      router.push(`../../app/(tabs)/portfolio?section=${id}`);
    } else if (HOME_SECTIONS.includes(id)) {
      router.push(`/(tabs)`);
    }
  };;

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return {
    activeSection,
    menuOpen,
    hovering,
    setHovering,
    scrollToSection,
    toggleMenu,
  };
}
