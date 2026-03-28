const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px 0",
        marginTop: "60px",
        background: "rgba(26, 11, 20, 0.8)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
        }}
      >
        {/* NAME */}
        <h3 style={{ color: "#ec4899", marginBottom: "10px" }}>
          Kaitlyn Reigne M. Samala
        </h3>

        {/* CONTACT */}
        <p style={{ marginBottom: "10px", color: "#fbcfe8" }}>
          📧 kaitlynreigne@gmail.com
        </p>

        <p style={{ marginBottom: "20px", color: "#fbcfe8" }}>
          📱 +63 945 825 5758
        </p>

        {/* LINKS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.facebook.com/kaitreigne" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/kaitlyn-reigne-s-109721292/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        {/* COPYRIGHT */}
        <p
          style={{
            marginTop: "25px",
            fontSize: "14px",
            color: "#f9a8d4",
          }}
        >
          © {new Date().getFullYear()} Kaitlyn. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;