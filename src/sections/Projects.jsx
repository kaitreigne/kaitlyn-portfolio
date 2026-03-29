import { useState } from "react";
import Swade1 from "../assets/swade1.png";
import Swade3 from "../assets/swade3.png";
import FloraLogo from "../assets/FloraLogo.png";
import PastaLogo from "../assets/PastaLogo.png"; // 👈 ADD THIS

const slides = [
  { type: "image", src: Swade1 },
  { type: "video", src: "/swade2.mp4" },
  { type: "image", src: Swade3 },
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      
      <div className="container">
        <h2 className="section-title">Featured Project</h2>
      </div>

      {/* SLIDES */}
      <div
        style={{
          width: "100%",
          height: "420px",
          position: "relative",
          overflow: "hidden",
          marginBottom: "60px",
        }}
      >
        {slides[index].type === "image" ? (
          <img
            src={slides[index].src}
            alt="SWADE"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <video
            src={slides[index].src}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}

        {/* LEFT */}
        <div
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "50%",
            height: "100%",
            zIndex: 2,
            cursor: "pointer",
          }}
        />

        {/* RIGHT */}
        <div
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "50%",
            height: "100%",
            zIndex: 2,
            cursor: "pointer",
          }}
        />

        {/* DOTS */}
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {slides.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === index ? "14px" : "8px",
                height: "8px",
                borderRadius: "10px",
                background:
                  i === index
                    ? "#ec4899"
                    : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>

      {/* SWADE */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 20px",
          marginBottom: "80px",
        }}
      >
        <h3 style={{ marginBottom: "15px", fontSize: "28px" }}>
          SWADE — Sidewalk Accessibility through Data-driven Evaluation using Machine Learning
        </h3>

        <p className="section-text" style={{ marginBottom: "15px", lineHeight: "1.8" }}>
          SWADE is a mobile and web-based system that evaluates sidewalk
          accessibility for persons with disabilities using machine learning.
        </p>

        <p className="section-text" style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          Uses <strong>YOLOv8</strong> and <strong>ViT</strong> for detection and classification.
        </p>

        <p style={{ marginBottom: "25px" }}>
          <strong>Tech:</strong> React, Machine Learning, YOLOv8, ViT
        </p>
      </div>

      {/* OTHER PROJECTS */}
      <div className="container">
        <h2 className="section-title">Other Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {/* FLORALANE */}
          <div className="card" style={{ textAlign: "center" }}>
            <img
              src={FloraLogo}
              alt="FloraLane Logo"
              style={{
                width: "110px",
                marginBottom: "15px",
                filter: "drop-shadow(0 0 12px rgba(236,72,153,0.7))",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.08)";
                e.target.style.filter =
                  "drop-shadow(0 0 18px rgba(236,72,153,0.9))";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.filter =
                  "drop-shadow(0 0 12px rgba(236,72,153,0.7))";
              }}
            />

            <h3>FloraLane – Flower Shopping App</h3>
            <p className="section-text">
              E-commerce app with secure login and payment.
            </p>
          </div>

          {/* 🍝 PASTAGO */}
          <div className="card" style={{ textAlign: "center" }}>
            <img
              src={PastaLogo}
              alt="PastaGo Logo"
              style={{
                width: "110px",
                marginBottom: "15px",
                filter: "drop-shadow(0 0 12px rgba(236,72,153,0.7))",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.08)";
                e.target.style.filter =
                  "drop-shadow(0 0 18px rgba(236,72,153,0.9))";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.filter =
                  "drop-shadow(0 0 12px rgba(236,72,153,0.7))";
              }}
            />

            <h3>PastaGo</h3>
            <p className="section-text">
              A modern mobile app for ordering food quickly and efficiently.
            </p>
          </div>

          {/* PROJECT 3 */}
          <div className="card">
            <h3>PHILPOST Mail Inventory System</h3>
            <p className="section-text">
              OCR-based mail tracking system with real-time automation.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;