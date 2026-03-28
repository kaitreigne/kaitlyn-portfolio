import SwadeLogo from "../assets/SwadeLogo.png";

const Projects = () => {
  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div className="container">
        
        {/* 🔥 FEATURED PROJECT */}
        <h2 className="section-title">Featured Project</h2>

        <div
          className="card"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {/* IMAGE */}
          <div style={{ flex: "1", minWidth: "280px", textAlign: "center" }}>
            <img
              src={SwadeLogo}
              alt="SWADE"
              style={{
                width: "220px",
                filter: "drop-shadow(0 0 20px rgba(236,72,153,0.5))",
              }}
            />
          </div>

          {/* CONTENT */}
          <div style={{ flex: "2", minWidth: "300px" }}>
            <h3 style={{ marginBottom: "12px" }}>
              SWADE — Sidewalk Accessibility System
            </h3>

            <p className="section-text" style={{ marginBottom: "15px" }}>
              SWADE is a mobile and web-based system that evaluates sidewalk
              accessibility for persons with disabilities using machine
              learning. It analyzes sidewalks based on width, obstructions,
              damages, and ramp conditions.
            </p>

            <p className="section-text" style={{ marginBottom: "15px" }}>
              It uses <strong>YOLOv8</strong> and{" "}
              <strong>Vision Transformer (ViT)</strong> to provide accurate,
              scalable insights for urban planning and accessibility
              improvements.
            </p>

            <ul
              style={{
                marginBottom: "20px",
                paddingLeft: "20px",
                color: "#fbcfe8",
              }}
            >
              <li>✔️ Automated sidewalk assessment</li>
              <li>✔️ Obstacle detection (YOLOv8)</li>
              <li>✔️ Damage classification (ViT)</li>
              <li>✔️ Data-driven insights</li>
            </ul>

            <p style={{ marginBottom: "20px" }}>
              <strong>Tech:</strong> React, Machine Learning, YOLOv8, ViT
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/" className="btn">
                Live Demo
              </a>
              <a href="/" className="btn-outline">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* 📦 OTHER PROJECTS */}
        <h2 className="section-title">Other Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {/* PROJECT 1 */}
          <div className="card">
            <h3 style={{ marginBottom: "10px" }}>
              FloraLane – Flower Shopping App
            </h3>

            <p className="section-text">
              Developed an e-commerce mobile and web application using Flutter,
              HTML, CSS, and PHP with secure login, payment integration, and a
              responsive user interface.
            </p>

            <p style={{ marginTop: "15px" }}>
              <strong>Tech:</strong> Flutter, PHP, HTML, CSS
            </p>
          </div>

          {/* PROJECT 2 */}
          <div className="card">
            <h3 style={{ marginBottom: "10px" }}>
              Student Career Analysis System
            </h3>

            <p className="section-text">
              Applied data mining techniques such as decision trees to analyze
              student academic performance and generate insights for targeted
              career development recommendations.
            </p>

            <p style={{ marginTop: "15px" }}>
              <strong>Tech:</strong> Data Mining, Decision Trees
            </p>
          </div>

          {/* PROJECT 3 */}
          <div className="card">
            <h3 style={{ marginBottom: "10px" }}>
              PHILPOST Mail Inventory System
            </h3>

            <p className="section-text">
              Designed a digital mail tracking system with OCR-based data entry,
              improving efficiency and reducing errors through real-time
              tracking and automation.
            </p>

            <p style={{ marginTop: "15px" }}>
              <strong>Tech:</strong> OCR, Web System
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;