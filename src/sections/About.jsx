import { useEffect, useRef, useState } from "react";
import KaitlynImg from "../assets/Graduation.jpg";
import CCSImg from "../assets/StudentCouncil.jpg";
import TempestImg from "../assets/Creatives.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [typedCommands, setTypedCommands] = useState(["", "", ""]);
  const [outputVisible, setOutputVisible] = useState([false, false, false]);
  const [openIndex, setOpenIndex] = useState(null);

  const entries = [
    {
      id: "education",
      command: "cat education.md",
      style: "cat",
      meta: "-rw-r--r-- 1 kaitlyn staff 2.4kb",
      heading: "# BS Information Technology — Batch 2026",
      headingColor: "#facc15",
      image: KaitlynImg,
      description:
        "Passionate about technology with interests in software development, networking, and IT infrastructure. Experienced in developing web and mobile applications while continuously expanding my knowledge in system administration and secure technology solutions.",
    },
    {
      id: "leadership",
      command: "git log --oneline leadership",
      style: "git",
      hash: "a3f9c21",
      heading: "Treasurer — Department Student Council (CCS)",
      diffLine: "+ leadership   + communication   + organization",
      image: CCSImg,
      description:
        "Served as a student council officer, developing leadership, communication, and organizational skills through active participation in student initiatives and academic activities.",
    },
    {
      id: "creative",
      command: "ls -la creative/",
      style: "ls",
      folder: "drwxr-xr-x  tempest-gaming-society/",
      heading: "Assistant Publications Head",
      image: TempestImg,
      description:
        "Worked as a creatives designer, producing visual content and enhancing design skills while contributing to branding, engagement, and communication within the organization.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let cancelled = false;

    const typeCommand = (index) => {
      return new Promise((resolve) => {
        const text = entries[index].command;
        let i = 0;

        const step = () => {
          if (cancelled) return;
          if (i <= text.length) {
            setTypedCommands((prev) => {
              const next = [...prev];
              next[index] = text.slice(0, i);
              return next;
            });
            i++;
            setTimeout(step, 40);
          } else {
            resolve();
          }
        };

        step();
      });
    };

    const revealOutput = (index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          setOutputVisible((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
          setTimeout(resolve, 250);
        }, 150);
      });
    };

    const run = async () => {
      for (let i = 0; i < entries.length; i++) {
        await typeCommand(i);
        await revealOutput(i);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(index);
    }
  };

  const outputStyle = {
    opacity: 0,
    transform: "translateY(6px)",
    transition: "opacity 0.35s ease, transform 0.35s ease",
  };

  const outputStyleVisible = {
    opacity: 1,
    transform: "translateY(0px)",
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #2a0f1f 0%, #1a0b14 100%)",
      }}
    >
      <div className="container">
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
          className="about-terminal"
          style={{
            background: "#1a0b14",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 15px 50px rgba(0,0,0,0.35)",
            fontFamily: "'JetBrains Mono','Courier New',monospace",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f56", display: "inline-block" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#27c93f", display: "inline-block" }} />
            </div>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
              kaitlyn@portfolio: ~/about
            </span>
          </div>

          {/* BODY */}
          <div style={{ padding: "1.75rem" }}>
            {entries.map((entry, index) => {
              const isOpen = openIndex === index;
              const isVisible = outputVisible[index];

              return (
                <div
                  key={entry.id}
                  style={{ marginBottom: index < entries.length - 1 ? "20px" : "0" }}
                >
                  <p
                    style={{
                      color: "#ec4899",
                      fontSize: "13px",
                      margin: "0 0 10px",
                      minHeight: "18px",
                    }}
                  >
                    {"$ "}
                    {typedCommands[index]}
                    {typedCommands[index].length < entry.command.length && (
                      <span
                        style={{
                          display: "inline-block",
                          width: "7px",
                          height: "13px",
                          background: "#ec4899",
                          marginLeft: "2px",
                          verticalAlign: "middle",
                        }}
                      />
                    )}
                  </p>

                  <button
                    onClick={() => toggle(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${entry.id}`}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "8px",
                      cursor: "pointer",
                      padding: "12px 14px",
                      fontFamily: "inherit",
                      ...outputStyle,
                      ...(isVisible ? outputStyleVisible : {}),
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(236,72,153,0.08)";
                      e.currentTarget.style.borderColor = "rgba(236,72,153,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    }}
                  >
                    {entry.style === "cat" && (
                      <>
                        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "8px" }}>
                          {entry.meta}
                        </div>
                        <div style={{ color: entry.headingColor, fontSize: "13px", fontWeight: "bold" }}>
                          {entry.heading}
                        </div>
                      </>
                    )}

                    {entry.style === "git" && (
                      <div style={{ fontSize: "12.5px" }}>
                        <span style={{ color: "#38bdf8" }}>{entry.hash}</span>{" "}
                        <span style={{ color: "#f5f5f5" }}>{entry.heading}</span>
                        <div style={{ color: "#4ade80", fontSize: "11px", marginTop: "6px" }}>
                          {entry.diffLine}
                        </div>
                      </div>
                    )}

                    {entry.style === "ls" && (
                      <div style={{ fontSize: "12.5px" }}>
                        <span style={{ color: "#a78bfa" }}>{entry.folder}</span>
                        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginTop: "6px" }}>
                          {entry.heading}
                        </div>
                      </div>
                    )}

                    <div
                      style={{
                        marginTop: "10px",
                        color: "rgba(255,255,255,0.35)",
                        fontSize: "11px",
                      }}
                    >
                      {isOpen ? "▾ close" : "▸ click to expand"}
                    </div>
                  </button>

                  <div
                    id={`panel-${entry.id}`}
                    role="region"
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
                    <div
                      style={{
                        margin: "10px 0 4px",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={entry.image}
                        alt={entry.heading}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "contain",
                          objectPosition: "center",
                          display: "block",
                          background: "rgba(255,255,255,0.03)",
                        }}
                      />
                      <p
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "12.5px",
                          lineHeight: 1.7,
                          margin: 0,
                          padding: "14px 16px",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .about-terminal {
            border-radius: 10px;
          }
          .about-terminal > div:last-child {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;