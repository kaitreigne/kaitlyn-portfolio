import { motion } from "framer-motion";
import Graduation from "../assets/Graduation.jpg";
import StudentCouncil from "../assets/StudentCouncil.jpg";
import Creatives from "../assets/Creatives.jpg";

const About = () => {
  return (
    <section id="about" style={{ padding: "90px 0" }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        {/* INTRO */}
        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "40px" }}
        >
          <p className="section-text">
            An adaptable and driven developer capable of building modern web
            and mobile applications with strong attention to usability and
            performance. Quick to learn new technologies, flexible in different
            roles, and ready to contribute effectively in real-world
            development environments.
          </p>
        </motion.div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
          }}
        >
          {/* 🎓 GRADUATION */}
          <motion.div
            className="card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                width: "100%",
                height: "200px",
                background: "#1a0b14",
                borderRadius: "12px",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "10px",
              }}
            >
              <img
                src={Graduation}
                alt="Graduation"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <h3 style={{ marginBottom: "10px" }}>
              Bachelor of Science in Information Technology — Batch 2026
            </h3>

            <p className="section-text">
              Graduated with a strong foundation in software development,
              equipped with both technical knowledge and practical experience
              in building real-world applications.
            </p>
          </motion.div>

          {/* 🏫 STUDENT COUNCIL */}
          <motion.div
            className="card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                width: "100%",
                height: "200px",
                background: "#1a0b14",
                borderRadius: "12px",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "10px",
              }}
            >
              <img
                src={StudentCouncil}
                alt="Student Council"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <h3 style={{ marginBottom: "10px" }}>
              Treasurer — Department Student Council (CCS)
            </h3>

            <p className="section-text">
              Served as a student council officer, developing leadership,
              communication, and organizational skills through active
              participation in student initiatives and academic activities.
            </p>
          </motion.div>

          {/* 🎨 CREATIVES */}
          <motion.div
            className="card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                width: "100%",
                height: "200px",
                background: "#1a0b14",
                borderRadius: "12px",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "10px",
              }}
            >
              <img
                src={Creatives}
                alt="Creatives Designer"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <h3 style={{ marginBottom: "10px" }}>
              Creatives Designer — Tempest Gaming Society
            </h3>

            <p className="section-text">
              Worked as a creatives designer, producing visual content and
              enhancing design skills while contributing to branding,
              engagement, and communication within the organization.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;