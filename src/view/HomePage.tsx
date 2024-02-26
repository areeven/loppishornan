import React from "react";
import { motion } from "framer-motion";
import "../assets/scss/HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Hejsan</h1>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
