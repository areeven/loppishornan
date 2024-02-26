import "../assets/scss/AdminPage.scss";
import { motion } from "framer-motion";
import React from "react";

const AdminPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1>Admin</h1>
    </motion.div>
  );
};

export default AdminPage;
