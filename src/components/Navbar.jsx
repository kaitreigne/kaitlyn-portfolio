import { useEffect, useState } from "react";

const sections = ["home", "skills", "about", "projects"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState("");
  const [logoHover, setLogoHover] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setMobile(isMobile);

      if (!isMobile) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 120;

          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLink = (id, label) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => {
        setActive(id);
        setMenuOpen(false);
      }}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered("")}
      style={{
        color:
          active === id || hovered === id
            ? "#ec4899"
            : "rgba(255,255,255,0.85)",
        textDecoration: "none",
        fontWeight: active === id ? "600" : "500",
        position: "relative",
        transition: "all .25s ease",
        paddingBottom: "4px",
      }}
    >
      {label}

      {(active === id) && (
        <span
          style={{
            position: "absolute",
            left: 0,
            bottom: -6,
            width: "100%",
            height: "2px",
            borderRadius: "20px",
            background: "#ec4899",
          }}
        />
      )}
    </a>
  );

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        background: "rgba(26, 11, 20, 0.7)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "12px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <h2
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          style={{
            color: "#ec4899",
            fontSize: "22px",
            fontWeight: "600",
            cursor: "pointer",
            margin: 0,
            transition: "all .25s ease",
            opacity: logoHover ? 0.8 : 1,
          }}
        >
          {"{ Kaitlyn }"}
        </h2>

        {/* Desktop */}
        {!mobile && (
          <div
            style={{
              display: "flex",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {navLink("home", "Home")}
            {navLink("skills", "Skills")}
            {navLink("about", "About")}
            {navLink("projects", "Projects")}
          </div>
        )}

        {/* Hamburger */}
        {mobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "#ec4899",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {mobile && menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px 40px",
            background: "rgba(26,11,20,.95)",
            borderTop: "1px solid rgba(255,255,255,.08)",
          }}
        >
          {navLink("home", "Home")}
          {navLink("skills", "Skills")}
          {navLink("about", "About")}
          {navLink("projects", "Projects")}
        </div>
      )}
    </nav>
  );
};

export default Navbar;