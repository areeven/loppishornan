import "../assets/scss/ProfilePage.scss";
import { motion } from "framer-motion";
import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1>Profile</h1>
    </motion.div>
  );
};

export default ProfilePage;
