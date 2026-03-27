import SwadeLogo from "../assets/SwadeLogo.png";

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "90px 0 110px",
      }}
    >
      <div className="container">
        <h2 className="section-title">Featured Project</h2>

        <div className="card" style={{ maxWidth: "950px", margin: "0 auto" }}>
          
          {/* LOGO */}
          <img
            src={SwadeLogo}
            alt="SWADE Logo"
            style={{
              width: "200px",
              display: "block",
              margin: "0 auto 20px",
              filter: "drop-shadow(0 0 20px #ec4899)",
            }}
          />

          <p
            style={{
              color: "#f9a8d4",
              fontWeight: "600",
              marginBottom: "10px",
              letterSpacing: "0.5px",
              textAlign: "center",
            }}
          >
            MOBILE AND WEB-BASED SYSTEM
          </p>

          <h3
            style={{
              fontSize: "1.8rem",
              marginBottom: "18px",
              textAlign: "center",
            }}
          >
            SWADE — Sidewalk Accessibility through Data-driven Evaluation
          </h3>

          <p className="section-text" style={{ marginBottom: "16px" }}>
            SWADE is a mobile and web-based system designed to assess sidewalk
            accessibility for persons with disabilities. It addresses the
            challenge of inaccessible infrastructure by using data-driven
            evaluation instead of relying only on manual physical inspections.
          </p>

          <p className="section-text" style={{ marginBottom: "16px" }}>
            The system uses <strong>YOLOv8</strong> and{" "}
            <strong>Vision Transformer (ViT)</strong> machine learning models to
            analyze sidewalks based on four criteria: width, obstructions,
            damages, and ramp conditions. This helps provide accurate,
            scalable, and actionable insights for urban planning and
            accessibility improvement.
          </p>

          <p className="section-text" style={{ marginBottom: "16px" }}>
            SWADE achieved strong model performance, including{" "}
            <strong>94.1%</strong> accuracy for width compliance,{" "}
            <strong>94.4%</strong> for ramp detection, and a{" "}
            <strong>4.7/5</strong> overall user satisfaction rating based on
            ISO/IEC 25010 evaluation from urban planners, IT professionals, and
            pedestrians.
          </p>

          <div style={{ marginTop: "28px", marginBottom: "22px" }}>
            <h4 style={{ marginBottom: "14px", color: "#ec4899" }}>
              Key Highlights
            </h4>
            <ul
              style={{
                paddingLeft: "20px",
                color: "#cbd5e1",
                lineHeight: "1.9",
              }}
            >
              <li>Automated sidewalk accessibility assessment</li>
              <li>Obstacle detection using YOLOv8</li>
              <li>Damage classification using Vision Transformer</li>
              <li>Support for accessibility-focused urban planning</li>
              <li>Scalable evaluation for real-world environments</li>
            </ul>
          </div>

          <p className="section-text" style={{ marginBottom: "18px" }}>
            <strong>Tech Stack:</strong> React.js, Mobile and Web Development,
            Machine Learning, YOLOv8, Vision Transformer (ViT), Image Processing
          </p>

          <p className="section-text">
            <strong>Role:</strong> System Developer / Research Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;