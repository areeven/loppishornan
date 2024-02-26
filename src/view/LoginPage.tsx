import "../assets/scss/LoginPage.scss";
import { motion } from "framer-motion";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1>Login</h1>
    </motion.div>
  );
};

export default LoginPage;
