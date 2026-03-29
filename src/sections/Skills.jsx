import { motion } from "framer-motion";
import JS from "../assets/Javascript.png";
import Dart from "../assets/Dart.png";
import PHP from "../assets/PHP.png";
import Csharp from "../assets/Csharp.png";

import Arduino from "../assets/Arduino.png";
import RJ from "../assets/Rj.png";
import Cyber from "../assets/Cyber.png";

const Skills = () => {
  const devSkills = [
    {
      title: "JavaScript",
      icon: JS,
      desc: "Used for building interactive and dynamic web applications.",
      color: "#facc15",
    },
    {
      title: "Dart",
      icon: Dart,
      desc: "Used with Flutter to develop fast and responsive mobile applications.",
      color: "#38bdf8",
    },
    {
      title: "C#",
      icon: Csharp,
      desc: "Used for developing desktop applications and backend systems.",
      color: "#22c55e",
    },
    {
      title: "PHP",
      icon: PHP,
      desc: "Used for server-side development and database-driven web applications.",
      color: "#ef4444",
    },
  ];

  const techSkills = [
    {
      title: "Embedded Systems",
      desc: "Experience with Arduino and microcontroller-based projects.",
      icon: Arduino,
      color: "#22c55e",
    },
    {
      title: "Networking",
      desc: "Knowledge in RJ45 cabling and network setup.",
      icon: RJ,
      color: "#ef4444",
    },
    {
      title: "Cybersecurity",
      desc: "Understanding of basic cybersecurity principles.",
      icon: Cyber,
      color: "#8b5cf6",
    },
  ];

  return (
    <section id="skills" style={{ padding: "100px 0" }}>
      <div className="container">
        <h2 className="section-title">Skills</h2>

        {/* DEVELOPMENT */}
        <h3
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginTop: "40px",
            marginBottom: "30px",
            fontWeight: "700",
          }}
        >
          Core Development Skills
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {devSkills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{
                width: "250px",
                padding: "25px",
                borderRadius: "20px",
                textAlign: "center",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* 🔥 IMAGE WITH GLOW ONLY */}
              <img
                src={skill.icon}
                alt={skill.title}
                style={{
                  width: "55px",
                  marginBottom: "15px",
                  filter: `drop-shadow(0 0 15px ${skill.color})`,
                }}
              />

              <h3>{skill.title}</h3>
              <p style={{ fontSize: "14px", color: "#fbcfe8" }}>
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TECHNICAL */}
        <h3
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginTop: "60px",
            marginBottom: "30px",
            fontWeight: "700",
          }}
        >
          Technical Expertise
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {techSkills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{
                width: "250px",
                padding: "25px",
                borderRadius: "20px",
                textAlign: "center",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* 🔥 IMAGE WITH GLOW ONLY */}
              <img
                src={skill.icon}
                alt={skill.title}
                style={{
                  width: "55px",
                  marginBottom: "15px",
                  filter: `drop-shadow(0 0 15px ${skill.color})`,
                }}
              />

              <h3>{skill.title}</h3>
              <p style={{ fontSize: "14px", color: "#fbcfe8" }}>
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;