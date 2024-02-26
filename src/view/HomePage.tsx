import "../assets/scss/HomePage.scss";
import { motion } from "framer-motion";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Home</h1>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
