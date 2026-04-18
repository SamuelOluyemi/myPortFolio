import { DesktopNav, MobileNav, useNavigation, HOME_NAV_LINKS, PORTFOLIO_NAV_LINKS } from "@/components/navigation";

type NavigationProps = {
  mode: "home" | "portfolio";
};

export function Navigation({ mode = 'home' }: NavigationProps ) {
  const {
    activeSection,
    menuOpen,
    // hovering,
    setHovering,
    scrollToSection,
    toggleMenu,
  } = useNavigation();

  const links = mode === 'home' ? HOME_NAV_LINKS : PORTFOLIO_NAV_LINKS;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1.25rem 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #141414",
        }}
      >
        <button
          onClick={() => scrollToSection(mode === 'home' ? 'hero' : 'experience')}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#e8e8e2",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.05em",
          }}
        >
          <span style={{ color: "#c8f542" }}>S</span>O
        </button>

        <div className="desktop-nav">
          <DesktopNav
            activeSection={activeSection}
            onNavClick={scrollToSection}
            onHover={setHovering}
            links={links}
          />
        </div>

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#e8e8e2",
            fontSize: "1.2rem",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <MobileNav menuOpen={menuOpen} onNavClick={scrollToSection} links={links} />
    </>
  );
}
