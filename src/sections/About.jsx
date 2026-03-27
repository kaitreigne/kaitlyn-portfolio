import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" style={{ padding: "90px 0" }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <p className="section-text">
            I am a BSIT graduate passionate about building modern web and
            mobile applications with real-world impact. I focus on creating
            systems that are functional, user-friendly, and solve real-world
            problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;