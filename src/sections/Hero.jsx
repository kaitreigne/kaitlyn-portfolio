import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import KaitlynImg from "../assets/Kaitlyn.png";
import "../styles/Hero.css";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",

        minHeight: "90vh",

        display: "flex",

        alignItems: "center",
        paddingTop: "20px",
        
        padding: isMobile ? "40px 20px" : "80px 40px",
        background:
          "linear-gradient(180deg,#1a0b14 0%,#2a0f1f 100%)",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-180px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#ec489944 0%,transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "-180px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#ec489922 0%,transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "100px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ========================= */}
        {/* LEFT CONTENT */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "42px" : "56px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "10px",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                color: "#ec4899",
                textShadow:
                  "0 0 25px rgba(236,72,153,.45)",
              }}
            >
              Kaitlyn
            </span>
          </h1>

          <h2 className="hero-role">
            Aspiring IT Professional
          </h2>

          <p
            style={{
              marginTop: "26px",
              maxWidth: isMobile ? "100%" : "470px",
              color: "rgba(255,255,255,.78)",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Passionate about building practical technology solutions through software development, problem-solving, and continuous learning.
          </p>

          {/* CTA Buttons */}

          <div
            style={{
              display: "flex",
              gap: "18px",
              marginTop: "40px",
              justifyContent: isMobile
                ? "center"
                : "flex-start",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#projects"
              onMouseEnter={() =>
                setHoverPrimary(true)
              }
              onMouseLeave={() =>
                setHoverPrimary(false)
              }
              style={{
                background: "#ec4899",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "12px",
                fontWeight: 600,
                transition: ".25s",
                transform: hoverPrimary
                  ? "scale(1.03)"
                  : "scale(1)",
                boxShadow: hoverPrimary
                  ? "0 10px 28px rgba(236,72,153,.45)"
                  : "0 6px 18px rgba(236,72,153,.20)",
              }}
            >
              View Projects
            </a>

            <a
              href="#about"
              onMouseEnter={() =>
                setHoverSecondary(true)
              }
              onMouseLeave={() =>
                setHoverSecondary(false)
              }
              style={{
                padding: "14px 28px",
                borderRadius: "12px",
                textDecoration: "none",
                border: "1px solid #ec4899",
                color: hoverSecondary
                  ? "#fff"
                  : "#ec4899",
                background: hoverSecondary
                  ? "#ec4899"
                  : "transparent",
                transition: ".25s",
                transform: hoverSecondary
                  ? "scale(1.03)"
                  : "scale(1)",
              }}
            >
              About Me
            </a>
          </div>
        </motion.div>
        {/* ========================= */}
        {/* RIGHT CONTENT */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            position: "relative",
            minWidth: isMobile ? "100%" : "420px",
            marginTop: "25px",
          }}
        >
          {/* Pink Glow */}
          <div
            style={{
              position: "absolute",
              width: isMobile ? "360px" : "620px",
              height: isMobile ? "360px" : "620px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,#ec489955 0%,#ec489922 45%,transparent 75%)",
              filter: "blur(90px)",
              zIndex: 0,
            }}
          />

          {/* Floating Image */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* IMAGE CARD */}
            <div
              style={{
                width: isMobile ? "330px" : "450px",
                height: isMobile ? "440px" : "620px",
                overflow: "hidden",
                borderRadius: "24px",
                position: "relative",
                background: "#221019",
                border: "1px solid rgba(255,255,255,.08)",
                boxShadow:
                  "0 20px 60px rgba(236,72,153,.25)",
              }}
            >
              <img
                src={KaitlynImg}
                alt="Kaitlyn"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  transition: "all .45s ease",
                }}
              />

              {/* Bottom Fade */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: "180px",
                  background:
                    "linear-gradient(to top,#1a0b14 0%,rgba(26,11,20,.75) 45%,transparent)",
                }}
              />
            </div>

            {/* Open To Work Badge */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              style={{
                position: "absolute",
                bottom: "24px",
                left: "-30px",
                background:
                  "rgba(26,11,20,.92)",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "999px",
                border: "1px solid #ec4899",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,.35)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                    boxShadow:
                      "0 0 12px #22c55e",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    Open to Work
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color:
                        "rgba(255,255,255,.65)",
                    }}
                  >
                    Available for Opportunities
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              style={{
                position: "absolute",
                top: "30px",
                right: "-35px",
                background:
                  "rgba(26,11,20,.92)",
                border: "1px solid rgba(236,72,153,.4)",
                borderRadius: "18px",
                padding: "16px 20px",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0 12px 30px rgba(0,0,0,.35)",
              }}
            >
              <div
                style={{
                  color: "#ec4899",
                  fontSize: "26px",
                  fontWeight: 700,
                }}
              >
                4+
              </div>

              <div
                style={{
                  color:
                    "rgba(255,255,255,.75)",
                  fontSize: "13px",
                  marginTop: "2px",
                }}
              >
                Major Projects
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;