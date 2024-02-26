import "../assets/scss/SignupPage.scss";
import { motion } from "framer-motion";
import React from "react";
import InputFields from "../components/InputFields/InputFields";

const SignupPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="input-container">
        <InputFields group="signup" />
      </div>
    </motion.div>
  );
};

export default SignupPage;
