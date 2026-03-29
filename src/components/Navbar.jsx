const Navbar = () => {
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
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0", // 👈 maliit na navbar
        }}
      >
        {/* LOGO */}
        <h2
          style={{
            color: "#ec4899",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Kaitlyn
        </h2>

        {/* LINKS */}
        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;