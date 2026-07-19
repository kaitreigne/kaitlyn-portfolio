import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
      icon: Arduino,
      desc: "Experience with Arduino and microcontroller-based projects.",
      color: "#22c55e",
    },
    {
      title: "Networking",
      icon: RJ,
      desc: "Knowledge in RJ45 cabling and network setup.",
      color: "#ef4444",
    },
    {
      title: "Cybersecurity",
      icon: Cyber,
      desc: "Understanding of basic cybersecurity principles.",
      color: "#8b5cf6",
    },
  ];

  const sectionRef = useRef(null);

  const [visibleLines, setVisibleLines] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let timers = [];

    devSkills.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, `dev-${index}`]);
        }, index * 210)
      );
    });

    const technicalStart = devSkills.length * 210 + 250;

    techSkills.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, `tech-${index}`]);
        }, technicalStart + index * 210)
      );
    });

    timers.push(
      setTimeout(() => {
        setCursorVisible(true);
      }, technicalStart + techSkills.length * 210 + 150)
    );

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  useEffect(() => {
    if (!cursorVisible) return;

    const interval = setInterval(() => {
      setCursor((v) => !v);
    }, 500);

    return () => clearInterval(interval);
  }, [cursorVisible]);

  const lineStyle = (show) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0px)" : "translateY(8px)",
    transition: "all .45s ease",
    marginBottom: "16px",
    flexWrap: "wrap",
    wordBreak: "break-word",
    color: "#f5f5f5",
    fontSize: "14px",
    lineHeight: 1.8,
  });

  const iconBoxStyle = (color) => ({
    width: "22px",
    height: "22px",
    borderRadius: "4px",
    background: "rgba(255,255,255,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  });

  const renderSkillLine = (skill, key, isVisible) => (
    <div key={skill.title} className="skill-line" style={lineStyle(isVisible)}>
      <span className="icon-box" style={iconBoxStyle(skill.color)}>
        <img
          src={skill.icon}
          alt={skill.title}
          className="icon-img"
          style={{
            width: "16px",
            filter: `drop-shadow(0 0 6px ${skill.color})`,
          }}
        />
      </span>

      <span>
        <span style={{ color: skill.color, fontWeight: 700 }}>[ok]</span>{" "}
        <strong>{skill.title}</strong>{" "}
        <span style={{ opacity: 0.5 }}>— {skill.desc}</span>
      </span>
    </div>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: "100px 20px",
        background: "linear-gradient(180deg,#1a0b14 0%,#2a0f1f 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            color: "rgba(255,255,255,.65)",
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 60px",
            lineHeight: 1.8,
          }}
        >
          Technologies and tools I use to build modern applications,
          secure infrastructures, and reliable IT solutions.
        </motion.p>

        {/* TERMINAL */}
        <div
          className="terminal-window"
          style={{
            background: "#1a0b14",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 15px 50px rgba(0,0,0,.35)",
            fontFamily: "'JetBrains Mono','Courier New',monospace",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              padding: "16px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f" }} />
            </div>

            <span style={{ color: "rgba(255,255,255,.45)", fontSize: "13px" }}>
              kaitlyn@portfolio: ~/skills
            </span>
          </div>

          <div style={{ height: "1px", background: "rgba(255,255,255,.08)" }} />

          {/* TERMINAL BODY */}
          <div className="terminal-body" style={{ padding: "2rem" }}>
            {/* DEVELOPMENT */}
            <div style={{ color: "#ec4899", marginBottom: "24px", fontSize: "15px" }}>
              $ ./load-skills --category=development
            </div>

            {devSkills.map((skill, index) =>
              renderSkillLine(skill, `dev-${index}`, visibleLines.includes(`dev-${index}`))
            )}

            <div style={{ height: 30 }} />

            <div style={{ color: "#ec4899", marginBottom: "24px", fontSize: "15px" }}>
              $ ./load-skills --category=technical
            </div>

            {techSkills.map((skill, index) =>
              renderSkillLine(skill, `tech-${index}`, visibleLines.includes(`tech-${index}`))
            )}

            {/* TERMINAL CURSOR */}
            {cursorVisible && (
              <div
                style={{
                  marginTop: "28px",
                  color: "#ec4899",
                  fontSize: "16px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>$</span>
                <span style={{ opacity: cursor ? 1 : 0, transition: "opacity .2s" }}>
                  ▌
                </span>
              </div>
            )}
          </div>
        </div>

        {/* RESPONSIVE STYLES */}
        <style>{`
          @media (max-width: 480px) {
            #skills .terminal-body {
              padding: 1.25rem;
            }

            #skills .skill-line {
              font-size: 12px;
            }

            #skills .icon-box {
              width: 18px !important;
              height: 18px !important;
            }

            #skills .icon-img {
              width: 12px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;