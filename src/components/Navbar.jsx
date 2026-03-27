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
          padding: "18px 0",
        }}
      >
        <h2 style={{ color: "#ec4899" }}>Kaitlyn</h2>

        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;