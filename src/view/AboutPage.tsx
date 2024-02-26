import "../assets/scss/AboutPage.scss";
import React from "react";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1>About</h1>
    </motion.div>
  );
};

export default AboutPage;
