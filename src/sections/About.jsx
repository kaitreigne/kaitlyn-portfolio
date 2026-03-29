import { useState } from "react";
import KaitlynImg from "../assets/Graduation.png";
import CCSImg from "../assets/StudentCouncil.jpg";
import TempestImg from "../assets/Creatives.jpg";

const About = () => {
  const [activeModal, setActiveModal] = useState(null);

  const cards = [
    {
      id: "education",
      image: KaitlynImg,
      title:
        "Bachelor of Science in Information Technology — Batch 2026",
      description:
        "Graduated with a strong foundation in software development, equipped with both technical knowledge and practical experience in building real-world applications.",
    },
    {
      id: "ccs",
      image: CCSImg,
      title: "Treasurer — Department Student Council (CCS)",
      description:
        "Served as a student council officer, developing leadership, communication, and organizational skills through active participation in student initiatives and academic activities.",
    },
    {
      id: "tempest",
      image: TempestImg,
      title: "Creatives Designer — Tempest Gaming Society",
      description:
        "Worked as a creatives designer, producing visual content and enhancing design skills while contributing to branding, engagement, and communication within the organization.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #2a0f1f 0%, #1a0b14 100%)",
      }}
    >
      <div className="container">

        {/* 🔥 SECTION TITLE (FIXED) */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "50px",
            background: "linear-gradient(90deg, #ff4fa3, #ff9ac9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "600",
          }}
        >
          About Me
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setActiveModal(card)}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "30px",
                textAlign: "center",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(255, 105, 180, 0.25)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* IMAGE */}
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: "220px",
                  height: "auto",
                  borderRadius: "12px",
                  marginBottom: "20px",
                }}
              />

              {/* TITLE */}
              <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                {card.title}
              </h3>

              {/* CLICK INDICATOR */}
              <p
                style={{
                  fontSize: "13px",
                  color: "#ff9ac9",
                  opacity: 0.8,
                  letterSpacing: "0.5px",
                }}
              >
                Click to view details →
              </p>
            </div>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        {activeModal && (
          <div
            onClick={() => setActiveModal(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#1a0b14",
                padding: "40px",
                borderRadius: "20px",
                maxWidth: "500px",
                width: "90%",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 50px rgba(255, 105, 180, 0.2)",
                animation: "fadeIn 0.3s ease",
              }}
            >
              <h2 style={{ marginBottom: "20px" }}>
                {activeModal.title}
              </h2>

              <p style={{ color: "#ccc", lineHeight: "1.6" }}>
                {activeModal.description}
              </p>

              <button
                onClick={() => setActiveModal(null)}
                style={{
                  marginTop: "25px",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#ff4fa3",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;