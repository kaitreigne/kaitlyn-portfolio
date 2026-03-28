import { motion } from "framer-motion";
import KaitlynImg from "../assets/Kaitlyn.png";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        padding: "140px 0",
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
          gap: "50px",
        }}
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1",
            minWidth: "300px",
          }}
        >
          {/* NAME */}
          <h1
            style={{
              fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
              marginBottom: "10px",
              lineHeight: "1.2",
            }}
          >
            Hi, I’m{" "}
            <span
              style={{
                color: "#ec4899",
                textShadow: "0 0 20px rgba(236,72,153,0.5)",
              }}
            >
              Kaitlyn
            </span>
          </h1>

          {/* ROLE */}
          <h2
            style={{
              fontSize: "28px",
              color: "#f472b6",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            Aspiring IT Developer
          </h2>

          {/* DESCRIPTION */}
          <p
            style={{
              maxWidth: "520px",
              lineHeight: "1.8",
              marginBottom: "35px",
              color: "#fbcfe8",
              fontSize: "16px",
            }}
          >
            I create modern web and mobile applications focused on usability,
            performance, and real-world solutions. I enjoy building systems
            that are both functional and impactful.
          </p>

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#about" className="btn-outline">
              About Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
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
          {/* GLOW */}
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

          {/* IMAGE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            whileHover={{ scale: 1.05 }} // 🔥 hover zoom
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "relative",
              zIndex: 1,
              borderRadius: "25px",
              overflow: "hidden",
              width: "420px",
              height: "520px",
              boxShadow: "0 20px 60px rgba(236,72,153,0.25)",
            }}
          >
            <img
              src={KaitlynImg}
              alt="Kaitlyn"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transition: "all 0.4s ease",
              }}
            />

            {/* FADE */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "160px",
                background:
                  "linear-gradient(to top, #2a0f1f 0%, #1a0b14 40%, transparent 100%)",
              }}
            ></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;