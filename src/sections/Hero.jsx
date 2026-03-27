import { motion } from "framer-motion";
import { useState } from "react";
import KaitlynImg from "../assets/Kaitlyn.png";
import KaitlynImg2 from "../assets/Kaitlyn2.png";

const Hero = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #1a0b14 0%, #2a0f1f 100%)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* LEFT SIDE (TEXT) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1",
            minWidth: "300px",
          }}
        >
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
            Hi, I’m{" "}
            <span style={{ color: "#ec4899" }}>Kaitlyn</span>
          </h1>

          <h2
            style={{
              fontSize: "36px",
              color: "#ec4899",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            IT Developer
          </h2>

          <p
            style={{
              maxWidth: "500px",
              lineHeight: "1.7",
              marginBottom: "30px",
              color: "#fbcfe8",
            }}
          >
            I build modern web and mobile applications focused on usability,
            performance, and real-world solutions. Passionate about creating
            systems that make a difference.
          </p>

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#" className="btn-outline">
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE (IMAGE) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* 💖 SOFT GLOW */}
          <div
            style={{
              position: "absolute",
              width: "520px",
              height: "520px",
              background:
                "radial-gradient(circle at center, #ec4899aa 0%, #ec489955 40%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(100px)",
              zIndex: 0,
            }}
          ></div>

          {/* IMAGE BOX */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              borderRadius: "25px",
              overflow: "hidden",
              width: "420px",
              height: "520px",
            }}
          >
            <img
              src={isHover ? KaitlynImg2 : KaitlynImg}
              alt="Kaitlyn"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center", // 👈 centered ka na
                transition: "0.4s ease",
              }}
            />

            {/* 💖 SEAMLESS FADE */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "160px",
                background:
                  "linear-gradient(to top, #2a0f1f 0%, #1a0b14 40%, transparent 100%)",
                pointerEvents: "none",
              }}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;