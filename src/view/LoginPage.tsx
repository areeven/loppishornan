import "../assets/scss/LoginPage.scss";
import { motion } from "framer-motion";
import InputFields from "../components/InputFields/InputFields";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="input-container">
        <InputFields group="login" />
      </div>
    </motion.div>
  );
};

export default LoginPage;
